//PROMISE TYPE:

// fetch("https://google.com/").then((res) => {
//   res.text().then((text) => {
//     console.log(text);
//   });
// });

//ASYNC-AWAIT TYPE:
let res = await fetch("https://google.com");
let text = await res.text();
console.log(text);
