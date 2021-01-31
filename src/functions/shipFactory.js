const ship = (length) => {
  return {
    length: length,
    hitPoints: new Array(length).fill(false),
    hitPos(pos) {
      return (this.hitPoints[pos] = true);
    },
    isSunk() {
      if (this.hitPoints.every((value) => value === true)) {
        return true;
      } else return false;
    },
  };
};

export default ship;
