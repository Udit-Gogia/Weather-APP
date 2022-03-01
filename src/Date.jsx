function setDate() {
	var date = new Date();
	var DATE = date.getDate();
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getFullYear();
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
		
	];
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return `${days[day]} ${DATE} ${months[month]} ${year}`;
}

export default setDate;
