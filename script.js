const antwoorden = {
    Frankrijk : "Parijs",
    spin : "8",
    meer : "IJsselmeer",
    automerk : ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
   waddeneiland :["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]
};

function check(){
let allsgoed = true;

Object.keys(antwoorden).forEach(function (item) {
let element = document.getElementById(item)
if ( antwoorden[item].includes(element.value)) {
 let input = document.getElementsByTagName("input")
for (i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = "green";
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
  document.getElementById("juist").innerText = "🎊🎉Alle antwoorden zijn correct🎊🎉✌️"
  }

}
