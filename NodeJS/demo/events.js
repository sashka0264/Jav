// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("anything", data => {
//   console.log("ON: anything", data)
// });

// emitter.emit("anything", {a: 1});
// emitter.emit("anything", {b: 2});

// // setTimeout(() => {
//   emitter.emit("anything", {i: 3});
// // }, 3000);

// class Dispatcher extends EventEmitter {
//   subscribe(eventName, cb) {
//     console.log("Subscribe...");
//     this.on(eventName, cb);
//   }

//   dispatch(eventName, data) {
//     console.log("Dispatching...");
//     this.emit(eventName, data);
//   }
// }

// const dis = new Dispatcher();

// dis.subscribe("sub", data => {
//   console.log("ON:sub", data);
// });

// // dis.dispatch("aa", {a: 22});
// dis.dispatch("dis", {dis: 33});