console.log("welcome to tic-tae-toe");
let bgmusic = new Audio("static/mp3/bgmusic.mp3");
let audioturn = new Audio("static/mp3/ting (mp3cut.net).mp3");
let gameover = new Audio("static/mp3/won.wav");
let turn = "X";
let isgameover = false;

// fuction to cahnge turn
const changeturn = () => {
  return turn === "X" ? "O" : "X";
};
// bgmusic.play()
//Fuction to check win
const checkwin = () => {
  let boxtxts = document.getElementsByClassName("boxtxt");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtxts[e[0]].innerText === boxtxts[e[1]].innerText &&
      boxtxts[e[2]].innerText === boxtxts[e[1]].innerText &&
      boxtxts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtxts[e[0]].innerText + " Won ";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = " 150px";
        
    }
  });
};
//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtxt = element.querySelector(".boxtxt");
  element.addEventListener("click", () => {
    if (boxtxt.innerText === "") {
      boxtxt.innerText = turn;
      turn = changeturn();
      audioturn.play();
      checkwin();
      if (!isgameover) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//reset button


  // window.location.reload();
reset = document.getElementsByClassName('reset')[0]
reset.addEventListener("click", () => {
  
  let boxtxt = document.querySelectorAll(".boxtxt");
  Array.from(boxtxt).forEach((element) => {
    element.innerText = "";
   
  

  });
});


function he(){
  window.location.reload()
}