const shipFactory = (length) => {
  
  return {
    hitPoints: new Array(length).fill("o"),
    hit() {
      let index = this.hitPoints.indexOf("o");
     return this.hitPoints[index] = "x";
    },
    isSunk() {
      if (this.hitPoints.every((val) => val === "x")) {
        return true;
      } else return false;
    },
  };
};


export default shipFactory;