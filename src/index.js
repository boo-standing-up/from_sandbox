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
// const ichikumi = ["tarou", "jirou", "saburou", "boo"];
// const nikumi = ["hanako", "makko", "booko", "kayoko"];
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
// const booKumiSan = bookumi.map((name) => {
//   if (name === "boo") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(booKumiSan);

/**
 * 三項演算子
 */

// if elseを一行で書くのが三項演算子
// //　ある条件　？　turuの時:　folaseの時

// const chang = 1 < 0 ? `OK` : `NO`;

// console.log(chang);

const num = 18000;

// 数値と文字列入力がわかるようにコードを書く
// typeof その数値のタイプを表示

const formatNum =
  typeof num === "number" ? num.toLocaleString() : "数値入力してね";
console.log(formatNum);

const checkSam = (num1, num2) => {
  return num1 * num2 < 100 ? "100以下じゃ" : "100こしてら";
};
console.log(checkSam(50, 30));
