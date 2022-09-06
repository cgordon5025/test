function SelectPicA(){
    let myPixA = ["./Assets/Animals/A/Ace.png", "./Assets/Animals/A/Admiral.png", "./Assets/Animals/A/AgentS.png", "./Assets/Animals/A/Agnes.png", "./Assets/Animals/A/Al.png", "./Assets/Animals/A/Alfonso.png", "./Assets/Animals/A/Alice.png", "./Assets/Animals/A/Alli.png", "./Assets/Animals/A/Amelia.png", "./Assets/Animals/A/Anabelle.png", "./Assets/Animals/A/Anchovy.png", "./Assets/Animals/A/Angus.png", "./Assets/Animals/A/Anicotti.png",  "./Assets/Animals/A/Ankha.png",  "./Assets/Animals/A/Annalisa.png",  "./Assets/Animals/A/Annalise.png",  "./Assets/Animals/A/Antonio.png",  "./Assets/Animals/A/Apollo.png",  "./Assets/Animals/A/Apple.png",  "./Assets/Animals/A/Astrid.png",  "./Assets/Animals/A/Audie.png",  "./Assets/Animals/A/Aurora.png",  "./Assets/Animals/A/Ava.png",  "./Assets/Animals/A/Avery.png",  "./Assets/Animals/A/Axel.png",  "./Assets/Animals/A/Azalea.png"]
    let myNameA = ["Ace", "Admiral","AgentS","Agnes","Al","Alfonso","Alice","Alli","Amelia","Anabelle","Anchovy","Angus","Anicotti","Ankha","Annalisa","Annalise","Antonio","Apollo","Apple","Astrid","Audie","Aurora","Ava","Avery","Axel","Azalea"]
    let myPixALength = myPixA.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber*myPixALength;
    randomNumber = Math.floor(randomNumber);
    randomNumberA = randomNumber
    let choosenPixA = myPixA[randomNumber];
    let choosenNameA = myNameA[randomNumberA]
    myPictureA.src = choosenPixA;
    NeighborA.textContent = choosenNameA;
    /*NeighborA = choosenNameA;*/
}

/*function SelectNameA(){
    let myNameA = ["Ace", "Admiral","AgentS","Agnes","Al","Alfonso","Alice","Alli","Amelia","Anabelle","Anchovy","Angus","Anicotti","Ankha","Annalisa","Annalise","Antonio","Apollo","Astrid","Audie","Aurora","Ava","Avery","Axel","Azalea"]
    let choosenNameA = myNameA[randomNumber]
    NeighborA = choosenNameA;

}*/
