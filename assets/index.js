setTimeout(() => {
	const words = ['Programmer.', 'Hacker.', 'Sysadmin.'];
	const title = document.getElementById('header-dynamic');
	let currentWord = 0, currentLetter = 0, deleting = false;
	setInterval(() => {
		if (currentLetter < words[currentWord].length) {
			title.appendChild(document.createTextNode(words[currentWord].substring(currentLetter, currentLetter + 1)));
			currentLetter += 1;
		}
		else if (!deleting) {
			deleting = true;
			title.classList.add('stopped');
			setTimeout(() => {
				title.classList.remove('stopped');
				let delLetter = words[currentWord].length;
				const delInterval = setInterval(() => {
					title.removeChild(title.lastChild);
					delLetter -= 1;
					if (delLetter == 0) {
						clearInterval(delInterval);
						title.classList.add('stopped');
						setTimeout(() => {
							currentWord = currentWord == words.length - 1 ? 0 : currentWord + 1;
							currentLetter = 0;
							deleting = false;
							title.classList.remove('stopped');
						}, 1200);
					}
				}, 50);
			}, 1800);
		}
	}, 100);
}, 500);