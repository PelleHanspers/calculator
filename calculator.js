let container = document.createElement("div");
document.body.append(container);
container.innerHTML = "<h3>Calculator</h3>";

let main = document.createElement("div");
document.body.append(main);
main.setAttribute("id", "main");

let input1 = document.createElement("input");
main.appendChild(input1);
input1.setAttribute("id", "input1");
input1.value = 0;

let listDiv = document.createElement("div");
main.appendChild(listDiv);

let operationArray = [" + ", " - ", " * ", " / "];

let operationList = document.createElement("select");
operationList.setAttribute("id", "operationSelect");
listDiv.appendChild(operationList);

for (let i = 0; i < operationArray.length; i++) {
    let option = document.createElement("option");
    option.value = operationArray[i];
    option.innerText = operationArray[i];
    operationList.appendChild(option);
}

let input2 = document.createElement("input");
main.appendChild(input2);
input2.setAttribute("id", "input2");
input2.value = 0;

let output = document.createElement("div");
main.appendChild(output);
output.innerText = "= ";
output.id = "output";

input1.addEventListener("input", function() {
  let x = document.getElementById("input1").value;
  input1.value = x;
  console.log(input1.value);
  operation();
})

input1.addEventListener("focus", function() {
  if (input1.value === "0") {
      input1.value = "";
  }
});

input2.addEventListener("input", function() {
  let x = document.getElementById("input2").value;
  input2.value = x;
  console.log(input2.value);
  operation();
})

input2.addEventListener("focus", function() {
  if (input2.value === "0") {
      input2.value = "";
  }
});

operationList.addEventListener("click", function(){
  operation();
})

function add(a, b) {
    let sum = (parseFloat(input1.value) + parseFloat(input2.value));
    output.innerText = "= " + parseFloat((sum).toFixed(10).slice(0, 13));
    console.log(sum);
}

function subtract(a, b) {
  let sum = (parseFloat(input1.value) - parseFloat(input2.value));
  output.innerText = "= " + parseFloat((sum).toFixed(10).slice(0, 13));
  console.log(sum);
}

function mulitply(a, b) {
  let sum = (parseFloat(input1.value) * parseFloat(input2.value));
  output.innerText = "= " + parseFloat((sum).toFixed(10).slice(0, 13));
  console.log(sum);
}

function divide(a, b) {
  let sum = (parseFloat(input1.value) / parseFloat(input2.value));
  output.innerText = "= " + parseFloat((sum).toFixed(10).slice(0, 13));
  console.log(sum);
}

function operation() {

  let op = document.getElementById("operationSelect").value;

  if (op === " + ") {
  add();
  } else if (op === " - ") {
  subtract();
} else if (op === " * ") {
  mulitply();
} else if (op === " / ")
  divide();
}

