
const pageObject = {
	nav: {
		a: { link: './pages/home.html', title: 'Home' },
		b: { link: './pages/about.html', title: 'About' },
		c: { link: './pages/contact.html', title: 'Contact' },
		d: { link: './pages/location.html', title: 'Location' }
	},
	homeCard: {
		image: './images/product.png',
		message1: 'This product is coming soon!',
		message2: 'Click the button below to learn more!',
		buttonLink: 'https://en.wikipedia.org/wiki/Don_McMahon',
		buttonTitle: 'Learn More',
		dividerTitle: 'Custom Products',
	},
	schedule: {
		sunday: { day: 'Sun', open: 'Closed', close: '*' },
		monday: { day: 'Mon', open: '8:00 am', close: '5:00 pm' },
		tuesday: { day: 'Tue', open: '8:00 am', close: '5:00 pm' },
		wednesday: { day: 'Wed', open: '8:00 am', close: '5:00 pm' },
		thursday: { day: 'Thu', open: '8:00 am', close: '5:00 pm' },
		friday: { day: 'Fri', open: '8:00 am', close: '5:00 pm' },
		saturday: { day: 'Sat', open: 'Closed', close: '*' }
	}
}

function addToPage(elementID, display) {
	document.getElementById(elementID).innerHTML = `${display}`;
}

function testForElement(elementID) {
	let elemTest = document.getElementById(elementID);
	if (typeof(elemTest) != 'undefined' && elemTest != null) return true;
	return false;
}

function createNavLink(content) {
	let navLinks = '';
	let links = Object.keys(content);
	links.forEach(element => {
		navLinks += `
		<div class="nav-divider"></div>
		<div class="nav-div">
			<a href="${content[element].link}">${content[element].title}</a>
		</div>
		`
	});
	return navLinks + '<div class="nav-divider"></div>';
};

function createHomeCard(content, numberOfCards) {
	let homeCard = '';
	for (let i = 1; i <= numberOfCards; i++) {
		homeCard += `
		<div class="product-div" id="product-0${i}">
			<div class="product-img-div">
				<img src="${content.image}">
			</div>
			<div class="product-sub-div">
				<div class="product-desc-div">
					<span>${content.message1}</span>
					<span>${content.message2}</span>
				</div>
				<div class="product-button-div">
					<a href="${content.buttonLink}" target="_blank">${content.buttonTitle}</a>
				</div>
			</div>
		</div>
		`;
	};
	return homeCard + `
	<div class="product-div" id="product-divider">
		<div id="red-line"></div>
		<span class="header-text">${content.dividerTitle}</span>
		<div id="red-line"></div>
	</div>
	`;
}

function createSchedule(content) {
	let table = '<table class="table-schedule">';
	let days = Object.keys(content);
	days.forEach(key => {
		table += `<tr>
		<td>${content[key].day}</td>
		<td>${content[key].open}</td>
		<td>-</td>
		<td>${content[key].close}</td>
		</tr>`
	});
	return table + '</table>';
}

let htmlArray = [
	createNavLink(pageObject.nav),
	createHomeCard(pageObject.homeCard, 6),
	createSchedule(pageObject.schedule)
];

window.onload = function() {
	addToPage('nav-links', htmlArray[0]);
	if (testForElement('home-content-container')) addToPage('home-content-container', htmlArray[1]);
	if (testForElement('schedule-span')) addToPage('schedule-span', htmlArray[2]);
	console.log('Page Loaded');
	console.log(htmlArray[2]);
};