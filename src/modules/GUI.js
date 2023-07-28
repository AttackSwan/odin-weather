import { createDiv, createButton } from "./utility.js";
import { format, parse } from "date-fns";

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
		const searchButton = document.createElement("button");
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
		const dailyStats = createDiv("dailyStats");

		const leftdiv = createDiv("daily_stats");
		const rightdiv = createDiv("airDetails");

		const temp = createDiv("current_temperature");
		const name = createDiv("current_location");
		const time = createDiv("current_time");

		const conditions = createDiv("current_conditions");
		const icon = createDiv("current_icon");
		const feelsLike = createDiv("current_feels_like");
		const humidity = createDiv("current_humidity");
		const chanceRain = createDiv("chance_of_rain");
		const wind = createDiv("current_wind_speed");

		leftdiv.append(temp, name, time);
		rightdiv.append(
			conditions,
			icon,
			feelsLike,
			humidity,
			chanceRain,
			wind
		);
		dailyStats.append(leftdiv, rightdiv);
		container.appendChild(dailyStats);
	}

	function fillData(dailyData, forecastData, hourlyData) {
		fillDailyStats(dailyData);
		fillAirDetails(dailyData);
	}

	function fillDailyStats(data) {
		const current_temperature = document.querySelector(
			".current_temperature"
		);
		const current_time = document.querySelector(".current_time");
		const current_location = document.querySelector(".current_location");

		current_temperature.textContent = `${data.temp_c} ° ${units}`;
		current_location.textContent = data.location;

		const time_string = data.time;
		const date = parse(time_string, "yyyy-MM-dd HH:mm", new Date());
		const formatted_time = format(date, "HH:mm");
		current_time.textContent = formatted_time;
	}

	function fillAirDetails(data) {
		const current_conditions = document.querySelector(
			".current_conditions"
		);
		const current_icon = document.querySelector(".current_icon");
		const current_feels_like = document.querySelector(
			".current_feels_like"
		);
		const current_humidity = document.querySelector(".current_humidity");
		const chance_of_rain = document.querySelector(".chance_of_rain");
		const current_wind_speed = document.querySelector(
			".current_wind_speed"
		);

		current_conditions.textContent = data.condition;
		if ((units = "C")) {
			current_feels_like.textContent = `${data.feelsLikeC} ° ${units} `;
			current_wind_speed.textContent = `${data.wind_kph} kph`;
		} else if ((units = "F")) {
			current_feels_like.textContent = `${data.feelsLikeF} ° ${units}`;
			current_wind_speed.textContent = `${data.wind_mph} mph`;
		}

		current_humidity.textContent = `${data.humidity} %`;
		chance_of_rain.textContent = `${data.daily_chance_of_rain} %`;
	}

	return { fillData, loadGUI };
};

export default guiManager;
