// let oldScore = [];
let tbody = document.querySelector('#table tbody');
let body = document.querySelector('body');

const Places = [
	'1st🥇',
	'2nd🥈',
	'3th🥉',
	'4th🏅',
	'5th🏅',
	'6th🏅',
	'7th🏅',
	'8th🏅',
	'9th🏅',
	'10th🏅',
	'11th🏅',
	'12th🏅',
	'13th🏅',
	'14th🏅',
	'15th🏅'
];
let infoList = [];
var BESTSCORE;
let playerInfo = {};

let addScoreToSystem = (k, n, t) => {
	let newInfo = {
		key: k,
		name: n,
		time: t
	};

	infoList[0] = newInfo;

	localStorageDataList(infoList);
};
let getPlayerInfoFromSystem = () => {
	let storedInfo = localStorage.getItem('infoList');
	if (storedInfo == null) {
		infoList = [];
	} else {
		infoList = JSON.parse(storedInfo);
	}
	return infoList;
};
let localStorageDataList = (x) => {
	localStorage.setItem('infoList', JSON.stringify(x));
};
function savePlayerInfoToLocalstorage(playerInfo) {
	time = playerInfo.time;
	name = playerInfo.name;
	key = playerInfo.key;

	addScoreToSystem(key, name, time);
}
function drawScore(data) {
	let oldScore = data;

	oldScore.sort(function(a, b) {
		if (a.time > b.time) {
			return 1;
		}
		if (a.time < b.time) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});
	// if (oldScore.length == 0) {
	// 	BESTSCORE = 0;
	// } else {
	// 	BESTSCORE = oldScore[0].score;
	// }

	// oldScore.splice(10, 1);

	tbody.innerHTML = '';

	for (let i = 0; i < oldScore.length; i++) {
		let row = tbody.insertRow(i);

		let place = row.insertCell(0);
		let name = row.insertCell(1);
		let time = row.insertCell(2);

		place.className = Places[i];
		name.className = Places[i];
		time.className = Places[i];

		if (i === 0) {
			place.style.color = 'goldenrod';
			time.style.color = 'goldenrod';
			name.style.color = 'goldenrod';
		} else if (i === 1) {
			place.style.color = 'black';
			time.style.color = 'black';
			name.style.color = 'black';
		} else if (i === 2) {
			place.style.color = 'orangered';
			time.style.color = 'orangered';
			name.style.color = 'orangered';
		} else {
			place.style.color = 'green';
			time.style.color = 'green';
			name.style.color = 'green';
		}

		place.innerHTML = Places[i];
		name.innerHTML = oldScore[i].name;
		time.innerHTML = oldScore[i].time;

		tbody.appendChild(row);
	}
}
