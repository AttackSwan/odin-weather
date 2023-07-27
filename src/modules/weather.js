const testLocation = "Ballarat, Victoria";

function weatherManager() {
	fetchWeather();
}

async function fetchWeather(location = testLocation) {
	const apiKey = API_KEY;
	let apiURL = "";

	if (location) {
		apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
	} else {
		apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${testLocation}&aqi=yes`;
	}
	// console.log("API URL: " + apiURL);

	const apiResponse = await fetch(apiURL);
	const weatherData = await apiResponse.json();
	console.log(weatherData);
}

export default weatherManager;
