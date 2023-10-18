function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  sum = (sum / arr.length).toFixed(2);
  let avg = Number(sum);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return {sum: sum};
}


function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    difference = max - min;
  }
  return {difference: difference};
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length > 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] %2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    }
    else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  diffEvenOdd = sumEvenElement - sumOddElement;
  return {diffEvenOdd: diffEvenOdd};
}
else 
return {diffEvenOdd: 0};
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] %2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  }

  let average = sumEvenElement / countEvenElement;
  return {average: average};
}
else 
return {average: 0};
}



function makeWork (arrOfArr, func) {

}
