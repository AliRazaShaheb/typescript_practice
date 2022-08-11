const cssClasses = (str1: string, str2: string) => {
  // const str2Obj = (str: string) => {
  //   const strArr = str.split(" ");
  //   const obj: any = {};
  //   let val: string;
  //   for (val of strArr) {
  //     obj[val] = val;
  //   }
  //   return obj;
  // };
  // let obj1 = str2Obj(str1);
  // let obj2 = str2Obj(str2);
  // let obj1n2 = Object.keys({ ...obj1, ...obj2 }).map((each) => each.split("-"));
  // console.log(obj1n2);
  const wholeStrArr = str1.concat(" ", str2).split(" ");
  const uniqArrValue = (arr: string[]) => {
    const obj: any = {};
    const obj1: any = {};
    for (let val of wholeStrArr) {
      let [cl, value] = val.split("-");
      if (!value) {
        obj1[value] = value;
      } else {
        obj1[cl] = value;
      }
      obj[val] = val;
    }
    console.log(obj1);
    return Object.keys(obj).map((each) => {
      return each;
    });
  };

  return uniqArrValue(wholeStrArr).join(" ");
};

let cl = "fixed p-8 pt-4 text-white w-full z-50";

// console.log(cssClasses(cl, "s-8 p-8 y-9 p-9 heool safkas askfss y-9"));

// TO DO
// unique classname, upcoming classes should replace the old classes if same class exist. value should replace the old value

const input = [
  { index: 0, value: 3 },
  { index: 0, value: 3 },
  { index: 0, value: 3 },
  { index: 1, value: 3 },
  { index: 1, value: 3 },
  { index: 2, value: 3 },
  { index: 2, value: 3 },
  { index: 0, value: 3 }
];

let obj = input.reduce((res, curr) => {
  // console.log(res)
  if (res[curr.index]) res[curr.index].push(curr);
  else Object.assign(res, { [curr.index]: [curr] });

  return res;
}, {});

// console.log(obj);
