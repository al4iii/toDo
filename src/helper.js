export const getTime = () => {
  const now = new Date();
  const year = String(now.getFullYear());
  const mouth = String(now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1);
  const date = String(now.getDate() < 10 ? `0${now.getDate()}` : now.getDate());
  const clock = String(now.getHours() < 10 ? `0${now.getHours()}` : now.getHours());
  const minutes = String(now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes());  
  const sec = String(now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds());  
  return `${clock}:${minutes}:${sec} ${date}/${mouth}/${year} `
}
