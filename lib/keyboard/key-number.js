import Key from './key.js';
import { h } from '../element.js';

class KeyNumber extends Key {
  element() {
    const { name, formula, ariaLabel, symbol } = this;
    let textClass = '';
    let fontClass = 'font-normal';
    switch (formula) {
      case 'dot':
        textClass = 'text-lg';
        fontClass = 'font-bold';
        break;
      default:
        textClass = 'text-sm';
    }

    return super
      .element()
      .addClass(textClass)
      .addClass(fontClass)
      .child(
        h(
          'div',
          'rounded border border-solid border-[#f1f3f4] bg-[#f1f3f4] text-[#202124] outline-0 dark:border-[#3c4043] dark:bg-[#3c4043] dark:text-[#e8eaed] dark:hover:bg-[#424548] dark:hover:border-[#424548]',
        )
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

export default KeyNumber;
