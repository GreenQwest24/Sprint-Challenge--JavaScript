class CuboidMaker1 {
    constructor(cuboidMakerAttributes){
        this.length = cuboidMakerAttributes.length;
        this.width = cuboidMakerAttributes.width;
        this.height = cuboidMakerAttributes.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


const cuboid1 = new CuboidMaker1 ( {
    length: 4,
    width: 5,
    height: 5
});
// Test your volume and surface Area methods by uncommenting the logs below:
 
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

    console.log(cuboid.volume()); // 100;
    console.log(cuboid.surfaceArea()); // 130

class CubeMaker extends CuboidMaker1 {
    constructor(CubeMakerAttributes) {
        super(CubeMakerAttributes);
    }
    cVolume() {
        return Math.pow(this.length, 3);
    }
    cSurfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker({
    length: 2,
});

console.log(cube. cVolume());
console.log(cube.cSurfaceArea());