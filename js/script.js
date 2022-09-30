console.log("welcome to tic-tae-toe");
let bgmusic = new Audio("static/mp3/bgmusic.mp3");
let audioturn = new Audio("static/mp3/ting (mp3cut.net).mp3");
let gameover = new Audio("static/mp3/won.wav");
let turn = "X";
let isgameover = false;
let resetgame = true
// fuction to cahnge turn
const changeturn = () => {
  return turn === "X" ? "O" : "X";
};
// bgmusic.play()
//Fuction to check win
const checkwin = () => {
  let boxtxts = document.getElementsByClassName("boxtxt");
  let wins = [
    [0, 1, 2, 3, 5, 0],
    [3, 4, 5, 3, 15, 0],
    [6, 7, 8, 3, 25, 0],
    [0, 3, 6, -6.3, 15, 90],
    [1, 4, 7, 3.7, 15, 90],
    [2, 5, 8, 13.7, 15, 90],
    [0, 4, 8, 4, 15, 45],
    [2, 4, 6, 4, 14, 135],
  ];
  wins.forEach((e) => {
    
     
    if (
      boxtxts[e[0]].innerText === boxtxts[e[1]].innerText &&
      boxtxts[e[2]].innerText === boxtxts[e[1]].innerText &&
      boxtxts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtxts[e[0]].innerText + " Won ";

      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = " 150px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = `23vw`;
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
if(resetgame==true){
  reset = document.getElementsByClassName("reset")[0];
  reset.addEventListener("click", () => {
    let boxtxt = document.querySelectorAll(".boxtxt");
    Array.from(boxtxt).forEach((element) => {
      element.innerText = "";
    });
  });
  
  function he() {
    window.location.reload();
  }
}

