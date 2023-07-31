import Mock from 'mock2js';
import { builder } from '../build';

const response = (options) => {
  const { body } = options;
  const { username } = JSON.parse(body);
  return builder({
    message: `你好，${username}`,
    now: Date.now(),
  });
};

// Mock.mock(/\/api\/index\/test/, 'get', response);