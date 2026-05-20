import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("John", 25);
person.sayHello();
