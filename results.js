document.addEventListener('contextmenu', event => event.preventDefault());

var thisname = localStorage.getItem("nameoneLocalStorage");
var name = thisname;
var thisscore = localStorage.getItem("scoreoneLocalStorage");
var score = thisscore;

const finalname = document.getElementById('namediv');
const finalscore = document.getElementById('finalscorediv');

finalname.innerHTML= name+',';
finalscore.innerHTML = 'Your final score is : '+score+' / 10';