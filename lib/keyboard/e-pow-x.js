import KeyScientific from './key-scientific.js';

class EPowX extends KeyScientific {
  constructor() {
    super('ePowX', 'pow(e,', 'E 的 X 次幂', 'e<sup>x</sup>');
  }
}

export default EPowX;
