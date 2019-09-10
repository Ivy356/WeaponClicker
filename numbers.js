function numbers (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1e9

    ? Math.abs(Number(labelValue)) / 1e9 + "billion"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1e12

    ? Math.abs(Number(labelValue)) / 1e12 + "trillion"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1e15

    ? Math.abs(Number(labelValue)) / 1e15 + "quadrillion"
      
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1e18

    ? Math.abs(Number(labelValue)) / 1e18 + "quintillion"

    : Math.abs(Number(labelValue));

}
