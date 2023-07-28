import "./style.css";
import weatherManager from "./modules/weather";
import guiManager from "./modules/GUI";

const fetchManager = weatherManager();
const GUI = guiManager();
// Fetch data and process
fetchManager.fetchAndProcessWeather();
GUI.loadGUI();

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

function searchWeather() {
	const searchInput = document.querySelector("input");
	const searchQuery = searchInput.value;

	if (searchQuery === "") {
		console.log("Error: search blank");
	} else {
		fetchManager.fetchAndProcessWeather(searchQuery);
	}
}

// addListeners();
