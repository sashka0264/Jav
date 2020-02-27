/**
 Написать функцию, которая "сдвигает" массив на указанный отступ
 Если отступ отрицательный - двигаем в обратную сторону
 Если отступ больше длины массива - продолжаем сдвигать с начала массива

 transform([1, 2, 3, 4, 5], 0) => [1, 2, 3, 4, 5]
 transform([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 transform([1, 2, 3, 4, 5], 3) => [4, 5, 1, 2, 3]
 transform([1, 2, 3, 4, 5], 6) => [2, 3, 4, 5, 1]
 transform([1, 2, 3, 4, 5], -1) => [5, 1, 2, 3, 4]
 transform([1, 2, 3, 4, 5], 4) => [5, 1, 2, 3, 4]
**/

function transform(list, offset) {
  if (offset === 0) return list;
  if (offset > 0) {
      let control = offset;
      if (offset > list.length) control = offset - list.length;

      const left = list.slice(0, control),
          right = list.slice(control, list.length);
      return [...right, ...left];
  }
  if (offset < 0) {
      let control = offset;
      if (offset < -list.length) control = offset + list.length;
      const right = list.slice(list.length + control, list.length),
          left = list.slice(0, list.length + control);
      return [...right, ...left];
  }
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [1, 2, 3, 4, 5],
      0
    ],
    result: [1, 2, 3, 4, 5]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      2
    ],
    result: [3, 4, 5, 1, 2]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      3
    ],
    result: [4, 5, 1, 2, 3]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      6
    ],
    result: [2, 3, 4, 5, 1]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      -1
    ],
    result: [5, 1, 2, 3, 4]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      4
    ],
    result: [5, 1, 2, 3, 4]
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = transform;
