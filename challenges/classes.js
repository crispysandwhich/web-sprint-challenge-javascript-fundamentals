// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(lenth,width,height) {
        this.lenth = lenth;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.lenth * this.width * this.height
    }
    surfaceArea(){
        return 2*(this.lenth * this.width + this.lenth * this.height + this.width * this.height)
    }
  }


  const cuboid = new CuboidMaker(4,5,5)  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.