$(function(){
	$(".submit-vesting").click(function(){
		$(".calculator__output").text("");
		var totalVestingAmount = $(".vestingNumber").val();
		var vestingAmount = $(".vestingNumber").val();
		var minimumVestingAmount = 10000;
		var currentlyVested = 0;
		var days = 0;
		var minimumDays = 0;
		var oneLoop = true;
		var eightyPercentDays = 0;

		if (vestingAmount > 10000) {
			while(currentlyVested < (totalVestingAmount * 0.99)){
				currentlyVested += (vestingAmount / 10);
				vestingAmount -= (vestingAmount / 10);
				days += 1;
				if (currentlyVested <= minimumVestingAmount) {
					minimumDays += 1;
				}
				console.log("days: " + days);
				console.log("currently vested: " + currentlyVested);
				console.log("vesting amount: " + vestingAmount);
				if ((currentlyVested >= (totalVestingAmount * 0.8)) && oneLoop === true) {
					oneLoop = false;
					eightyPercentDays = days;

				}
			}
			$(".calculator__output").append("<p>Days after you can start harvest: <b> " + minimumDays + " day(s)</b></p>");
			$(".calculator__output").append("<p>Days after 80% of your XEM will be vested: <b> " + eightyPercentDays + " days</b></p>");
		}
		else{
			alert("Vesting amount must be bigger that 10000");
		}
	});




	$(".submit-earning").click(function(){
		$(".calculator-earning__output").text("");
		var importanceInput = $(".earningNumber").val();
		var importance = importanceInput / 10000;
		var partOfTotalImportance = 1 / importance;
		var blockHitAfterDays = (partOfTotalImportance / 1440).toFixed(2);

		if (importanceInput > 0 && importanceInput < 10000) {
			$(".calculator-earning__output").append("<p>You will hit block each <b> " + blockHitAfterDays + " day(s)*</b></p>");
			$(".calculator-earning__output").append("<small>*The time estimated is an average. Particular block times will vary.</small>");
		}
		else{
			alert("Importance score must be between 0 and 10000");
		}
	});






});
