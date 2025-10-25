window.addEventListener("load", () => {
	const curtain = document.getElementById("curtain");
	const hasPlayed = localStorage.getItem("curtainPlayed");

	if (!hasPlayed) {
		document.body.style.overflow = "hidden";
		curtain.style.display = "flex";
		curtain.addEventListener("animationend", (e) => {
			if (e.animationName === "ascend") {
				curtain.style.display = "none";
				document.body.style.overflow = "auto";
				localStorage.setItem("curtainPlayed", "true");
			}
		});
	} else {
		curtain.style.display = "none";
		document.body.style.overflow = "auto";
	}
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault();
	const submitBtn = document.getElementById("submit");
	const statusEl = document.getElementById("form-status");

	statusEl.style.display = "none";
	submitBtn.classList.add("loading");

	const template = {
		name: document.getElementById("fname").value,
		email: document.getElementById("mail").value,
		message: document.getElementById("message").value,
	};

	emailjs
		.send("service_all3xvf", "template_3dmdsc4", template)
		.then(() => {
			statusEl.textContent = "Message sent successfully!";
			statusEl.className = "status-message success";
			document.getElementById("contactForm").reset();
		})
		.catch((error) => {
			console.error("EmailJS error:", error);
			statusEl.textContent = "Failed to send message. Please try again.";
			statusEl.className = "status-message error";
		})
		.finally(() => {
			submitBtn.classList.remove("loading");
			statusEl.style.display = "block";
		});
});
