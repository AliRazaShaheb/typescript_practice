import "./styles.css";

const str2arr = (str: string) => {
  const obj: any = {};
  for (let val of str.split(" ")) {
    obj[val] = val;
  }
  const newArr = Object.keys(obj).map((each) => {
    return each;
  });

  return newArr;
};

const arr2str = (arr: string[]) => {
  const obj: any = {};
  for (let val of arr) {
    obj[val] = val;
  }
  const newArr = Object.keys(obj).map((each) => {
    return each;
  });
  return newArr.join(" ");
};

const cssClasses = (str1: string, str2: string) => {
  const wholeStrArr = str1.concat(str2).split(" ");
  const uniqArrValue = (arr) => {
    const obj: any = {};
    for (let val of wholeStrArr) {
      const valArr = val.split("-");
      console.log(valArr);
      obj[val] = val;
    }
    return Object.keys(obj).map((each) => {
      return each;
    });
  };
  console.log(uniqArrValue(wholeStrArr));
  return;
};

let cl = "fixed p-8 p-16 pt-4 text-white w-full z-50";

console.log(cssClasses(cl, "s-8 y-9 heool safkas askfss y-9"));

// const data = str2arr("fixed p-8 p-8 pt-4 text-white w-full z-50");

// console.log(str2arr("fixed p-8 pt-4 text-white w-full z-50"));
// console.log(arr2str([...data, "s-8 y-9 heool safkas askfss p-8"]));
