/**
 * 分割代入
 */

// const booBody = {
//   name: "boo",
//   age: 14
// };

// const { name, age } = booBody;
// const look2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(look2);

/**
 * デフォルト値
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スブレット構文
 */

//配列の展開

// const hairetu = ["boo1", "boo2"];
// // console.log(hairetu);
// // console.log(...hairetu);

// const className = (people1, people2) =>
//   console.log(`クラス名簿${people1}クラス名簿${people2}` + people2);
// className(...hairetu);

//まとめる

// const className = ["boo", "boo1", "boo2", "boo3", "boo4"];
// const [na1,na2,...className3] = className;
// console.log(na1);
// console.log(className3);

//コピーと結合
const ichikumi = ["tarou", "jirou", "saburou", "boo"];
const nikumi = ["hanako", "makko", "booko", "kayoko"];
// const classAll = [...ichikumi, ...nikumi];
// classAll[2]="bb";
// console.log(classAll);

// const classAll=ichikumi+nikumi
// classAll[2]="bb";
// console.log(classAll);

/**
 * mapやフィルターを使った配列処理
 */

// for (let index = 0; index < ichikumi.length; index++) {
//   console.log(ichikumi[index]);
// }

// const ichikumi2 = ichikumi.map((name) => {
//   return name;
// });
// console.log(ichikumi2); //1番
// ichikumi.map((name) => console.log(name)); //2番

const bookumi = ["bootarou", "boojirou", "boosaburou", "boo"];
// const numBoo = [1, 2, 3, 4];
// const newNumBoo = numBoo.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumBoo);

// bookumi.map((name) => console.log(`こんにちは${name}さん`));
const booKumiSan = bookumi.map((name) => {
  if (name === "boo") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(booKumiSan);
