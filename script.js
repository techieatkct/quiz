const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timer');

function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}:${seconds}`;
	/*console.log(minutes);
	console.log(seconds);*/
	if (minutes == 0 && seconds == 00)
	{
		window.location.href='results.html';
	}
	var alert = document.getElementById('timealert');
	if (minutes == 1)
	{
		if (seconds <= 59)
		{
		alert.style.visibility='visible';
		}
		if (seconds <= 56)
		{
		alert.style.visibility='hidden';	
		}
	}
	time--;
}

setInterval(updateCountdown,1000);

/* NAME */

var thisname = localStorage.getItem("nameoneLocalStorage");
var name = thisname;
//console.log(name);

/* SUBMIT */

	var mainsub = document.getElementById('sub');
	var overlay = document.getElementById('overlay');
	var content = document.getElementById('content');
	mainsub.addEventListener('click',function(){
		overlay.style.visibility='visible';
		content.style.visibility='visible';
	})

/* CANCEL */

	var cancel = document.getElementById('cancel');
	cancel.addEventListener('click',function(){
		overlay.style.visibility='hidden';
		content.style.visibility='hidden';
	})

/* FINAL SUBMIT */
	var finalsub = document.getElementById('save-btn');
	finalsub.addEventListener('click',function(){
		window.location.href='results.html';
	})

/* DIVS */

var one = document.getElementById('one');
one.addEventListener('click',function(){
	document.getElementById('q1').style.visibility='visible';
	document.getElementById('one').style.borderColor='orange';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var two = document.getElementById('two');
two.addEventListener('click',function(){
	document.getElementById('q2').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var three = document.getElementById('three');
three.addEventListener('click',function(){
	document.getElementById('q3').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var four = document.getElementById('four');
four.addEventListener('click',function(){
	document.getElementById('q4').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var five = document.getElementById('five');
five.addEventListener('click',function(){
	document.getElementById('q5').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var six = document.getElementById('six');
six.addEventListener('click',function(){
	document.getElementById('q6').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var seven = document.getElementById('seven');
seven.addEventListener('click',function(){
	document.getElementById('q7').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var eight = document.getElementById('eight');
eight.addEventListener('click',function(){
	document.getElementById('q8').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var nine = document.getElementById('nine');
nine.addEventListener('click',function(){
	document.getElementById('q9').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q10').style.visibility='hidden';
})
var ten = document.getElementById('ten');
ten.addEventListener('click',function(){
	document.getElementById('q10').style.visibility='visible';
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='hidden';
})

/* TOTALS */
var total1;
var total2;
var total3;
var total4;
var total5;
var total6;
var total7;
var total8;
var total9;
var total10;

/* UNDEFINED */

if(total1 == undefined)
	{
		total1 = 0;
	}

if(total2 == undefined)
	{
		total2 = 0;
	}

if(total3 == undefined)
	{
		total3 = 0;
	}

if(total4 == undefined)
	{
		total4 = 0;
	}

if(total5 == undefined)
	{
		total5 = 0;
	}

if(total6 == undefined)
	{
		total6 = 0;
	}

if(total7 == undefined)
	{
		total7 = 0;
	}

if(total8 == undefined)
	{
		total8 = 0;
	}

if(total9 == undefined)
	{
		total9 = 0;
	}

if(total10 == undefined)
	{
		total10 = 0;
	}


/* FIRST Q */

var save1 = document.getElementById('save1');
var clear1 = document.getElementById('clear1');
var skip1 = document.getElementById('skip1');

clear1.addEventListener('click',function(){
	one.style.backgroundColor='black';
	if(one.style.backgroundColor=='black'){
		one.addEventListener('mouseenter',() =>
		one.style.backgroundColor='lightgreen'
		);
		one.addEventListener('mouseleave',() =>
		one.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total1 = points_gained;
	console.log('first score',total1);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip1.addEventListener('click',function(){
	one.style.backgroundColor = "red";
    if(one.style.backgroundColor=='red'){
		one.addEventListener('mouseenter',() =>
		one.style.backgroundColor='lightgreen'
		);
		one.addEventListener('mouseleave',() =>
		one.style.backgroundColor='red'
		);
	}
	document.getElementById('q1').style.visibility='hidden';
	document.getElementById('q2').style.visibility='visible';
	var points_gained = 0;
	total1 = points_gained;
	console.log('first score',total1);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})


var points = 0;

save1.addEventListener('click',function(){
	if(document.getElementById('q1_1').checked || document.getElementById('q1_2').checked)
	{
			document.getElementById('q1').style.visibility='hidden';
			document.getElementById('q2').style.visibility='visible';
	}

	if(document.getElementById('q1_1').checked || document.getElementById('q1_2').checked)
	{
		one.style.backgroundColor = "green";
	}
	if(document.getElementById('q1_1').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
    total1 = points_gained;
	console.log('first score',total1);

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log('final_score :',final_score);
    localStorage.setItem("scoreoneLocalStorage", final_score);

    if(one.style.backgroundColor=='green'){
		one.addEventListener('mouseenter',() =>
		one.style.backgroundColor='lightgreen'
		);
		one.addEventListener('mouseleave',() =>
		one.style.backgroundColor='green'
		);
	}
})

/* SECOND Q */

var save2 = document.getElementById('save2');
var clear2 = document.getElementById('clear2');
var skip2 = document.getElementById('skip2');

clear2.addEventListener('click',function(){
	two.style.backgroundColor='black';
	if(two.style.backgroundColor='black'){
		two.addEventListener('mouseenter',() =>
			two.style.backgroundColor='lightgreen'
		);
		two.addEventListener('mouseleave',() =>
			two.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total2 = points_gained;
	console.log('second score',total2);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);

})
skip2.addEventListener('click',function(){
	two.style.backgroundColor = "red";
	two.style.backgroundColor='red';
	if(two.style.backgroundColor='red'){
		two.addEventListener('mouseenter',() =>
			two.style.backgroundColor='lightgreen'
		);
		two.addEventListener('mouseleave',() =>
			two.style.backgroundColor='red'
		);
	}
	document.getElementById('q2').style.visibility='hidden';
	document.getElementById('q3').style.visibility='visible';
	var points_gained = 0;
	total2 = points_gained;
	console.log('second score',total2);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save2.addEventListener('click',function(){
	if(document.getElementById('q2_1').checked || document.getElementById('q2_2').checked)
	{
			document.getElementById('q2').style.visibility='hidden';
			document.getElementById('q3').style.visibility='visible';
	}

	if(document.getElementById('q2_1').checked || document.getElementById('q2_2').checked)
	{
		two.style.backgroundColor = "green";
	}
	if(document.getElementById('q2_2').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total2 = points_gained;
	console.log('second score',total2)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	two.style.backgroundColor='green';
	if(two.style.backgroundColor='green'){
		two.addEventListener('mouseenter',() =>
			two.style.backgroundColor='lightgreen'
		);
		two.addEventListener('mouseleave',() =>
			two.style.backgroundColor='green'
		);
	}
})

/* THIRD Q */

var save3 = document.getElementById('save3');
var clear3 = document.getElementById('clear3');
var skip3 = document.getElementById('skip3');

clear3.addEventListener('click',function(){
	three.style.backgroundColor='black';
	if(three.style.backgroundColor='black'){
		three.addEventListener('mouseenter',() =>
			three.style.backgroundColor='lightgreen'
		);
		three.addEventListener('mouseleave',() =>
			three.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total3 = points_gained;
	console.log('third score',total3);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);

})
skip3.addEventListener('click',function(){
	three.style.backgroundColor = "red";
	if(three.style.backgroundColor='red'){
		three.addEventListener('mouseenter',() =>
			three.style.backgroundColor='lightgreen'
		);
		three.addEventListener('mouseleave',() =>
			three.style.backgroundColor='red'
		);
	}
	document.getElementById('q3').style.visibility='hidden';
	document.getElementById('q4').style.visibility='visible';
	var points_gained = 0;
	total3 = points_gained;
	console.log('third score',total3);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save3.addEventListener('click',function(){
	if(document.getElementById('q3_1').checked || document.getElementById('q3_2').checked)
	{
			document.getElementById('q3').style.visibility='hidden';
			document.getElementById('q4').style.visibility='visible';
	}

	if(document.getElementById('q3_1').checked || document.getElementById('q3_2').checked)
	{
		three.style.backgroundColor = "green";
	}
	if(document.getElementById('q3_2').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total3 = points_gained;
	console.log('third score',total3)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(three.style.backgroundColor='green'){
		three.addEventListener('mouseenter',() =>
			three.style.backgroundColor='lightgreen'
		);
		three.addEventListener('mouseleave',() =>
			three.style.backgroundColor='green'
		);
	}
})

/* FOURTH Q */

var save4 = document.getElementById('save4');
var clear4 = document.getElementById('clear4');
var skip4 = document.getElementById('skip4');

clear4.addEventListener('click',function(){
	four.style.backgroundColor='black';
	if(four.style.backgroundColor='black'){
		four.addEventListener('mouseenter',() =>
			four.style.backgroundColor='lightgreen'
		);
		four.addEventListener('mouseleave',() =>
			four.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total4 = points_gained;
	console.log('fourth score',total4);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip4.addEventListener('click',function(){
	four.style.backgroundColor = "red";
	if(four.style.backgroundColor='red'){
		four.addEventListener('mouseenter',() =>
			four.style.backgroundColor='lightgreen'
		);
		four.addEventListener('mouseleave',() =>
			four.style.backgroundColor='red'
		);
	}
	document.getElementById('q4').style.visibility='hidden';
	document.getElementById('q5').style.visibility='visible';
	var points_gained = 0;
	total4 = points_gained;
	console.log('fourth score',total4);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save4.addEventListener('click',function(){
	if(document.getElementById('q4_1').checked || document.getElementById('q4_2').checked)
	{
			document.getElementById('q4').style.visibility='hidden';
			document.getElementById('q5').style.visibility='visible';
	}

	if(document.getElementById('q4_1').checked || document.getElementById('q4_2').checked)
	{
		four.style.backgroundColor = "green";
	}
	if(document.getElementById('q4_2').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total4 = points_gained;
	console.log('fourth score',total4)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(four.style.backgroundColor='green'){
		four.addEventListener('mouseenter',() =>
			four.style.backgroundColor='lightgreen'
		);
		four.addEventListener('mouseleave',() =>
			four.style.backgroundColor='green'
		);
	}
})

/* FIFTH Q */

var save5 = document.getElementById('save5');
var clear5 = document.getElementById('clear5');
var skip5 = document.getElementById('skip5');

clear5.addEventListener('click',function(){
	five.style.backgroundColor='black';
	if(five.style.backgroundColor='black'){
		five.addEventListener('mouseenter',() =>
			five.style.backgroundColor='lightgreen'
		);
		five.addEventListener('mouseleave',() =>
			five.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total5 = points_gained;
	console.log('fifth score',total5);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip5.addEventListener('click',function(){
	five.style.backgroundColor = "red";
	if(five.style.backgroundColor='red'){
		five.addEventListener('mouseenter',() =>
			five.style.backgroundColor='lightgreen'
		);
		five.addEventListener('mouseleave',() =>
			five.style.backgroundColor='red'
		);
	}
	document.getElementById('q5').style.visibility='hidden';
	document.getElementById('q6').style.visibility='visible';
	var points_gained = 0;
	total5 = points_gained;
	console.log('fifth score',total5);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save5.addEventListener('click',function(){
	if(document.getElementById('q5_1').checked || document.getElementById('q5_2').checked)
	{
			document.getElementById('q5').style.visibility='hidden';
			document.getElementById('q6').style.visibility='visible';
	}

	if(document.getElementById('q5_1').checked || document.getElementById('q5_2').checked)
	{
		five.style.backgroundColor = "green";
	}
	if(document.getElementById('q5_1').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total5 = points_gained;
	console.log('fifth score',total5)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(five.style.backgroundColor='green'){
		five.addEventListener('mouseenter',() =>
			five.style.backgroundColor='lightgreen'
		);
		five.addEventListener('mouseleave',() =>
			five.style.backgroundColor='green'
		);
	}
})

/* SIXTH Q */

var save6 = document.getElementById('save6');
var clear6 = document.getElementById('clear6');
var skip6 = document.getElementById('skip6');

clear6.addEventListener('click',function(){
	six.style.backgroundColor='black';
	if(six.style.backgroundColor='black'){
		six.addEventListener('mouseenter',() =>
			six.style.backgroundColor='lightgreen'
		);
		six.addEventListener('mouseleave',() =>
			six.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total6 = points_gained;
	console.log('sixth score',total6);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip6.addEventListener('click',function(){
	six.style.backgroundColor = "red";
	if(six.style.backgroundColor='red'){
		six.addEventListener('mouseenter',() =>
			six.style.backgroundColor='lightgreen'
		);
		six.addEventListener('mouseleave',() =>
			six.style.backgroundColor='red'
		);
	}
	document.getElementById('q6').style.visibility='hidden';
	document.getElementById('q7').style.visibility='visible';
	var points_gained = 0;
	total6 = points_gained;
	console.log('sixth score',total6);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save6.addEventListener('click',function(){
	if(document.getElementById('q6_1').checked || document.getElementById('q6_2').checked)
	{
			document.getElementById('q6').style.visibility='hidden';
			document.getElementById('q7').style.visibility='visible';
	}

	if(document.getElementById('q6_1').checked || document.getElementById('q6_2').checked)
	{
		six.style.backgroundColor = "green";
	}
	if(document.getElementById('q6_2').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total6 = points_gained;
	console.log('sixth score',total6)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(six.style.backgroundColor='green'){
		six.addEventListener('mouseenter',() =>
			six.style.backgroundColor='lightgreen'
		);
		six.addEventListener('mouseleave',() =>
			six.style.backgroundColor='green'
		);
	}
})

/* SEVENTH Q */

var save7 = document.getElementById('save7');
var clear7 = document.getElementById('clear7');
var skip7 = document.getElementById('skip7');

clear7.addEventListener('click',function(){
	seven.style.backgroundColor='black';
	if(seven.style.backgroundColor='black'){
		seven.addEventListener('mouseenter',() =>
			seven.style.backgroundColor='lightgreen'
		);
		seven.addEventListener('mouseleave',() =>
			seven.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total7 = points_gained;
	console.log('seventh score',total7);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip7.addEventListener('click',function(){
	seven.style.backgroundColor = "red";
	if(seven.style.backgroundColor='red'){
		seven.addEventListener('mouseenter',() =>
			seven.style.backgroundColor='lightgreen'
		);
		seven.addEventListener('mouseleave',() =>
			seven.style.backgroundColor='red'
		);
	}
	document.getElementById('q7').style.visibility='hidden';
	document.getElementById('q8').style.visibility='visible';
	var points_gained = 0;
	total7 = points_gained;
	console.log('seventh score',total7);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save7.addEventListener('click',function(){
	if(document.getElementById('q7_1').checked || document.getElementById('q7_2').checked)
	{
			document.getElementById('q7').style.visibility='hidden';
			document.getElementById('q8').style.visibility='visible';
	}

	if(document.getElementById('q7_1').checked || document.getElementById('q7_2').checked)
	{
		seven.style.backgroundColor = "green";
	}
	if(document.getElementById('q7_1').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total7 = points_gained;
	console.log('seventh score',total7)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(seven.style.backgroundColor='green'){
		seven.addEventListener('mouseenter',() =>
			seven.style.backgroundColor='lightgreen'
		);
		seven.addEventListener('mouseleave',() =>
			seven.style.backgroundColor='green'
		);
	}
})

/* EIGHTH Q */

var save8 = document.getElementById('save8');
var clear8 = document.getElementById('clear8');
var skip8 = document.getElementById('skip8');

clear8.addEventListener('click',function(){
	eight.style.backgroundColor='black';
	if(eight.style.backgroundColor='black'){
		eight.addEventListener('mouseenter',() =>
			eight.style.backgroundColor='lightgreen'
		);
		eight.addEventListener('mouseleave',() =>
			eight.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total8 = points_gained;
	console.log('eighth score',total8);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip8.addEventListener('click',function(){
	eight.style.backgroundColor = "red";
	if(eight.style.backgroundColor='red'){
		eight.addEventListener('mouseenter',() =>
			eight.style.backgroundColor='lightgreen'
		);
		eight.addEventListener('mouseleave',() =>
			eight.style.backgroundColor='red'
		);
	}
	document.getElementById('q8').style.visibility='hidden';
	document.getElementById('q9').style.visibility='visible';
	var points_gained = 0;
	total8 = points_gained;
	console.log('eighth score',total8);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save8.addEventListener('click',function(){
	if(document.getElementById('q8_1').checked || document.getElementById('q8_2').checked)
	{
			document.getElementById('q8').style.visibility='hidden';
			document.getElementById('q9').style.visibility='visible';
	}

	if(document.getElementById('q8_1').checked || document.getElementById('q8_2').checked)
	{
		eight.style.backgroundColor = "green";
	}
	if(document.getElementById('q8_2').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total8 = points_gained;
	console.log('eighth score',total8)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(eight.style.backgroundColor='green'){
		eight.addEventListener('mouseenter',() =>
			eight.style.backgroundColor='lightgreen'
		);
		eight.addEventListener('mouseleave',() =>
			eight.style.backgroundColor='green'
		);
	}
})

/* NINTH Q */

var save9 = document.getElementById('save9');
var clear9 = document.getElementById('clear9');
var skip9 = document.getElementById('skip9');

clear9.addEventListener('click',function(){
	nine.style.backgroundColor='black';
	if(nine.style.backgroundColor='black'){
		nine.addEventListener('mouseenter',() =>
			nine.style.backgroundColor='lightgreen'
		);
		nine.addEventListener('mouseleave',() =>
			nine.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total9 = points_gained;
	console.log('ninth score',total9);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip9.addEventListener('click',function(){
	nine.style.backgroundColor = "red";
	if(nine.style.backgroundColor='red'){
		nine.addEventListener('mouseenter',() =>
			nine.style.backgroundColor='lightgreen'
		);
		nine.addEventListener('mouseleave',() =>
			nine.style.backgroundColor='red'
		);
	}
	document.getElementById('q9').style.visibility='hidden';
	document.getElementById('q10').style.visibility='visible';
	var points_gained = 0;
	total9 = points_gained;
	console.log('ninth score',total9);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save9.addEventListener('click',function(){
	if(document.getElementById('q9_1').checked || document.getElementById('q9_2').checked)
	{
			document.getElementById('q9').style.visibility='hidden';
			document.getElementById('q10').style.visibility='visible';
	}

	if(document.getElementById('q9_1').checked || document.getElementById('q9_2').checked)
	{
		nine.style.backgroundColor = "green";
	}
	if(document.getElementById('q9_1').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total9 = points_gained;
	console.log('ninth score',total9)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(nine.style.backgroundColor='green'){
		nine.addEventListener('mouseenter',() =>
			nine.style.backgroundColor='lightgreen'
		);
		nine.addEventListener('mouseleave',() =>
			nine.style.backgroundColor='green'
		);
	}
})

/* TENTH Q */

var save10 = document.getElementById('save10');
var clear10 = document.getElementById('clear10');
var skip10 = document.getElementById('skip10');

clear10.addEventListener('click',function(){
	ten.style.backgroundColor='black';
	if(ten.style.backgroundColor='black'){
		ten.addEventListener('mouseenter',() =>
			ten.style.backgroundColor='lightgreen'
		);
		ten.addEventListener('mouseleave',() =>
			ten.style.backgroundColor='black'
		);
	}
	var points_gained = 0;
	total10 = points_gained;
	console.log('tenth score',total10);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})
skip10.addEventListener('click',function(){
	ten.style.backgroundColor = "red";
	if(ten.style.backgroundColor='red'){
		ten.addEventListener('mouseenter',() =>
			ten.style.backgroundColor='lightgreen'
		);
		ten.addEventListener('mouseleave',() =>
			ten.style.backgroundColor='red'
		);
	}
	document.getElementById('q10').style.visibility='hidden';
	document.getElementById('q1').style.visibility='visible';
	var points_gained = 0;
	total10 = points_gained;
	console.log('tenth score',total10);
	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    console.log("Final score",final_score);
})

save10.addEventListener('click',function(){
	if(document.getElementById('q10_1').checked || document.getElementById('q10_2').checked)
	{
			document.getElementById('q10').style.visibility='hidden';
			document.getElementById('q1').style.visibility='visible';
	}

	if(document.getElementById('q10_1').checked || document.getElementById('q10_2').checked)
	{
		ten.style.backgroundColor = "green";
	}
	if(document.getElementById('q10_1').checked)
	{
		var points_gained = 1;
	}
	else
	{
		var points_gained = 0;
	}
	total10 = points_gained;
	console.log('tenth score',total10)

	var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
	console.log('final_score :',final_score);
	localStorage.setItem("scoreoneLocalStorage", final_score);

	if(ten.style.backgroundColor='green'){
		ten.addEventListener('mouseenter',() =>
			ten.style.backgroundColor='lightgreen'
		);
		ten.addEventListener('mouseleave',() =>
			ten.style.backgroundColor='green'
		);
	}
})

/* FINAL SCORE */

	if(total1 == undefined)
	{
		total1 = 0;
	}

if(total2 == undefined)
	{
		total2 = 0;
	}

if(total3 == undefined)
	{
		total3 = 0;
	}

if(total4 == undefined)
	{
		total4 = 0;
	}

if(total5 == undefined)
	{
		total5 = 0;
	}

if(total6 == undefined)
	{
		total6 = 0;
	}

if(total7 == undefined)
	{
		total7 = 0;
	}

if(total8 == undefined)
	{
		total8 = 0;
	}

if(total9 == undefined)
	{
		total9 = 0;
	}

if(total10 == undefined)
	{
		total10 = 0;
	}
	
var final_score = total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
localStorage.setItem("scoreoneLocalStorage", final_score);