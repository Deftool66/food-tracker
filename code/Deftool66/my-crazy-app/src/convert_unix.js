function convertUnix(unix) {
  const ts = new Date(unix);
  return (
    ts.getFullYear() +
    "-" +
    (ts.getMonth() + 1) +
    "-" +
    ts.getDate() +
    " " +
    ts.getHours() +
    ":" +
    ts.getMinutes() +
    ":" +
    ts.getSeconds()
  );
}

export default convertUnix;
