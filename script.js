const input = document.querySelector(".search");
const listItems = document.querySelectorAll("li");

const search = () => {
	const text = input.value.toLowerCase();
	listItems.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

input.addEventListener("keyup", search);
