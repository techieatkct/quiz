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

var start_btn = document.getElementById('start_btn');
start_btn.addEventListener('click',function(){
if (document.getElementById('myname').value == '') { alert('Please enter your name.'); return }
	var name = document.getElementById('myname').value;
	localStorage.setItem("nameoneLocalStorage", name);
	window.location.href='quiz.html';
})
