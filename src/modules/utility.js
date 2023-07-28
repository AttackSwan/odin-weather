const createDiv = (className) => {
	const div = document.createElement("div");
	div.classList.add(className);
	return div;
};

const createButton = (className, buttonText) => {
	const button = document.createElement("button");
	button.classList.add(className);
	button.textContent = buttonText;
	return button;
};

export { createDiv, createButton };
