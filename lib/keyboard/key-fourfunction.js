import Key from './key.js';
import { h } from '../element.js';

class KeyFourfunction extends Key {
  element() {
    const { name, formula, ariaLabel, symbol } = this;
    let textClass = 'test';
    let fontClass = 'font-normal';
    switch (formula) {
      case '(':
      case ')':
      case '%':
        textClass = 'text-sm';
        break;
      case 'AC':
      case 'CE':
        textClass = 'text-[13px]';
        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        textClass = 'text-lg';
        break;
      case '=':
        textClass = 'text-lg';
        fontClass = 'font-bold';
      default:
    }

    let className =
      'box-border rounded border border-solid border-[#dadce0] bg-[#dadce0] text-[#202124] outline-0 dark:border-[#5f6368] dark:bg-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#70757a] dark:hover:border-[#70757a]';
    if (formula === '=') {
      className =
        'rounded border border-solid border-[#4285f4] bg-[#4285f4] text-white outline-0 dark:border-[#8ab4f8] dark:bg-[#8ab4f8] dark:text-[#202124] dark:hover:bg-[#70757a] dark:hover:border-[#70757a]';
    }
    return super
      .element()
      .addClass(textClass)
      .addClass(fontClass)
      .child(
        h('div', className)
          .attr({
            role: 'button',
            tabindex: 0,
            'aria-label': ariaLabel,
          })
          .html(symbol)
          .on('click', () => this.change({ name, formula, symbol })),
      );
  }
}

export default KeyFourfunction;
