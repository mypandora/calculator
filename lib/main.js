import { evaluate, sin, cos, tan, sqrt, unit } from 'mathjs';
import { h } from './element.js';

import ContainerCalc from './container-calc.js';
import ContainerHistory from './container-history.js';
//
import RadDeg from './keyboard/rad-deg.js';
import Factorial from './keyboard/factorial.js';
//
import Inverse from './keyboard/inverse.js';
import Sine from './keyboard/sine.js';
import Arcsine from './keyboard/arcsine.js';
import NaturalLogarithm from './keyboard/natural-logarithm.js';
import EPowX from './keyboard/e-pow-x.js';
//
import PI from './keyboard/pi.js';
import Cosine from './keyboard/cosine.js';
import Arccosine from './keyboard/arccosine.js';
import Logarithm from './keyboard/logarithm.js';
import TenPowX from './keyboard/ten-pow-x.js';
//
import Euler from './keyboard/euler.js';
import Tangent from './keyboard/tangent.js';
import Arctangent from './keyboard/arctangent.js';
import SquareRoot from './keyboard/square-root.js';
import Square from './keyboard/square.js';
//
import Answer from './keyboard/answer.js';
import Random from './keyboard/random.js';
import Exponential from './keyboard/exponential.js';
import XPowY from './keyboard/x-pow-y.js';
import XRootY from './keyboard/x-root-y.js';
//
import Zero from './keyboard/0.js';
import One from './keyboard/1.js';
import Two from './keyboard/2.js';
import Three from './keyboard/3.js';
import Four from './keyboard/4.js';
import Five from './keyboard/5.js';
import Six from './keyboard/6.js';
import Seven from './keyboard/7.js';
import Eight from './keyboard/8.js';
import Nine from './keyboard/9.js';
import Point from './keyboard/point.js';
//
import Equals from './keyboard/equals.js';
//
import Plus from './keyboard/plus.js';
import Minus from './keyboard/minus.js';
import Multiply from './keyboard/multiply.js';
import Divide from './keyboard/divide.js';
import Percentage from './keyboard/percentage.js';
import ParenthesisLeft from './keyboard/parenthesis-left.js';
import ParenthesisRight from './keyboard/parenthesis-right.js';
import AC from './keyboard/ac.js';
import CE from './keyboard/ce.js';

import './style.css';

function replacer(match, p1) {
  if (p1.length > 1) {
    return `<sup>${p1.slice(0, -1)}</sup>`;
  }
  return '<sup>□</sup>';
}

export class Calculator {
  constructor(selectors) {
    this.targetEl = selectors;
    if (typeof selectors === 'string') {
      this.targetEl = document.querySelector(selectors);
    }
    this.build();

    this.data = {
      operation: [],
      formula: [],
    };
    this.ans = 0;
    this.isRad = true;
  }

  build() {
    const fragment = document.createDocumentFragment();

    //
    const div = h(
      'div',
      'ltr relative min-h-[72px] w-[652px] select-none p-0 dark:bg-[#202124]',
    );

    const output = this.buildOutput();
    const tooltip = this.buildTooltip();
    const input = this.buildInput();

    div.children(output, tooltip, input);

    fragment.append(div.el);

    this.targetEl.append(fragment);
  }

  buildOutput() {
    const div = h('div', 'block');

    this.containerHistory = new ContainerHistory();
    this.containerCalc = new ContainerCalc();

    div.children(
      this.containerHistory,
      this.containerCalc,
      h('div', 'absolute z-[1] h-[30%] w-full bg-white dark:bg-[#202124]'),
    );

    return div;
  }

  buildTooltip() {
    return h(
      'div',
      'absolute -z-[1000] m-0 h-px w-px overflow-hidden whitespace-nowrap p-0',
    ).child(
      h('a', 'text-[#1a0dab] outline-0 dark:text-[#8ab4f8]')
        .attr(
          'href',
          'https://support.google.com/websearch/answer/3284611?hl=zh-CN',
        )
        .child(
          '对于任何使用 sin、cos、sqrt 等函数的数学表达式，您都可以获得它们的计算结果。您可以在此处找到完整的函数列表。',
        ),
    );
  }

  buildInput() {
    const div = h('div', 'relative z-[2] mt-2 table w-full').child(
      h('div', 'block'),
    );

    this.radDeg = new RadDeg();
    this.factorial = new Factorial();
    //
    this.inverse = new Inverse();
    this.sine = new Sine();
    this.arcsine = new Arcsine();
    this.ln = new NaturalLogarithm();
    this.ePowX = new EPowX();
    //
    this.pi = new PI();
    this.cosine = new Cosine();
    this.arccosine = new Arccosine();
    this.log = new Logarithm();
    this.tenPowX = new TenPowX();
    //
    this.euler = new Euler();
    this.tangent = new Tangent();
    this.arctangent = new Arctangent();
    this.squareRoot = new SquareRoot();
    this.square = new Square();
    //
    this.answer = new Answer();
    this.random = new Random();
    this.exponential = new Exponential();
    this.xPowY = new XPowY();
    this.xRootY = new XRootY();
    //
    this.parenthesisLeft = new ParenthesisLeft();
    this.parenthesisRight = new ParenthesisRight();
    this.percentage = new Percentage();
    this.ac = new AC();
    this.ce = new CE();
    //
    this.seven = new Seven();
    this.eight = new Eight();
    this.nine = new Nine();
    this.divide = new Divide();
    //
    this.four = new Four();
    this.five = new Five();
    this.six = new Six();
    this.multiply = new Multiply();
    //
    this.one = new One();
    this.two = new Two();
    this.three = new Three();
    this.minus = new Minus();
    //
    this.zero = new Zero();
    this.point = new Point();
    this.equals = new Equals();
    this.plus = new Plus();

    [
      'radDeg',
      'factorial',
      'sine',
      'arcsine',
      'ln',
      'ePowX',
      'pi',
      'cosine',
      'arccosine',
      'log',
      'tenPowX',
      'euler',
      'tangent',
      'arctangent',
      'squareRoot',
      'square',
      'answer',
      'random',
      'exponential',
      'xPowY',
      'xRootY',
      'parenthesisLeft',
      'parenthesisRight',
      'percentage',
      'ac',
      'ce',
      'seven',
      'eight',
      'nine',
      'divide',
      'four',
      'five',
      'six',
      'multiply',
      'one',
      'two',
      'three',
      'minus',
      'zero',
      'point',
      'equals',
      'plus',
    ].forEach((key) => {
      this[key].change = (key) => {
        this.calculator(key);
      };
    });

    this.inverse.change = () => {
      [
        'sine',
        'arcsine',
        'ln',
        'ePowX',
        'cosine',
        'arccosine',
        'log',
        'tenPowX',
        'tangent',
        'arctangent',
        'squareRoot',
        'square',
        'answer',
        'random',
        'xPowY',
        'xRootY',
      ].forEach((key) => {
        this[key].el.toggleClass('hidden');
      });
    };

    const table1 = h(
      'table',
      'float-left w-[42.857142857142854%] table-fixed border-collapse',
    ).child(
      h('tbody').children(
        h('tr').children(
          h('td').attr('colspan', 2).child(this.radDeg.el),
          h('td').child(this.factorial.el),
        ),
        h('tr').children(
          h('td').child(this.inverse.el),
          h('td').children(this.sine.el, this.arcsine.el.hide()),
          h('td').children(this.ln.el, this.ePowX.el.hide()),
        ),
        h('tr').children(
          h('td').child(this.pi.el),
          h('td').children(this.cosine.el, this.arccosine.el.hide()),
          h('td').children(this.log.el, this.tenPowX.el.hide()),
        ),
        h('tr').children(
          h('td').child(this.euler.el),
          h('td').children(this.tangent.el, this.arctangent.el.hide()),
          h('td').children(this.squareRoot.el, this.square.el.hide()),
        ),
        h('tr').children(
          h('td').children(this.answer.el, this.random.el.hide()),
          h('td').child(this.exponential.el),
          h('td').children(this.xPowY.el, this.xRootY.el.hide()),
        ),
      ),
    );

    const table2 = h(
      'table',
      'float-right w-[57.142857142857139%] table-fixed border-collapse',
    ).child(
      h('tbody').children(
        h('tr').children(
          h('td').child(this.parenthesisLeft.el),
          h('td').child(this.parenthesisRight.el),
          h('td').child(this.percentage.el),
          h('td').children(this.ac.el, this.ce.el.hide()),
        ),
        h('tr').children(
          h('td').child(this.seven.el),
          h('td').child(this.eight.el),
          h('td').child(this.nine.el),
          h('td').child(this.divide.el),
        ),
        h('tr').children(
          h('td').child(this.four.el),
          h('td').child(this.five.el),
          h('td').child(this.six.el),
          h('td').child(this.multiply.el),
        ),
        h('tr').children(
          h('td').child(this.one.el),
          h('td').child(this.two.el),
          h('td').child(this.three.el),
          h('td').child(this.minus.el),
        ),
        h('tr').children(
          h('td').child(this.zero.el),
          h('td').child(this.point.el),
          h('td').child(this.equals.el),
          h('td').child(this.plus.el),
        ),
      ),
    );

    div.children(table1, table2);

    return div;
  }

  /**
   *
   * @param {object} button
   * @returns
   */
  calculator(button) {
    const lastOperation = this.data.operation.at(-1);
    const lastFormula = this.data.formula.at(-1);

    if (
      this.data.operation.length === 0 &&
      ['EXP', ')'].includes(button.symbol)
    ) {
      return;
    }
    //
    if (button.name == 'clear') {
      this.data.operation = [];
      this.data.formula = [];
      this.updateOutputResult('0', false);
      return;
    } else if (button.name == 'delete') {
      if (/pow\([\d(.\d+)?|e]+,\d{0,}\/?\d{0,}\)/.test(lastFormula)) {
        let last = this.data.formula.pop();
        // last = pow(2,)
        // last = pow(2,3)
        // last = pow(2,45)
        // last = pow(1.41457891345,45)
        // last = pow(e,)
        // last = pow(e,2)
        // last = pow(e,23)
        // last = pow(10,)
        // last = pow(10,2)
        // last = pow(10,20)
        // last = pow(x, 1/)
        let [pow, exponent] = last.slice(0, -1).split(',');

        if (exponent.length) {
          exponent = exponent.slice(0, -1);
          const temp = pow + ',' + exponent + ')';
          this.data.formula.push(temp);
        } else {
          const [, input] = pow.split('(');
          this.data.formula.push(input);
        }
      }
      if (/<sup>.*<\/sup>/.test(lastOperation)) {
        let last = this.data.operation.pop();

        if (last === '<sup>□</sup>') {
          //
        } else {
          last = last.replace(/<sup>(.*)<\/sup>/, replacer);
          this.data.operation.push(last);
        }
      } else {
        this.data.operation.pop();
        this.data.formula.pop();
      }

      if (this.data.operation.length === 0) {
        this.data.operation = [];
        this.data.formula = [];
        this.updateOutputResult('0', false);
        return;
      }
      this.updateOutputOperation(this.data.operation.join(''));
      return;
    } else if (button.name == 'radDeg') {
      this.isRad = !this.isRad;
      return;
    }

    //
    if (button.name == 'equals') {
      if (this.data.formula.includes('Ans')) {
        this.data.formula = this.data.formula.map((item) => {
          if (item == 'Ans') {
            return this.ans;
          }
          return item;
        });
      }
      let expressions = this.data.formula.join('');

      if (expressions.at(-1) === 'E') {
        expressions += '0';
      }

      let found = expressions.match(
        /\d+(?=\(|sin|cos|tan|arcsin|arccos|arctan)/g,
      );
      // Add previous expression found inside parentheses. This will allow transform '5(2)' to '5*(2)' and '5cos' into '5*cos'
      expressions = expressions.replace(
        /\d+(?=\(|sin|cos|tan|arcsin|arccos|arctan)/g,
        `(${found})*`,
      );
      expressions = expressions.replace(/\)(?=\d+)/g, ')*'); // Every parentheses before a digit will transform for example: ')3' into ')*3).
      expressions = expressions.replace(/\)\(/g, ')*('); // Replace every encounter of ')(' with ')*(';

      expressions = this.countParenthesesAndFix(expressions);

      try {
        const radDeg = this.isRad ? 'rad' : 'deg';
        const result = evaluate(expressions, {
          sin: (x) => sin(unit(x, radDeg)),
          cos: (x) => cos(unit(x, radDeg)),
          tan: (x) => tan(unit(x, radDeg)),
          sqrt,
        });
        this.ans = result;
        this.data.operation = [result];
        this.data.formula = [result];

        this.updateOutputResult(result);
      } catch (error) {
        this.data.operation = [];
        this.data.formula = [];
        this.updateOutputResult('Error');
      }
      this.ac?.el.show();
      this.ce?.el.hide();
      return;
    }

    //
    let { name, formula, symbol } = button;
    if (lastFormula === '0' && !/\d/.test(this.data.formula.at(-2))) {
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(symbol)) {
        this.data.operation.pop();
        this.data.formula.pop();
      }
    } else if (lastFormula === 'E') {
      if (name === 'random') {
        symbol = symbol.replace('.', '');
        formula = formula.replace('.', '');
      }
      // 仅允许数字、负号、随机数
      if (
        !(
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'].includes(
            formula,
          ) || 'random' === name
        )
      ) {
        return;
      }
    } else if (button.name == 'factorial') {
      symbol = '!';
    } else if (['sin', 'cos', 'tan', 'ln', 'log'].includes(button.name)) {
      symbol += '(';
    } else if (button.name === 'asin') {
      symbol = 'arcsin(';
    } else if (button.name === 'acos') {
      symbol = 'arccos(';
    } else if (button.name === 'atan') {
      symbol = 'arctan(';
    } else if (button.name === 'ePowX') {
      symbol = 'e<sup>□</sup>';
      formula = 'pow(e,)';
    } else if (button.name === 'tenPowX') {
      symbol = '10<sup>□</sup>';
      formula = 'pow(10,)';
    } else if (button.name == 'xPowY') {
      symbol = '<sup>□</sup>';
      let last = this.data.formula.pop();
      formula = `pow(${last},)`;
    } else if (button.name == 'square') {
      symbol = '<sup>2</sup>';
      let last = this.data.formula.pop();
      formula = `pow(${last},2)`;
    } else if (button.name == 'squareRoot') {
      symbol = '√(';
      formula = 'sqrt(';
    } else if (button.name == 'xRootY') {
      const index = this.data.formula.findLastIndex((item) =>
        ['+', '-', '*', '/'].includes(item),
      );
      let str = this.data.formula.splice(index + 1).join('');
      this.data.operation.splice(index + 1);
      symbol = `<sup>□</sup>√${str}`;
      formula = `pow(${str},1/)`;
    } else if (button.name === 'EXP') {
      symbol = 'E';
    }

    if (/pow\([\d(.\d+)?|e]+,\d{0,}\/?\d{0,}\)/.test(lastFormula)) {
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(symbol)) {
        let last = this.data.formula.pop();
        // last = pow(2,)
        // last = pow(2,3)
        // last = pow(2,45)
        // last = pow(1.41457891345,45)
        // last = pow(e,)
        // last = pow(e,2)
        // last = pow(e,23)
        // last = pow(10,)
        // last = pow(10,2)
        // last = pow(10,20)
        // last = pow(x, 1/)
        last = last.split(')');
        last.push(symbol, ')');
        formula = last.join('');
      }
    }
    if (/<sup>.*<\/sup>/.test(lastOperation)) {
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(symbol)) {
        let last = this.data.operation.pop();
        last = last.replace(/<sup>(.*)<\/sup>/, `<sup>$1${symbol}</sup>`);
        symbol = last.replace('□', '');
      }
    }

    this.data.operation.push(symbol);
    this.data.formula.push(formula);

    this.updateOutputOperation(this.data.operation.join(''));
    this.ce?.el.show();
    this.ac?.el.hide();
  }

  // show operation on ui in realtime
  updateOutputOperation(operation) {
    this.containerCalc.updateOutputOperation(operation);
  }
  // show result on ui in realtime
  updateOutputResult(result, hasHistory = true) {
    this.containerCalc.updateOutputResult(result, hasHistory);
  }

  countParenthesesAndFix(expression) {
    //console.log('here ' + expression.match(/\(/g).length);
    if (expression.match(/\(/g)) {
      let parenthesescount = 0;
      if (expression.match(/\)/g)) {
        parenthesescount =
          expression.match(/\(/g).length - expression.match(/\)/g).length;
      } else {
        parenthesescount = expression.match(/\(/g).length;
      }

      while (parenthesescount > 0) {
        expression = expression.concat(')');
        //console.log('inside while, ' + expression);
        parenthesescount =
          expression.match(/\(/g).length - expression.match(/\)/g).length;
      }
    }

    //console.log('final ' + expression);
    return expression;
  }
}

export default Calculator;
