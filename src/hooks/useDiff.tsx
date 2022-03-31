// 経過時間を返す
export const useDiff = (published) => {
  const now = new Date();
  const data = new Date(published);
  const diff = now.getTime() - data.getTime();
  const passed = Math.floor(diff / (1000 * 60 * 60));
  return passed;
};
