// PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

// YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;


// Alternative approaches:
// #1:
const fullAddress = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`;
// #2:
const fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
// #3:
const fullAddress = restaurant["address"] + ", " + restaurant["city"] + ", " + restaurant["state"] + " " + restaurant["zipcode"];