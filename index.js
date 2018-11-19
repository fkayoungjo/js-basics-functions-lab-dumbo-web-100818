// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  if (someValue < 42){
  return 42 - someValue;
} else {
  return someValue - 42
}
}

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }

function distanceTravelledInFeet (start, end) {
  if (start < end){
    return (end - start) * 264
  }
  else{
  return(start - end) * 264
  }
}

function calculatesFarePrice (start, end) {
  let distance = distanceTravelledInFeet(start, end)
  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance < 2000){
    return (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
