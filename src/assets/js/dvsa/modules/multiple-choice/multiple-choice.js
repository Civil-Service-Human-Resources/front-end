export class MultiChoice {
  constructor() {
    this.state = {
      objects: [],
    };

    let multiChoiceItems = Array.from(document.getElementsByClassName('multiple-choice'));
    if (!multiChoiceItems || !multiChoiceItems.length) return console.log('Multi choice components not found on DOM');
    multiChoiceItems.forEach(this.setup);
  }

  setup = (item, index) => {
    let self, targetId, target, inputRef;
    self = item;

    targetId = self.dataset.target;
    target = document.getElementById(targetId);
    target.setAttribute('aria-expanded', false);
    inputRef = self.querySelector('input[name$="radio-contact-group"]');

    this.state.objects.push({
      index,
      inputRef,
      target,
      isActive: inputRef.checked || false,
    });

    inputRef.addEventListener('change', this.handleChangeState);
  };

  handleChangeState = () => {
    this.state.objects.forEach(item => {
      this.toggleState(item);
    });
  };

  toggleState = item => {
    item.isActive = item.inputRef.checked;
    if (item.isActive) {
      item.target.classList.remove('js-hidden');
      item.target.setAttribute('aria-expanded', true);
    } else {
      item.target.classList.add('js-hidden');
      item.target.setAttribute('aria-expanded', false);
    }
  };
}
