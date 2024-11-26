const clear = document.querySelector("#clear");
const myUL = document.querySelector("#myUL");
let mylist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < mylist.length; i++) {
  let button = document.createElement("button");
  let del = document.createTextNode("*");
  button.className = "close";
  button.appendChild(del);
  mylist[i].appendChild(button);
}
const close = document.getElementsByClassName("close");
clear.addEventListener("click", function () {
  myUL.innerHTML = "";
});

function newElement() {
  let li = document.createElement("li");
  let btn = document.createElement("input");
  btn.type = "checkbox";
  btn.textContent = "done";
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.appendChild(btn);
  if (inputValue === "") {
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let button = document.createElement("button");
  let del = document.createTextNode("*");
  button.className = "close";
  button.appendChild(del);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
