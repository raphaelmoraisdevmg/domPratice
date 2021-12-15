//primeira div fundo vermelho filha do body
let corpo=document.body;
let boxOne=document.createElement('div');
boxOne.id="pai"
boxOne.style.width="400px";
boxOne.style.height="400px";
boxOne.style.backgroundColor="red";
boxOne.innerText="Eu sou a div original";
corpo.appendChild(boxOne);

let boxTwo = document.createElement('div');
boxTwo.id="irmao"
boxTwo.style.width="400px";
boxTwo.style.height="400px";
boxTwo.style.backgroundColor="green";
boxTwo.innerText="Eu sou irmão da div original";
corpo.appendChild(boxTwo);

let boxThree = document.createElement('div');
boxThree.id="filho"
boxThree.style.width="100px";
boxThree.style.height="100px";
boxThree.style.backgroundColor="green";
boxThree.innerText="Eu sou filho da div original";
boxOne.appendChild(boxThree);
 
//testes
//next sibiling pai resultado:irmao
let pai=document.querySelector('#pai');
console.log(pai.nextSibling);
console.log(pai.firstElementChild);