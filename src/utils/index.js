/**
 * 生成组件
 * @param {*} components
 */
export const generatorComponents = components => {
  const result = {};
  components.forEach(item => {
    result[item.name] = item;
  });
  return result;
};