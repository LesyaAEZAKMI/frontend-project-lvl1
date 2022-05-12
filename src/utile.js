export default (minNumber, maxNumber) => {
  const mathMax = Math.floor(maxNumber);
  const mathMin = Math.ceil(minNumber);
  return Math.floor(Math.random() * (mathMax - mathMin + 1)) + mathMin;
};
