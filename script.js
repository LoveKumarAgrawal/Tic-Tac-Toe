// let t = document.body.firstElementChild.firstElementChild;
// let row = document.body.firstElementChild.firstElementChild.rows;
let firstCell = document.body.firstElementChild.firstElementChild.rows[0].cells;
let secondCell = document.body.firstElementChild.firstElementChild.rows[1].cells;
let thirdCell = document.body.firstElementChild.firstElementChild.rows[2].cells;
let nextTurn = "X";
document.querySelectorAll('#myTable td').forEach(e => e.addEventListener("click", function() {
       if(this.textContent === ""){
        this.innerHTML = nextTurn;
        changeTurn();
      }
      checkwin();
}));
function changeTurn() {
    if(nextTurn == 'X'){
        nextTurn = 'O';
    }
    else{
        nextTurn = 'X';
    }
}
function checkwin(){
  let line = document.getElementById("line");
  let result = document.getElementById("result");
  if((firstCell[0].innerText === firstCell[1].innerText)&&(firstCell[1].innerText === firstCell[2].innerText)&&(firstCell[0].innerText !== "")){
      line.style.display = "block";
      line.style.width = "450px";
      line.style.top = "152px";
      result.innerHTML = firstCell[0].innerText + " Won";
  }
  else if((secondCell[0].innerText === secondCell[1].innerText)&&(secondCell[1].innerText === secondCell[2].innerText)&&(secondCell[0].innerText !== ""))
  {
      line.style.display = "block";
      line.style.width = "450px";
      line.style.top = "312px";
      result.innerHTML = secondCell[0].innerText + " Won";
  }
  else if((thirdCell[0].innerText === thirdCell[1].innerText)&&(thirdCell[1].innerText === thirdCell[2].innerText)&&(thirdCell[0].innerText !== ""))
  {
      line.style.display = "block";
      line.style.width = "450px";
      line.style.top = "471px";
      result.innerHTML = thirdCell[0].innerText + " Won";
  }
  else if((firstCell[0].innerText === secondCell[0].innerText)&&(secondCell[0].innerText === thirdCell[0].innerText)&&(firstCell[0].innerText !== ""))
  {
    line.style.display = "block";
    line.style.width = "450px";
    line.style.top = "309px";
    line.style.transform = "rotate(90deg)";
    line.style.left = "384px";
    result.innerHTML = thirdCell[0].innerText + " Won";
  }
  else if((firstCell[1].innerText === secondCell[1].innerText)&&(secondCell[1].innerText === thirdCell[1].innerText)&&(firstCell[1].innerText !== ""))
  {
      line.style.display = "block";
      line.style.width = "450px";
      line.style.top = "309px";
      line.style.transform = "rotate(90deg)";
    result.innerHTML = thirdCell[1].innerText + " Won";
  }
  else if((firstCell[2].innerText === secondCell[2].innerText)&&(secondCell[2].innerText === thirdCell[2].innerText)&&(firstCell[2].innerText !== ""))
  {
    line.style.display = "block";
      line.style.width = "450px";
      line.style.top = "309px";
      line.style.transform = "rotate(90deg)";
      line.style.left = "703px";
    result.innerHTML = thirdCell[2].innerText + " Won";
  }
  else if((firstCell[0].innerText === secondCell[1].innerText)&&(secondCell[1].innerText === thirdCell[2].innerText)&&(firstCell[0].innerText !== ""))
  {
    line.style.display = "block";
    line.style.transform = "rotate(45deg)";
    line.style.width = "600px";
    line.style.top = "309px";
    result.innerHTML = thirdCell[2].innerText + " Won";

  }
  else if((firstCell[2].innerText === secondCell[1].innerText)&&(secondCell[1].innerText === thirdCell[0].innerText)&&(firstCell[2].innerText !== ""))
  {
    line.style.display = "block";
    line.style.transform = "rotate(135deg)";
    line.style.width = "600px";
    line.style.top = "308px";
    result.innerHTML = firstCell[2].innerText + " Won";
  }
}