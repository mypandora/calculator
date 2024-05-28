import Key from './key.js';
import { h } from '../element.js';

class KeyScientific extends Key {
  element() {
    let { name, formula, ariaLabel, symbol } = this;
    return super
      .element()
      .addClass('text-[13px]')
      .child(
        h(
          'div',
          'box-border overflow-hidden rounded border border-solid border-[#dadce0] bg-[#dadce0] text-[#202124] outline-0 dark:border-[#5f6368] dark:bg-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#70757a] dark:hover:border-[#70757a]',
        )
          .attr({
            role: 'button',
            tabindex: 0,
            'aria-label': ariaLabel,
          })
          .html(symbol)
          .on('click', () => {
            let rnd;
            if (name === 'random') {
              rnd = Math.random().toFixed(7);
              formula = rnd;
              symbol = rnd;
            }
            this.change({ name, formula, symbol });
          }),
      );
  }
}

export default KeyScientific;
