const defaultLocation = "Melbourne, Australia";

const weatherManager = () => {
	const forecastData = [];
	let dailyData;

	class Weather {
		constructor(
			condition,
			country,
			daily_chance_of_rain,
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
			this.daily_chance_of_rain = daily_chance_of_rain;
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

	class Forecast {
		constructor(day, temp_highC, temp_highF, temp_lowC, temp_lowF, icon) {
			this.day = day;
			this.temp_highC = temp_highC;
			this.temp_highF = temp_highF;
			this.temp_lowC = temp_lowC;
			this.temp_lowF = temp_lowF;
			this.icon = icon;
		}
	}

	async function fetchAndProcessWeather(location) {
		try {
			const fetchedData = await fetchWeather(location);
			if (fetchedData) {
				console.log("Fetched data: ", fetchedData);
				dailyData = processDailyData(fetchedData);
				console.log(dailyData);
				console.log(forecastData);
			} else {
				console.log("Error: No weather data to process.");
			}
		} catch (error) {
			console.log("Error fetching weather data: ", error);
		}
	}

	async function fetchWeather(location = defaultLocation) {
		const apiKey = API_KEY;
		let apiURL = "";

		if (location) {
			apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no`;
		} else {
			apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${defaultLocation}&days=3&aqi=yes&alerts=no`;
		}

		const apiResponse = await fetch(apiURL);
		const data = await apiResponse.json();
		return data;
	}

	function processDailyData(data) {
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			// Process data for current day:
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

			const daily_chance_of_rain =
				data.forecast.forecastday[0].day.daily_chance_of_rain;

			const current_day_data = new Weather(
				condition,
				country,
				daily_chance_of_rain,
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

			// Process forecast data
			const { forecast } = data;

			forecast.forecastday.forEach((day) => {
				const forecastDate = day.date;
				const maxtempC = day.day.maxtemp_c;
				const maxtempF = day.day.maxtemp_f;
				const mintempC = day.day.mintemp_c;
				const mintempF = day.day.mintemp_f;
				const dailyIcon = day.day.condition.icon;

				const dailyForecastData = new Forecast(
					forecastDate,
					maxtempC,
					maxtempF,
					mintempC,
					mintempF,
					dailyIcon
				);
				forecastData.push(dailyForecastData);
			});

			return current_day_data;
		}
	}

	fetchAndProcessWeather();
};

export default weatherManager;
