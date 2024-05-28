import Key from './key.js';
import { h } from '../element.js';

class Inverse extends Key {
  constructor() {
    super('inverse', false, '倒数', 'Inv');
  }

  element() {
    const { name, formula, ariaLabel, symbol } = this;
    const value = h(
      'div',
      'box-border overflow-hidden rounded border border-solid border-[#dadce0] bg-[#dadce0] text-[#202124] text-[13px] outline-0 dark:border-[#5f6368] dark:bg-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#70757a] dark:hover:border-[#70757a]',
    )
      .attr({
        role: 'button',
        tabindex: 0,
        'aria-label': ariaLabel,
      })
      .html(symbol)
      .on('click', () => {
        this.toggle();
        this.change({ name, formula, symbol });
      });
    this.value = value;
    return super.element().child(value);
  }

  toggle() {
    this.value.el.classList.toggle(
      ...[
        'bg-[#f1f3f4]',
        'border-[#f1f3f4]',
        'dark:bg-[#3c4043]',
        'dark:border-[#3c4043]',
      ],
    );
  }
}

export default Inverse;
