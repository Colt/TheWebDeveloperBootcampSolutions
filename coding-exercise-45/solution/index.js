const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  }
}

// More verbose syntax approach:
const square = {
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * 4;
  }
}