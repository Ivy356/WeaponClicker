function numbers (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? Math.abs(Number(labelValue)) / 1.0e+9 + "billion"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+12

    ? Math.abs(Number(labelValue)) / 1.0e+12 + "trillion"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+15

    ? Math.abs(Number(labelValue)) / 1.0e+15 + "quadrillion"
      
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+18

    ? Math.abs(Number(labelValue)) / 1.0e+18 + "quintillion"

    : Math.abs(Number(labelValue));

}
