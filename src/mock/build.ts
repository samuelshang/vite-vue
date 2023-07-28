export const builder = <T>(data: T, message = '成功', success = true) => {
  return {
    success,
    message,
    data,
  };
};

export default {
  builder,
};