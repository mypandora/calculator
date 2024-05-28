import { h } from '../element.js';

const isLight = window.matchMedia('(prefers-color-scheme:light)').matches;

class Rad {
  constructor() {
    this.el = h('div', 'relative float-left w-1/2 align-middle')
      .attr({
        role: 'button',
        tabindex: 0,
        'aria-label': '弧度',
      })
      .html('Rad');
  }
}

class Deg {
  constructor() {
    this.el = h('div', 'relative float-right w-1/2')
      .attr({
        role: 'button',
        tabindex: 0,
        'aria-label': '角度',
      })
      .html('Deg');
  }
}

class RadDeg {
  constructor() {
    this.name = 'radDeg';
    this.ariaLabel = '在弧度和角度之间切换';
    this.el = h(
      'div',
      'relative m-1 box-border cursor-pointer touch-manipulation rounded text-center text-[13px] leading-[34px]',
    );
    this.change = () => {};

    this.rad = new Rad();
    this.deg = new Deg();

    this.deg.el.addClass(isLight ? 'text-[#70757a]' : 'dark:text-[#9aa0a6]');

    this.el.child(
      h(
        'div',
        'box-border overflow-hidden rounded border border-solid border-[#dadce0] bg-[#dadce0] text-[#202124] outline-0 dark:border-[#5f6368] dark:bg-[#5f6368] dark:text-[#e8eaed]',
      )
        .children(
          this.rad.el,
          h(
            'div',
            'absolute bottom-2.5 left-1/2 top-2.5 -translate-x-1/2 border-0 border-l border-solid border-l-[#70757a] dark:border-l-[#bdc1c6]',
          ),
          this.deg.el,
        )
        .on('click', () => {
          if (isLight) {
            this.rad.el.toggleClass('text-[#70757a]');
            this.deg.el.toggleClass('text-[#70757a]');
          } else {
            this.rad.el.toggleClass('dark:text-[#9aa0a6]');
            this.deg.el.toggleClass('dark:text-[#9aa0a6]');
          }
          this.change({ name: 'radDeg' });
        }),
    );
  }
}

export default RadDeg;
