function check()
{
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
    // document.write(question3);
    // document.write(question2);
	var count=0;
	if(question1 == 'Narendra Modi')
	{
		count++;
		// console.log("1");
		// document.write(1);

	}
	if(question2 == "Yogi aditya nath")
	{
		count++;
		// console.log(2);
		// document.write(2);

	}
	if(question3 == 'Delhi')
	{
		count++;
		// console.log(3);
		// document.write(3);
	}
	// console.log(count);
 //        console.log(4);
		
	document.getElementById("after_submit").style.visibility="visible"
    document.getElementById("number_correct").innerHTML ="you got "+ count +"correct.";
}