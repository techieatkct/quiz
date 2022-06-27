document.addEventListener('contextmenu', event => event.preventDefault());

var start_btn = document.getElementById('start_btn');
start_btn.addEventListener('click',function(){
if (document.getElementById('myname').value == '') { alert('Please enter your name.'); return }
	var name = document.getElementById('myname').value;
	localStorage.setItem("nameoneLocalStorage", name);
	window.location.href='quiz.html';
})