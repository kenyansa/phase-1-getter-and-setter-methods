// Add your Circle class here
// Circle:"before each" hook for "correctly returns the radius property of a Circle instance using `circle.radius`":
const pi = Math.PI;
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //   get the diameter of a circle using the pseudo-property `circle.diameter`
  get diameter() {
    return this.radius * 2;
  }
//   set the diameter of a circle using the pseudo-property `circle.area`
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
//   get the circumference of a circle using the pseudo-property `circle.area`
  get circumference() {
    return this.radius * 2 * pi;
  }
//    set the circumference of a circle using the pseudo-property `circle.area`
  set circumference(circumference) {
    this.radius = circumference / (pi * 2);
  }
  //  get the area of a circle using the pseudo-property `circle.area`
  get area() {
    return pi * (this.radius * this.radius);
  }
  //   set the area of a circle using the pseudo-property `circle.area`
  set area(area) {
    this.radius = Math.sqrt(area / pi);
  }
}