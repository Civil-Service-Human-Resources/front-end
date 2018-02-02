export class MultiChoice {
  constructor(multiChoiceItem) {
    // Sets THIS to the passed in object
    this.multiChoiceItem = multiChoiceItem;

    // Check if multiple choice component exists
    if (!this.multiChoiceItem) return console.log('Multiple choice item cannot be found');

    // Get the components target
    this.targetId = this.multiChoiceItem.dataset.target;
    this.target = document.getElementById(this.targetId);

    // Check if target is defined
    if (!this.targetId || !this.target) return console.log('Target not defined');

    let multiChoiceItems = Array.from(document.getElementsByClassName('multiple-choice'));

    if (!multiChoiceItems) return console.log('Could not find multiple choice items');

    // Defines empty state obj
    this.state = {
      nodeIndex: this.getIndexOfThis(multiChoiceItems, multiChoiceItem),
      targetNode: {
        id: this.targetId,
        node: this.target,
        isActive: false,
      },
    };

    this.setup();
  }

  // Sets up an inital radioMultiChoice component
  setup = () => {
    this.target.setAttribute('aria-expanded', this.state.targetNode.isActive);
    this.multiChoiceItem.addEventListener('click', this.handleClick);
  };

  handleClick = event => {
    this.toggleState();
  };

  toggleState = () => {};

  resetState = () => {};

  getIndexOfThis = (ary, context) => {
    return ary.indexOf(context);
  };
}
