console.log("Stop reading the console.")

const intHeader = document.querySelector("#changeNow")

intHeader.addEventListener("mouseover", (e) => {
  console.log("Change Color.");



});



  let rndmColor = '#'+Math.floor(Math.random()*16777215).toString(16);
