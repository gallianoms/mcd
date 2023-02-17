var mcd = function (num1, num2) {
    if (num2 === 0)
        return num1;
    return mcd(num2, num1 % num2);
};
console.log(mcd(9, 6));
