import KeyScientific from './key-scientific.js';

class TenPowX extends KeyScientific {
  constructor() {
    super('tenPowX', 'pow(', '10 的 X 次幂', '10<sup>x</sup>');
  }
}

export default TenPowX;
