const smartGarbage = (trash, bins) => {
  const newBins = bins;
  newBins[trash]++;
  return newBins;
};