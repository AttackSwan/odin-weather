const testLocation = "Ballarat, Victoria";

const weatherManager = () => {
	let weatherData;

	class Weather {
		constructor(
			condition,
			country,
			feelsLikeC,
			feelsLikeF,
			humidity,
			iconURL,
			location,
			tempC,
			tempF,
			time,
			wind_kph,
			wind_mph
		) {
			this.condition = condition;
			this.country = country;
			this.feelsLikeC = feelsLikeC;
			this.feelsLikeF = feelsLikeF;
			this.humidity = humidity;
			this.iconURL = iconURL;
			this.location = location;
			this.tempC = tempC;
			this.tempF = tempF;
			this.time = time;
			this.wind_kph = wind_kph;
			this.wind_mph = wind_mph;
		}
	}

	async function fetchAndProcessWeather(location) {
		try {
			const fetchedData = await fetchWeather(location);
			if (fetchedData) {
				weatherData = processData(fetchedData);
				console.log(weatherData);
			} else {
				console.log("Error: No weather data to process.");
			}
		} catch (error) {
			console.log("Error fetching weather data: ", error);
		}
	}

	async function fetchWeather(location = testLocation) {
		const apiKey = API_KEY;
		let apiURL = "";

		if (location) {
			apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
		} else {
			apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${testLocation}&aqi=yes`;
		}

		const apiResponse = await fetch(apiURL);
		const data = await apiResponse.json();
		return data;
	}

	function processData(data) {
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			// Deconstruct data object into desired parameters
			const {
				current: {
					condition: { text: condition, icon },
					feelslike_c,
					feelslike_f,
					humidity,
					temp_c,
					temp_f,
					wind_kph,
					wind_mph,
				},
				location: { country, name, localtime },
			} = data;

			const processedData = new Weather(
				condition,
				country,
				feelslike_c,
				feelslike_f,
				humidity,
				icon,
				name,
				temp_c,
				temp_f,
				localtime,
				wind_kph,
				wind_mph
			);

			return processedData;
		}
	}

	fetchAndProcessWeather();
};

export default weatherManager;
