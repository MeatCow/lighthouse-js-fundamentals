const judgeVegetable = (vegetables, metric) => {
  let winner = vegetables[0];
  vegetables.forEach((veg) => {
    if (veg[metric] > winner[metric]) {
      winner = veg;
    }
  });
  return winner["submitter"];
};