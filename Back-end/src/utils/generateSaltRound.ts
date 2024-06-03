export const generateSaltRounds = (maxValue: number) => {
  return Math.floor(Math.random() * maxValue) + 1;
};
