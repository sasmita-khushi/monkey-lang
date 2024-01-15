type Fn = () => void;

type KeyValue = {
  [key: string]: Fn[];
};

class MyEvent {
  events: KeyValue = {};

  on(eventName: string, cb: Fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(cb);
  }
  emit(eventName: string) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        this.events[eventName][i]();
      }
    }
  }
}
let myEvn = new MyEvent();
function boom() {
  console.log("boom is called");
}
myEvn.on("click", boom);
myEvn.on("click", () => {
  console.log("anonymous is called");
});
myEvn.emit("foo");
