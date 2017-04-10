	// $(document).ready(function(){
	// 	//hide all questions
	// 	$(section).hide();
	// });


	function submitAnswers() {

	    var total = 5;
	    var score = 0;



	    //get user input
	    //whatever user selects for questions
	    var Q1 = document.forms["quizForm"]["Q1"].value;
	    var Q2 = document.forms["quizForm"]["Q2"].value;
	    var Q3 = document.forms["quizForm"]["Q3"].value;
	    var Q4 = document.forms["quizForm"]["Q4"].value;
	    var Q5 = document.forms["quizForm"]["Q5"].value;


	    // Set Correct Answers
	    var answers = ["c", "d", "c", "a", "d"];

	   //for loop to run through question validation
	    // for (i = 1; i <= total; i++) {	
	    // //validation
	    // if (eval('Q' + i) == null || eval('Q' + i) == '') {
	    // alert('You missed question ' + i);
	    // //don't want form to submit
	    // return false;
	    // 	}		
	    // }

	    //Check the answers
	    for (i = 1; i <= total; i++) {
	        if (eval('Q' + i) == answers[i - 1]) {
	            score++;
	        }
	    }

	    //display results
	    var results = document.getElementById('results');
	    results.innerHTML = '<h3> You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

	    alert('You scored ' + score + ' out of ' + total);

	 
	    // if(score >=4) {
	    // 	alert("Good Job" + ' You scored ' + score + ' out of ' + total);
	    // 	results.innerHTML = '<h3> You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
	    // }
	    stopTimer();

	    return false;

	};


//Timer Associated with Quiz

	var intervalId;


	function startTimer(controlId) {
		$("form").css("opacity", "1");
	    var control = document.getElementById(controlId);
	    var seconds = control.value;

	    seconds = seconds - 1;

	    if (seconds == 0) {
	        control.value = "done";	
	     	//Calling function to submit answers and post score
	        submitAnswers()       	
	        return;
	    } else {
	        control.value = seconds;
	    }

	    intervalId = setTimeout(function() { startTimer("txtBox") }, 1000);

	} 


//Reset Button
	function resetTimer () {
		location.reload();
			}

//Pause Button
	function stopTimer () {
		clearTimeout(intervalId);
			}
