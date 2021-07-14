function jogarDados(){  
    let frequencia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let counter = 1; counter <=1000; counter++){
      let dado1 = Math.floor( 1 + 6*Math.random() )
      let dado2 = Math.floor( 1 + 6*Math.random() )
      
      somaDados = dado1 + dado2

      frequencia[somaDados] = frequencia[somaDados] + 1;
    
    }

    return frequencia

}

console.log(jogarDados())


function dom() {

freqArray = [26, 63, 76, 114, 145, 173, 144, 98, 71, 61, 29]
for(counter=0; counter<=10; counter++) {
   
    let newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = (freqArray[counter]) +"px";
    
    
    let newText = document.createTextNode("Soma = " + (counter + 2) + " | " +(freqArray[counter]) + " vezes")
    newElement.appendChild(newText);

    let destination = document.getElementById("playDados");
    destination.appendChild(newElement);
}
}
dom()

