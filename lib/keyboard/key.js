import { h } from '../element.js';

class Key {
  constructor(name, formula, ariaLabel, symbol) {
    this.name = name;
    this.formula = formula;
    this.ariaLabel = ariaLabel;
    this.symbol = symbol;
    this.el = this.element();
    this.change = () => {};
  }

  element() {
    return h(
      'div',
      'relative m-1 box-border cursor-pointer touch-manipulation rounded text-center leading-[34px]',
    );
  }
}

export default Key;
