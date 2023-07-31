import { createDiv, createButton, createDetails } from "./utility.js";
import { format, parse } from "date-fns";
import weatherManager from "./weather";
// Icons
import feelsLikeSVG from "./SVGs/feelsLike.svg";
import humiditySVG from "./SVGs/humidity.svg";
import chanceRainSVG from "./SVGs/chanceRain.svg";
import windSpeedSVG from "./SVGs/windSpeed.svg";
import searchSVG from "./SVGs/search.svg";
import dailySVG from "./SVGs/daily.svg";
import hourlySVG from "./SVGs/hourly.svg";

const guiManager = () => {
	const content = document.querySelector(".content");
	let units = "C";

	const fetchManager = weatherManager();

	async function loadGUI() {
		addSearchDiv(content);
		addDailyStats(content);
		addUnitsDiv(content);
		addDailyForecastDiv(content);
		addHourlyForecastDiv(content);
		addFooter(content);
		addListeners();

		await fetchManager.fetchAndProcessWeather();
		fillDetails();
	}

	function addSearchDiv(container) {
		const search = createDiv("search");
		const inputDiv = createDiv("search_input");

		const searchInput = document.createElement("input");
		searchInput.type = "text";
		searchInput.placeholder = "Search Location...";

		const searchIcon = new Image();
		searchIcon.src = searchSVG;

		inputDiv.append(searchInput, searchIcon);
		search.append(inputDiv);
		container.appendChild(search);
	}

	function addDailyStats(container) {
		const daily = createDiv("daily");

		const leftdiv = createDiv("daily_stats");
		const rightdiv = createDiv("AQI");

		const temp = createDiv("current_temperature");
		const name = createDiv("current_location");
		const time = createDiv("current_time");
		const icon = createDiv("current_icon");
		const conditions = createDiv("current_conditions");

		const feelsLike = createDetails(
			"current_feels_like",
			"Feels Like",
			feelsLikeSVG
		);
		const humidity = createDetails(
			"current_humidity",
			"Humidity",
			humiditySVG
		);
		const chanceRain = createDetails(
			"chance_of_rain",
			"Chance of Rain",
			chanceRainSVG
		);
		const wind = createDetails(
			"current_wind_speed",
			"Wind Speed",
			windSpeedSVG
		);

		leftdiv.append(temp, name, time, conditions, icon);
		rightdiv.append(feelsLike, humidity, chanceRain, wind);
		daily.append(leftdiv, rightdiv);
		container.appendChild(daily);
	}

	function addUnitsDiv(container) {
		const buttons = createDiv("temperature_buttons");
		const buttonC = createButton("temp_button_c", "Celsius");
		const buttonF = createButton("temp_button_f", "Fahrenheit");
		buttons.append(buttonC, buttonF);
		container.appendChild(buttons);
	}

	function addDailyForecastDiv(container) {
		const number_of_days = 3;
		const dailyForecast = createDiv("forecast_daily");

		for (let i = 0; i < number_of_days; i++) {
			const day = createDiv("forecast_daily_day");
			const name = createDiv("forecast_day_name");
			const temp = createDiv("forecast_daily_temp_div");
			const temp_high = createDiv("forecast_daily_temp_high");
			const temp_low = createDiv("forecast_daily_temp_low");
			const icon = createDiv("forecast_daily_icon");

			temp.append(temp_high, temp_low);
			day.append(name, temp, icon);
			day.setAttribute("data-day", i + 1);
			dailyForecast.appendChild(day);
		}

		container.append(dailyForecast);
	}

	function addHourlyForecastDiv(container) {
		const number_of_hours = 7;
		const hourlyForecast = createDiv("forecast_hourly");

		for (let i = 0; i < number_of_hours; i++) {
			const hour = createDiv("forecast_hourly_hour");
			const time = createDiv("forecast_hourly_time");
			const temp = createDiv("forecast_hourly_temp");
			const icon = createDiv("forecast_hourly_icon");

			hour.setAttribute("data-hour", i + 1);
			hour.append(time, temp, icon);
			hourlyForecast.appendChild(hour);
		}

		container.append(hourlyForecast);
	}

	function addFooter(container) {
		const footer = createDiv("footer");

		const daily = createDiv("footer_daily");
		const hourly = createDiv("footer_hourly");

		const dailyIcon = new Image();
		dailyIcon.src = dailySVG;
		const hourlyIcon = new Image();
		hourlyIcon.src = hourlySVG;

		const dailyText = createDiv("footer_daily_text");
		const hourlyText = createDiv("footer_hourly_text");

		dailyText.textContent = "Daily Forecast";
		hourlyText.textContent = "Hourly Forecast";

		daily.append(dailyIcon, dailyText);
		hourly.append(hourlyIcon, hourlyText);
		footer.append(daily, hourly);
		container.appendChild(footer);
	}

	function addListeners() {
		const searchInput = document.querySelector("input");
		const searchIcon = document.querySelector(".search_input img");
		const temp_button_c = document.querySelector(".temp_button_c");
		const temp_button_f = document.querySelector(".temp_button_f");

		searchIcon.addEventListener("click", searchWeather);
		searchInput.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				searchIcon.click();
			}
		});
		temp_button_c.addEventListener("click", () => {
			changeUnits("C");
		});
		temp_button_f.addEventListener("click", () => {
			changeUnits("F");
		});
	}

	function fillDetails() {
		const dailyData = fetchManager.getData("daily");
		const hourlyData = fetchManager.getData("hourly");
		const forecastData = fetchManager.getData("forecast");

		fillDailyStats(dailyData);
		fillAirDetails(dailyData);
	}

	async function searchWeather() {
		const searchInput = document.querySelector("input");
		const searchQuery = searchInput.value;

		//Clear search input
		searchInput.value = "";

		if (searchQuery === "") {
			console.log("Error: search blank");
		} else {
			await fetchManager.fetchAndProcessWeather(searchQuery);
			fillDetails();
		}
	}

	function fillDailyStats(data) {
		console.log("daily data: ", data);
		const current_temperature = document.querySelector(
			".current_temperature"
		);
		const current_time = document.querySelector(".current_time");
		const current_location = document.querySelector(".current_location");
		const current_conditions = document.querySelector(
			".current_conditions"
		);

		if (units === "C") {
			current_temperature.textContent = `${data.temp_c} ° ${units}`;
		} else if (units === "F") {
			current_temperature.textContent = `${data.temp_f} ° ${units}`;
		}
		current_location.textContent = data.location;
		current_conditions.textContent = data.condition;

		const time_string = data.time;
		const date = parse(time_string, "yyyy-MM-dd HH:mm", new Date());
		const formatted_time = format(date, "h:mm a");
		current_time.textContent = formatted_time;

		const current_icon = document.querySelector(".current_icon");
		current_icon.innerHTML = "";
		const icon = new Image();
		icon.src = data.iconURL;
		current_icon.appendChild(icon);
	}

	function fillAirDetails(data) {
		const current_feels_like_text = document.querySelector(
			".current_feels_like .air_text"
		);
		const current_humidity_text = document.querySelector(
			".current_humidity .air_text"
		);
		const chance_of_rain_text = document.querySelector(
			".chance_of_rain .air_text"
		);
		const current_wind_speed_text = document.querySelector(
			".current_wind_speed .air_text"
		);

		if (units === "C") {
			current_feels_like_text.textContent = `${data.feelsLikeC} °${units} `;
			current_wind_speed_text.textContent = `${data.wind_kph} kph`;
		} else if (units === "F") {
			current_feels_like_text.textContent = `${data.feelsLikeF} °${units}`;
			current_wind_speed_text.textContent = `${data.wind_mph} mph`;
		}

		current_humidity_text.textContent = `${data.humidity} %`;
		chance_of_rain_text.textContent = `${data.daily_chance_of_rain} %`;
	}

	function changeUnits(newUnit) {
		if (newUnit !== units) {
			units = newUnit;
			fillDetails();
		}
	}

	return { loadGUI };
};

export default guiManager;
