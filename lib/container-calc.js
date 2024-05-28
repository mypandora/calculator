import { h, Element } from './element.js';
import IconHistory from './icon-history.js';

class Prev extends Element {
  constructor() {
    super('div', 'relative ml-10 table overflow-hidden');
    const value = h(
      'span',
      'float-right mt-[3px] w-full whitespace-nowrap text-right',
    );
    this.child(
      h(
        'div',
        'relative table h-5 w-full table-fixed text-xs text-[#70757a] transition duration-200 dark:text-[#969ba1]',
      ).child(value),
    );
    this.value = value;
  }
}

class Current extends Element {
  constructor() {
    super(
      'div',
      'relative z-0 table h-8 w-full table-fixed align-bottom text-3xl leading-8 transition duration-200',
    );
    const value = h(
      'span',
      'float-right select-text whitespace-normal dark:text-[#e8eaed]',
    )
      .attr('id', 'cwos')
      .child('0');
    this.child(
      h('div', 'table-row outline-0')
        .attr('tabindex', 0)
        .child(
          h('div', 'table-cell w-full overflow-hidden align-middle').child(
            value,
          ),
        ),
    );
    this.value = value;
  }
}

class ContainerCalc extends Element {
  constructor() {
    super(
      'div',
      'm-auto box-border h-[72px] w-[98.5%] rounded-lg border border-solid border-[#dadce0] pb-0 pl-2.5 pr-3.5 pt-2.5 dark:border-[#3c4043]',
    );

    this.iconHistory = new IconHistory();
    this.prev = new Prev();
    this.current = new Current();

    this.children(this.iconHistory.el, this.prev.el, this.current.el);
  }

  updateOutputOperation(value) {
    this.current.value.html(value);
  }
  updateOutputResult(value, hasHistory) {
    // 先获取表达式，
    if (hasHistory) {
      const current = this.current.value.html();
      this.prev.value.html(`${current} =`);
    }
    //
    this.current.value.html(value);
  }
}

export default ContainerCalc;
