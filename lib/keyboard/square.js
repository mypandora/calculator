import KeyScientific from './key-scientific.js';

class Square extends KeyScientific {
  constructor() {
    super('square', 'pow(', '二次方', 'x<sup>2</sup>');
  }
}

export default Square;
