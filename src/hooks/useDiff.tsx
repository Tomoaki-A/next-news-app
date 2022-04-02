// 経過時間を返す
export const useDiff = (published) => {
  const now = new Date();
  const data = new Date(published);
  const diff = now.getTime() - data.getTime();
  const passed = Math.floor(diff / (1000 * 60 * 60));

  if (passed < 24) {
    return passed + "時間前";
  } else {
    const day = Math.floor(passed / 24);
    return day + "日前";
  }
};
