import { createDiv, createButton } from "./utility.js";
import weatherManager from "./weather.js";

const guiManager = () => {
	const content = document.querySelector(".content");

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

		const leftdiv = createDiv("location");
		const rightdiv = createDiv("airDetails");

		const temp = createDiv("current_temperature");
		const name = createDiv("location");
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

	return { loadGUI };
};

export default guiManager;
