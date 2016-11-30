module.exports = function(firstArray, sndArray){
	if(firstArray.length === 0 && sndArray.length === 0){
		return 0;
	}

	var missing_num;
	for(var i in sndArray){
		if (firstArray.length === sndArray.length) {
			return 0;
		}
		if(firstArray.indexOf(sndArray[i]) === -1){
			missing_num=sndArray[i];
		}
	}
	
	for (var j= 0; j < firstArray.length; j++) {
		if(sndArray.indexOf(firstArray[j]) === -1){
			missing_num = firstArray[j];
		}
	}

	return missing_num;

}