import Mockjs from 'mock2js';
import { isDev } from '../configs';

if (isDev) {
//   import('./api/index/test');

  Mockjs.setup({
    timeout: 800,
  });

  console.log('mock initial complete!');
}