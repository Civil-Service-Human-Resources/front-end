import { MultiChoice } from './multiple-choice';

export const initMultiChoice = () => {
  let MultiChoiceItems = Array.from(document.querySelectorAll('.multiple-choice'));

  if (MultiChoiceItems && MultiChoiceItems.length) {
    MultiChoiceItems.forEach(MultiChoiceItem => {
      new MultiChoice(MultiChoiceItem);
    });
  }
};
