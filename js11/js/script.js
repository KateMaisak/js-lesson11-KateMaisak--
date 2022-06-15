//1
function printNumbersTimeout(from, to) {
    let someNumber = from;
  
    setTimeout(function go() {
      console.log(someNumber);
      if (someNumber < to) {
        setTimeout(go, 1000);
      }
      someNumber++;
    }, 1000);
 }
  
  printNumbersTimeout(11, 13);



function printNumbersInterval(from, to) {
    let num = from;
  
    let newNum = setInterval(function() {
      console.log(num);
      if (num == to) {
        clearInterval(newNum);
      }
      num++;
    }, 1000);
  }

  printNumbersInterval(3, 5);


//2

let stopInterval = setInterval(() => console.log("Обновленное сообщение"), 3000);
    setTimeout(() => {
        clearInterval(stopInterval)
        console.log("Обновление завершено");
    }, 10000);

//3

console.log(1, 6, 4, 5, 3);

//4

let jordan = {
    name: "Michael",
    age: 59,
    showInfo: function(nameofPlayers) {
    console.log(`Name: ${this.name}`);
}
}

jordan.showInfo();


let messi = {
name: "Lionel",
age: 34,
}
    jordan.showInfo.call(messi, 300);
