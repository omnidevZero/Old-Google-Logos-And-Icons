function handleChangelog() {
	let changelogHeader = document.querySelector('#extension-header');
	let changelogVersion = document.querySelector('#version');
	let version = browser.runtime.getManifest().version;
	let name = browser.runtime.getManifest().name;
	if (!changelogHeader) return;
	if (window.location.href.includes('#install')) {
		changelogHeader.innerText = `${name} has been installed!`;
	} else {
		changelogHeader.innerText = `${name} has just been updated to v.${version}!`;
	}
}

function addShowMore() {
	const updatesToDisplay = 3;
	let counter = 0;
	let changesContainer = document.querySelector('#changes ul');
	let showMoreButton = document.createElement('div');
	showMoreButton.classList.add('show-more');
	showMoreButton.innerText = 'Show more...';
	showMoreButton.addEventListener('click', function () {
		for (let i = 0; i < changesContainer.children.length; i++) {
			changesContainer.children[i].removeAttribute('hidden');
		}
		this.remove();
	});
	

	for (let i = 0; i < changesContainer.children.length; i++) {
		const currentElement = changesContainer.children[i];
		const showMoreElement = document.querySelector('.show-more');
		if (currentElement.classList && currentElement.classList.contains('update')) counter++;
		if (!showMoreElement && counter > updatesToDisplay) {
			changesContainer.insertBefore(showMoreButton, currentElement);
		}
		if (showMoreElement) {
			currentElement.setAttribute('hidden', '');
		}
	}
}

handleChangelog();
addShowMore();