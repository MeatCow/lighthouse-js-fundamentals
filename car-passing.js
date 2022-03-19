const carPassing = (cars, speed) => {
  const newCars = cars;
  newCars.push({
    time: Date.now(),
    speed: speed
  });
  return newCars;
};