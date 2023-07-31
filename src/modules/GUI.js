import { createDiv, createButton, createDetails } from "./utility.js";
import { format, parse } from "date-fns";
import feelsLikeSVG from "./SVGs/feelsLike.svg";
import humiditySVG from "./SVGs/humidity.svg";
import chanceRainSVG from "./SVGs/chanceRain.svg";
import windSpeedSVG from "./SVGs/windSpeed.svg";

const guiManager = () => {
	const content = document.querySelector(".content");
	let units = "C";

	function loadGUI() {
		addDailyStats(content);
		addSearchDiv(content);
		const hoursDiv = createDiv("hours");
		const forecastDiv = createDiv("forecast");

		content.append(hoursDiv, forecastDiv);
	}

	function addSearchDiv(container) {
		const search = createDiv("search");

		const inputDiv = createDiv("search_input");
		const searchInput = document.createElement("input");
		const searchButton = createButton("searchButton", "Search!");
		searchButton.id = "searchButton";
		const searchIcon = createDiv("searchIcon");
		inputDiv.append(searchInput, searchButton, searchIcon);

		const buttons = createDiv("temperature_buttons");
		const buttonC = createButton("temp_button", "Celcius");
		const buttonF = createButton("temp_button", "Fahrenheit");
		buttons.append(buttonC, buttonF);

		search.append(inputDiv, buttons);
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

	function fillData(dailyData, forecastData, hourlyData) {
		fillDailyStats(dailyData);
		fillAirDetails(dailyData);
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

		current_temperature.textContent = `${data.temp_c} ° ${units}`;
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

		if ((units = "C")) {
			current_feels_like_text.textContent = `${data.feelsLikeC} °${units} `;
			current_wind_speed_text.textContent = `${data.wind_kph} kph`;
		} else if ((units = "F")) {
			current_feels_like_text.textContent = `${data.feelsLikeF} °${units}`;
			current_wind_speed_text.textContent = `${data.wind_mph} mph`;
		}

		current_humidity_text.textContent = `${data.humidity} %`;
		chance_of_rain_text.textContent = `${data.daily_chance_of_rain} %`;
	}

	return { fillData, loadGUI };
};

export default guiManager;
