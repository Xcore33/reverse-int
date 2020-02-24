module.exports = function reverse(n) {
    return String(Math.abs(n)).split('').reverse().join('');
    //Метод Math.abs() — дает абсолютное значение аргумента, простыми словами — мы получаем модуль числа. Аргумент может быть int, float, long, double, short, byte.
}
