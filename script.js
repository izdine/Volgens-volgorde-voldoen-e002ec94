const antwoorden = {
 Frankrijk : ['Parijs', 'parijs'],
 spin : ['8', 'acht'],
 meer : ['IJsselmeer', 'ijsselmeer'],
 automerk : ['Volkswagen', 'Audi', 'Opel', 'Porsche', 'BMW', 'Mercedes', 'Mercedes-Benz'],
 waddeneiland :['Texel', 'Vlieland', 'Terschelling', 'Ameland', 'Schiermonnikoog']
};

function check(){
let allsgoed = true;
let pointsg = 0;
let pointsf = 0;

Object.keys(antwoorden).forEach(function(item) {
let element = document.getElementById(item)
if ( antwoorden[item].includes(element.value)) {
let input = document.getElementsByTagName('input')
for (i = 0; i < input.length; i++) {
    pointsg++;
    input[i].style.backgroundColor = 'green';

  }
}else {
  let input = document.getElementsByTagName('input')
  for (i = 0; i < input.length; i++) {
     input[i].style.backgroundColor = 'red';
         pointsf++;
  }
  allsgoed = false
document.getElementById('juist').innerText ='😥je hebt een paar fouten😥'
document.getElementById('cijfer').innerHTML =  pointsf +  'min punten' ;
 }
});

if (allsgoed) {
  document.getElementById('juist').innerText = '🎊🎉Alle antwoorden zijn correct🎊🎉'
  document.getElementById('cijfer').innerHTML =  pointsg + ' puls punten ' ;
  }
}
