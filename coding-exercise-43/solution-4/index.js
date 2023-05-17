// A long approach:
function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else if (num === 1) {
    return ('Monday');
  } else if (num === 2) {
    return ('Tuesday');
  } else if (num === 3) {
    return ('Wednesday');
  } else if (num === 4) {
    return ('Thursday');
  } else if (num === 5) {
    return ('Friday');
  } else if (num === 6) {
    return ('Saturday');
  } else if (num === 7) {
    return ('Sunday');
  }
}