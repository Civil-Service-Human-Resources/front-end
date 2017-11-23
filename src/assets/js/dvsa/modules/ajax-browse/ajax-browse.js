import { AJAX_BROWSE_CONSTANTS } from './constants';
import { toggleClass, elHasClass } from './../../../shared';

export class AjaxBrowse {
  
  constructor() {

    // Get elements
    this.ajaxBrowse = document.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.base);
    this.item = document.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.item);

    this.state = {
      currentBlocks: []
    };

    this.setup();

  }

  setup = () => {
    // Add events
    $.delegate(document, 'click', '.' + AJAX_BROWSE_CONSTANTS.classNames.item, this.itemClickHandler);

    // // Get the current number of items
    // this.state.currentSize = this.ajaxBrowse.getAttribute('data-total-items') || 1;

    // // Get active item element
    this.state.curentActiveBlockElement = this.ajaxBrowse.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.block.active);

    // Get all items
    let currentBlocks = this.ajaxBrowse.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);

    if( !currentBlocks ) {
      return console.warn('No blocks found inside of the ajax browse');
    }

    // Get total items
    this.state.currentSize = currentBlocks.length;
    this.state.currentBlocks = currentBlocks;

    // Refresh state
    this.refreshState();
  }

  itemClickHandler = (event) => {
    event.preventDefault();
    // this.state.currentSize = 2;
    let newItems = [
      {
        heading: 'Apprenticeships, 14 to 19 education and training for work',
        description: 'Includes finding a course, finding an apprenticeship, 16 to 19 Bursary Fund',
        url: '#',
      },
      {
        heading: 'Apprenticeships, 14 to 19 education and training for work',
        description: 'Includes finding a course, finding an apprenticeship, 16 to 19 Bursary Fund',
        url: '#',
      },
      {
        heading: 'Apprenticeships, 14 to 19 education and training for work',
        description: 'Includes finding a course, finding an apprenticeship, 16 to 19 Bursary Fund',
        url: '#',
      },
      {
        heading: 'Apprenticeships, 14 to 19 education and training for work',
        description: 'Includes finding a course, finding an apprenticeship, 16 to 19 Bursary Fund',
        url: '#',
      },
      {
        heading: 'Apprenticeships, 14 to 19 education and training for work',
        description: 'Includes finding a course, finding an apprenticeship, 16 to 19 Bursary Fund',
        url: '#',
      }
    ];
    let itemsHTML = this.generateNewBlockHTML(newItems);
    this.state.currentSize = 2;
    this.resetAllStateBlocks();
    let currentTotalItemsClassName = AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.sizes[2];
    if( currentTotalItemsClassName ) {
      this.ajaxBrowse.setAttribute('class', AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.base + ' ' + currentTotalItemsClassName);
    }
    this.ajaxBrowse.innerHTML = this.ajaxBrowse.innerHTML + itemsHTML;
    
    console.log('test1');
    // this.refreshState();
    event.target.blur();
  }

  generateNewBlockHTML = (items = false) => {
    if( !items ) return;
    let itemsHTML = [];
    items.forEach(item => {
      let itemHeading, itemDescription;
      if( item.heading ) {
        itemHeading = `
        <span class="ajax-browse__link-heading">
          ${item.heading}
        </span>
        `;
      }
      if( item.description ) {
        itemDescription = `
        <span class="ajax-browse__link-description">
          ${item.description}
        </span>
        `;
      }
      itemsHTML.push(`
      <li class="ajax-browse__item">
        <a href="${item.url}" class="ajax-browse__link">
         ${itemHeading}
         ${itemDescription} 
        </a>
      </li>
      `);
    });
    itemsHTML = itemsHTML.join(' ');
    let HTML = `
    <div class="ajax-browse__block">
      <div class="ajax-browse__block-inner">
        <ul class="ajax-browse__list">
          ${itemsHTML}
        </ul>
      </div>
    </div>
    `;
    return HTML;
  }
  
  refreshState = () => {

    // Check if current size state was changed
    // if( !this._previousState || this.state.currentSize !== this._previousState.currentSize ) {
      console.log('test');
      // Replace class based on number of items
      let blocks = this.ajaxBrowse.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);
      let currentTotalItemsClassName = AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.sizes[blocks.length];
      if( currentTotalItemsClassName ) {
        this.ajaxBrowse.setAttribute('class', AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.base + ' ' + currentTotalItemsClassName);
      }
    // }

    // Reset all blocks
    this.resetAllStateBlocks();

    this._previousState = this.state;

  }

  resetAllStateBlocks = () => {
    // if( this.state.currentBlocks ) {
      // Reset all blocks to normal
      let blocks = this.ajaxBrowse.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);
      blocks.forEach((block, index)=> {
        if( index == blocks.length - 1 ) {
          block.setAttribute('class', AJAX_BROWSE_CONSTANTS.classNames.block.base + ' ' + AJAX_BROWSE_CONSTANTS.classNames.block.active);
        } else {
          block.setAttribute('class', AJAX_BROWSE_CONSTANTS.classNames.block.base + ' ' + AJAX_BROWSE_CONSTANTS.classNames.block.inactive);
        }
        // toggleClass(block, AJAX_BROWSE_CONSTANTS.classNames.block.active, false);
        // toggleClass(block, AJAX_BROWSE_CONSTANTS.classNames.block.hidden, false);
      });
      // for(let i = 0; i < this.state.currentBlocks.length; i++) {
      //   this.state.currentBlocks[i].setAttribute('class', AJAX_BROWSE_CONSTANTS.classNames.block.base);
      // }
      // Make the last block item active
      let lastBlockItem = blocks[blocks.length - 1];
      toggleClass(lastBlockItem, AJAX_BROWSE_CONSTANTS.classNames.block.active, true);

      lastBlockItem.focus();

    // }
  }

}
  