import KeyFourfunction from './key-fourfunction.js';

class ClearEntry extends KeyFourfunction {
  constructor() {
    super('delete', false, '清除输入的内容', 'CE');
  }
}

export default ClearEntry;
