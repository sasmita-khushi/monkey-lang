import Event from "node:events";

// let evn = new Event();

// function boom() {
//   console.log("boom called");
// }
// //on to attach am event.
// evn.on("click", boom);
// evn.on("click", () => {
//   console.log("anonymous function is called");
// });
// evn.on("foo", () => {
//   console.log("xxx is called");
// });
// //to dispatch an event (to fire an event)
// evn.emit("click");
// evn.emit("click");
// evn.emit("foo");

class Dog extends Event {
  bark() {
    console.log("bhow bhow ...who is there");
  }
}
let mydog = new Dog();
mydog.on("knockdown", mydog.bark);
mydog.emit("knockdown");
