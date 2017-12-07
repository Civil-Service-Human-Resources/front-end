import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  addBlock,
  updateBlock,
  enableLoading,
  disableLoading,
  enableItemLoading,
  disableItemLoading,
  enableItemActive,
  disableItemActive,
  removeBlocksAfterIndex,
} from './../actions';
import BlockItem from './BlockItem';

class Block extends Component {
  /**
   * Handles the click event of the item inside the block
   *
   * @param {Object} item Current item passed when clicked
   * @param {Number} itemIndex Index of the current item inside the block
   * @param {Event} event DOM event object when item is clicked
   */
  itemClickHanlder = (item, itemIndex, event) => {
    // Check if item is loading, or block is at end of tree, or endpoint url does not exist
    if (item.loading || item.endOfTree || !this.props.endpointURL) return;

    // Prevent browser default behaviour of link
    event.preventDefault();

    // Temporary index for the next block,
    // based on the current block index
    const newBlockIndex = this.props.blockIndex + 1;

    // Check if this item was already clicked,
    // therefore no need to fetch data again
    if (item.active === true) {
      // Remove all other block after the next block,
      // and disable loading status for current item
      return this.removeAllBlocksAfterIndexAndDisableLoading(itemIndex, newBlockIndex);
    }

    // Enable whole state loading
    this.props.enableLoading();

    // Enable loading for clicked item
    this.props.enableItemLoading(this.props.blockIndex, itemIndex);

    // Fetch new block items using ajax
    axios
      .post(this.props.endpointURL, {
        params: {
          itemId: item.id,
          blocksLength: this.props.blocks.length,
        },
      })
      .then(response => {
        const { items } = response.data;

        // Check to make sure response has items
        if (!items) {
          this.props.disableItemLoading(itemIndex);
          this.props.disableLoading();
          return;
        }

        // Check if there is already another block after current block
        if (this.props.blocks && this.props.blocks[newBlockIndex]) {
          // Update next block with new items
          this.props.updateBlock(newBlockIndex, items);
        } else {
          // Add a new block
          this.props.addBlock(items);
        }

        // Set current item as active
        this.props.enableItemActive(this.props.blockIndex, itemIndex);

        // Remove all other blocks after new one (if any)
        this.removeAllBlocksAfterIndexAndDisableLoading(itemIndex, newBlockIndex);
      });
  };

  /**
   * Removes all other blocks after the block index provide
   * Also disables the loading status of current item/ajax browse
   *
   * @param {Number} itemIndex Index of the current item inside the block
   * @param {Number} newBlockIndex Index of the currenet block
   */
  removeAllBlocksAfterIndexAndDisableLoading = (itemIndex, newBlockIndex) => {
    // Check that the params are valid
    if (newBlockIndex === undefined || !this.props.blocks) return;
    if (this.props.blocks.length > newBlockIndex + 1) {
      this.props.removeBlocksAfterIndex(newBlockIndex);
    }

    // Disable loading for clicked item
    this.props.disableItemLoading(this.props.blockIndex, itemIndex);

    // Disable loading for whole ajax browse
    this.props.disableLoading();
  };

  render() {
    return (
      <div className="ajax-browse__block">
        <div className="ajax-browse__block-inner">
          <ul className="ajax-browse__list">
            {this.props.items.map((item, index) => {
              return (
                <BlockItem
                  key={index}
                  id={item.id}
                  href={item.href}
                  heading={item.heading}
                  description={item.description}
                  active={item.active}
                  loading={item.loading}
                  endOfTree={item.endOfTree}
                  onClick={this.itemClickHanlder.bind(this, item, index)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Block.propTypes = {
  block: PropTypes.object.isRequired,
  blockIndex: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  blocks: state.blocks,
  endpointURL: state.settings.endpointURL,
});

const mapActionsToProps = {
  addBlock,
  updateBlock,
  enableLoading,
  disableLoading,
  enableItemLoading,
  disableItemLoading,
  enableItemActive,
  disableItemActive,
  removeBlocksAfterIndex,
};

export default connect(mapStateToProps, mapActionsToProps)(Block);
