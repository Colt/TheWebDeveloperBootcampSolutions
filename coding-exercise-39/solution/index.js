function isShortsWeather(temperature) {
  return temperature >= 75;
}

// Other approaches:

// Using an explicit if/else
function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

// Using the JavaScript ternary operator syntax
function isShortsWeather(temperature) {
  return temperature >= 75 ? true : false;
}