document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
document.addEventListener('contextmenu', event => event.preventDefault());

var thisname = localStorage.getItem("nameoneLocalStorage");
var name = thisname;
var thisscore = localStorage.getItem("scoreoneLocalStorage");
var score = thisscore;

const finalname = document.getElementById('namediv');
const finalscore = document.getElementById('finalscorediv');

finalname.innerHTML= name+',';
finalscore.innerHTML = 'Your final score is : '+score+' / 10';
