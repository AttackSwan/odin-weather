import "./style.css";
import weatherManager from "./modules/weather";
import guiManager from "./modules/GUI";

const load = (async () => {
	const fetchManager = weatherManager();
	const GUI = guiManager();

	// Fetch data and process
	GUI.loadGUI();
	addListeners();
	await fetchManager.fetchAndProcessWeather();
	fillGUIdetails();

	function addListeners() {
		const searchButton = document.getElementById("searchButton");
		const searchInput = document.querySelector("input");

		searchButton.addEventListener("click", searchWeather);
		searchInput.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				searchButton.click();
			}
		});
	}

	async function searchWeather() {
		const searchInput = document.querySelector("input");
		const searchQuery = searchInput.value;

		if (searchQuery === "") {
			console.log("Error: search blank");
		} else {
			await fetchManager.fetchAndProcessWeather(searchQuery);
			fillGUIdetails();
		}
	}

	function fillGUIdetails() {
		const dailyData = fetchManager.getData("daily");
		const hourlyData = fetchManager.getData("hourly");
		const forecastData = fetchManager.getData("forecast");

		GUI.fillData(dailyData, forecastData, hourlyData);
	}
})();
