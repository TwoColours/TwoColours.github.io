$(function(){
	$(".submit").click(function(){
		var vestingAmount = $(".vestingNumber").val();
		var minimumVestingAmount = 10000;
		var currentlyVested = 0
		var days = 0;

		if (vestingAmount > 10000) {
			while(currentlyVested < minimumVestingAmount){
				currentlyVested += (vestingAmount / 10);
				vestingAmount -= (vestingAmount / 10);
				days += 1;
				console.log("days: " + days);
				console.log("currently vested: " + currentlyVested);
				console.log("vesting amount: " + vestingAmount);
			}
		}
		else{
			alert("Vesting amount must be bigger that 10000");
		}
	});
});
