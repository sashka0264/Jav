/**
 Необходимо написать функцию создающую пространство имен.
 На вход подается строка вида: "a.b.c.d.e",
 на выходе ожидаем получить вложенные друг в друга объекты.

 namespace('a.b.c.d.e') -> "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

 **/

function namespace(str) {
  const arr = str.split('.');

  const res = arr.reduceRight((LastFuncRes, nowItem) => {
    if (!LastFuncRes) {
      return { [ nowItem ] : {} }
    }
    return { [nowItem] : LastFuncRes }
  }, null);

  return res;
}

/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      'a.b.c.d.e'
    ],
    result: {a: {b: {c: {d: {e: {}}}}}}
  },
  {
    args: [
      'ab.cd.e'
    ],
    result: {ab: {cd: {e: {}}}}
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = namespace;
