function myFunction(){ 

var x = document.getElementById("textID").value;
var wordCounter = 1;
var sentenceCounter = 0;
var spaceCounter = 0;
var averageWordCounter = 0;


for (i = 0; i < x.length; i++)
{
if (x[i] == " "){
spaceCounter++;
wordCounter++;
}

if (x[i] == "!" ||x[i] == "?"||x[i] == "."){
sentenceCounter++;
}

if(x === ""){
wordCounter = 0;
}
}

averageWordCounter = wordCounter/sentenceCounter;


document.getElementById("p1").innerHTML = 'There are ' + wordCounter + ' words in this text.';
document.getElementById("p2").innerHTML = 'There are ' + spaceCounter + ' spaces in this text.';
document.getElementById("p3").innerHTML = 'There are ' + sentenceCounter + ' sentences in this text.';
document.getElementById("p4").innerHTML = 'There are ' + averageWordCounter + ' average words per sentence in this text.';
}
