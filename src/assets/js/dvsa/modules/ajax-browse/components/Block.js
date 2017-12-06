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
  itemClickHanlder = (item, itemIndex, event) => {
    event.preventDefault();

    // Check if item is loading, or block is at end of tree, or endpoint url does not exist
    if (item.loading || item.endOfTree || !this.props.endpointURL) return;

    // Enable whole state loading
    this.props.enableLoading();

    // Enable loading for clicked item
    this.props.enableItemLoading(this.props.blockIndex, itemIndex);

    // Set current item as active
    this.props.enableItemActive(this.props.blockIndex, itemIndex);

    // Fetch new block items using ajax
    axios
      .post(this.props.endpointURL, {
        params: {
          itemId: item.id,
        },
      })
      .then(response => {
        const { items } = response.data;
        const newBlockIndex = this.props.blockIndex + 1;

        // Check if there is already another block after current block
        if (this.props.blocks && this.props.blocks[newBlockIndex]) {
          // Update next block with new items
          this.props.updateBlock(newBlockIndex, items);
        } else {
          // Add a new block
          this.props.addBlock(items);
        }

        if (this.props.blocks.length > newBlockIndex + 1) {
          this.props.removeBlocksAfterIndex(newBlockIndex);
        }

        // Disable loading for clicked item
        this.props.disableItemLoading(this.props.blockIndex, itemIndex);

        // Disable loading for whole ajax browse
        this.props.disableLoading();
      });
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
