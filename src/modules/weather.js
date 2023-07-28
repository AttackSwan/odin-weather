const weatherManager = () => {
	const defaultLocation = "Melbourne, Australia";
	const forecastData = [];
	const hourlyData = [];
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
			temp_c,
			temp_f,
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
			this.temp_c = temp_c;
			this.temp_f = temp_f;
			this.time = time;
			this.wind_kph = wind_kph;
			this.wind_mph = wind_mph;
		}
	}

	class Forecast {
		constructor(
			day,
			temp_high_c,
			temp_high_f,
			temp_low_c,
			temp_low_f,
			icon
		) {
			this.day = day;
			this.temp_high_c = temp_high_c;
			this.temp_high_f = temp_high_f;
			this.temp_low_c = temp_low_c;
			this.temp_low_f = temp_low_f;
			this.icon = icon;
		}
	}

	class Hourly {
		constructor(time, temp_c, temp_f, icon) {
			this.time = time;
			this.temp_c = temp_c;
			this.temp_f = temp_f;
			this.icon = icon;
		}
	}

	async function fetchAndProcessWeather(location) {
		try {
			const fetchedData = await fetchWeather(location);
			if (fetchedData) {
				dailyData = processDailyData(fetchedData);
				processForecastData(fetchedData);
				processHourlyData(fetchedData);
				console.log("Fetched data: ", fetchedData);
				console.log(dailyData);
				console.log(forecastData);
				console.log("Hourly data: ", hourlyData);
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

			return current_day_data;
		}
	}

	function processForecastData(data) {
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			const { forecast } = data;

			if (!forecast || !Array.isArray(forecast.forecastday)) {
				console.log("Error: Forecast data is not available.");
				return;
			}

			// Process forecast data
			forecast.forecastday.forEach((day) => {
				const forecastDate = day.date;
				const maxtemp_c = day.day.maxtemp_c;
				const maxtemp_f = day.day.maxtemp_f;
				const mintemp_c = day.day.mintemp_c;
				const mintemp_f = day.day.mintemp_f;
				const dailyIcon = day.day.condition.icon;

				const dailyForecastData = new Forecast(
					forecastDate,
					maxtemp_c,
					maxtemp_f,
					mintemp_c,
					mintemp_f,
					dailyIcon
				);
				forecastData.push(dailyForecastData);
			});
		}
	}

	function processHourlyData(data) {
		// 7 lots of data @ every 3 hours
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			const hourData = data.forecast.forecastday[0].hour;

			if (!hourData || !Array.isArray(hourData)) {
				console.log("Error: Forecast data is not available.");
				return;
			}

			for (let i = 0; i < 24; i += 3) {
				const hour = hourData[i].time;
				const temp_c = hourData[i].temp_c;
				const temp_f = hourData[i].temp_f;
				const icon = hourData[i].condition.icon;

				const newHour = new Hourly(hour, temp_c, temp_f, icon);
				hourlyData.push(newHour);
			}
		}
	}

	function getData(type) {
		switch (type) {
			case "daily":
				return dailyData;
			case "hourly":
				return hourlyData;
			case "forecast":
				return forecastData;
			default:
				console.log("Error: data not retrieved.");
				return null;
		}
	}

	return {
		fetchAndProcessWeather,
		getData,
	};
};

export default weatherManager;
