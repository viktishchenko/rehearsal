/* Рекурсивная - функция вызывающая сама себя 

   Пример рекурсии № 1 
    Факториал! - число получаемое в результате перемножения всех целых чисел меньше него 1*2*3*4*5=120 т.е. (5!)=120)

   */

const factorial = (n) => {
  if (n === 1) {
    // условие выхода из рекурсии (базовый случай)
    return 1;
  }
  return n * factorial(n - 1);
};

factorial(5);
console.log("factorial(5)>>", factorial(5)); // 120

/* 

   Пример рекурсии № 2 
    Числа Фибоначчи - каждое последующее как сумма двух предыдущих:
    1,1,2,3,5,8,13,21....
    
*/

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};

fibonachi(8); // 21
console.log("fibonachi(8)>>", fibonachi(8));
