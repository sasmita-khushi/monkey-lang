type callback = (x: string) => void;
// to provide emp ID
function A(cb: callback, name: string) {
  console.log("trying to findout employee id:", name);
  setTimeout(() => {
    cb("224");
  }, 2000);
}
// return pan number form id
function B(cb: callback, id: string) {
  console.log("looking...for pan number of id: ", id);
  setTimeout(() => {
    cb("ADX23457");
  }, 3000);
}
// return income Tax amount from panNumber
function C(cb: callback, pan: string) {
  console.log("looking... for Taxamount of pan: ", pan);
  setTimeout(() => {
    cb("200000");
  }, 2500);
}

//nested callback:
A((id: string) => {
  console.log("id is", id);
  B((panNumber: string) => {
    console.log("Pan number is ", panNumber);
    C((taxAmount: string) => {
      console.log("Income tax amount is", taxAmount);
    }, panNumber);
  }, id);
}, "khushi");
