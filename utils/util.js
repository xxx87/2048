function tplString(tplString, attributes) {
	for(var i in attributes) {
		if(attributes.hasOwnProperty(i)) {
			tplString = tplString.replace('{{ ' + i + ' }}', attributes[i]);
		}
	}
	return tplString;
}