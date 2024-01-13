// import fs from "node:fs";
// import process from "node:process";
// //absolute path:
// // let text = fs.readFileSync(
// //   "/Users/Khusi/Documents/khusi_projects/monkey-lang/node_modules/bun-types/README.md"
// // );
// // console.log(text.toString());
// // console.log("hii");

// //relative path:
// //let text=fs.raedFilesync("./package.json")

// // let text = fs.readFileSync("./package.json");
// // console.log(text.toString());

// //CALL BACK:
// fs.readFile("./vdo.mp4", (error, chunk) => {
//   if (error) {
//     console.log("some error is occured  in reading file", error.message);
//     console.log("bun is going to exit");
//     process.exit();
//   }
//   console.log("reading : ", chunk.length);
// });



//PROMISE TYPE:
import fs from "node:fs/promises";
fs.readFile("./vdo.mp4").then((data) => {
  console.log(data.length);
});

//ASYNC-AWAIT TYPE:
setInterval(() => {
  console.log("hello", Date.now());
}, 1000);
let data = await fs.readFile("./vdo.mp4");
console.log("data.........", data.length);
