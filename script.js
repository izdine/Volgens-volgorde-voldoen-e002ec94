const antwoorden = {
    Frankrijk : "Parijs",
    spin : "8",
    meer : "IJsselmeer",
    automerk : ["Opel"],
   waddeneiland :[ "Ameland"]
};

function check(){
let allsgoed = true;
let points = -20;

Object.keys(antwoorden).forEach(function(item) {
let element = document.getElementById(item)
if ( antwoorden[item].includes(element.value)) {
 let input = document.getElementsByTagName("input")
for (i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = "green";
     points++;
  }
}else {
  let input = document.getElementsByTagName("input")
  for (i = 0; i < input.length; i++) {
     input[i].style.backgroundColor = "red";

   }
  allsgoed = false
document.getElementById("juist").innerText ='😥je hebt een paar fouten😥'
}
});
if (allsgoed) {
  document.getElementById("juist").innerText = "🎊🎉Alle antwoorden zijn correct🎊🎉"
  document.getElementById("cijfer").innerHTML =  points;
  }
}
function resultaat() {
  document.getElementById("resultaat").innerText = "Je hebt er " + points() + " goed";
}
