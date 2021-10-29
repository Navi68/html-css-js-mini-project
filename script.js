//creat a array obj
const setOfWords =["When you put your arms around me, you let me know there's nothing in this world I can't do.","And when you smile, the whole world stops and stares for a while...","Well, I found a woman stronger than anyone I know. She shares my dreams; I hope that someday I'll share her home.","I hope you don't mind that I put down in words how wonderful life is while you're in the world."];

//to display msg
const msg = document.getElementById('msg');
//what we typing
const typeWords = document.getElementById('mywords');

const btn = document.getElementById('btn');
let startTime , endTime;

const playGame = () =>{
   let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"; 
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = " You typed total at "+speed+" words per min";

    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
   
}

const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++; 
        }
    })

   let errorWords = ( words1.length - cnt );
   return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter= (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click',function(){
    
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    } else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
