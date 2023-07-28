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

const createDetails = (className, caption, iconURL) => {
	const container = createDiv("air_details");
	const iconDiv = createDiv("air_icon");
	const detailsDiv = createDiv("air_RHS");
	const captionDiv = createDiv("air_caption");
	captionDiv.textContent = caption;
	const text = createDiv("air_text");

	detailsDiv.append(caption, text);
	container.append(iconDiv, detailsDiv);
	container.classList.add(className);

	const icon = new Image();
	icon.src = iconURL;
	iconDiv.appendChild(icon);

	return container;
};

export { createDiv, createButton, createDetails };
