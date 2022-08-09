const cssClasses = (str1: string, str2: string) => {
  const wholeStrArr = str1.concat(" ", str2).split(" ");
  const uniqArrValue = (arr: string[]) => {
    const obj: any = {};

    for (let val of wholeStrArr) {
      obj[val] = val;
    }
    return Object.keys(obj).map((each) => {
      return each;
    });
  };

  return uniqArrValue(wholeStrArr).join(" ");
};

let cl = "fixed p-8 p-16 pt-4 text-white w-full z-50";

console.log(cssClasses(cl, "s-8 y-9 p-8 p-9 heool safkas askfss y-9"));

// TO DO
// unique classname, upcoming classes should replace the old classes if same class exist. value should replace the old value
