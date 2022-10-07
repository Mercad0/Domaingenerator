/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // let domainName = [""];
  let pronoun = ["arcade", "dedicated", "cool"];
  let adj = ["fruity", "fanbase", "cheap"];
  let noun = ["shoes", "backpack", "frenchtoast", "socks"];
  let domain = [".com", ".net", ".io", ".org", ".biz"];

  function domainReturn() {
    document.getElementById("domainReturn").innerHTML =
      pronoun[Math.floor(Math.random() * pronoun.length)] +
      adj[Math.floor(Math.random() * adj.length)] +
      noun[Math.floor(Math.random() * noun.length)] +
      domain[Math.floor(Math.random() * domain.length)];
  }
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {}
      }
    }
  }

  document.getElementById("btn1").addEventListener("click", domainReturn);
};
