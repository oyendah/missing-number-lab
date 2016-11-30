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
	for(var i in firstArray){
		if(sndArray.indexOf(firstArray[i]) === -1){
			missing_num = firstArray[i];
		}
	}

	return missing_num;

}