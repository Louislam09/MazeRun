let playerData = {
	name: undefined,
	time: undefined,
	level: undefined,
	key: undefined
};
var arrDataReceived;

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCW4haQZy7DM2QZnw40qzdnlkqYs8xCclE',
	authDomain: 'mazerun-eb031.firebaseapp.com',
	databaseURL: 'https://mazerun-eb031.firebaseio.com',
	projectId: 'mazerun-eb031',
	storageBucket: 'mazerun-eb031.appspot.com',
	messagingSenderId: '955159603291',
	appId: '1:955159603291:web:d43e90f139e8098b09377e',
	measurementId: 'G-410QP9HWWV'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics();
var database = firebase.database();
var ref = database.ref('scores');

function startGettingData() {
	ref.on('value', gotData, errData);
}
startGettingData();

function saveDataToFirebase(data) {
	savePlayerInfoToLocalstorage(data);

	let storageArr = [];

	arrDataReceived.forEach(arr => {
		if (arr.key === data.key) {
			storageArr.push(arr)
			return
		}
	})

	if (data.key === undefined) {
		let result = ref.push(data);
		data.key = result.key;
		playerKey = data.key;
	} else {
		let currectTime = parseInt(data.time.split(":").join(""));
		let currectLevel = data.level;

		let storageTime = parseInt(storageArr[0].time.split(":").join(""));
		let storageLevel = storageArr[0].level;

		if (currectLevel > storageLevel) {
			database.ref('scores/' + data.key).set(data);
		} else if (currectLevel === storageLevel && currectTime < storageTime) {
			database.ref('scores/' + data.key).set(data);
		} else {
			console.log("You have not reached your storage level yet, Continue playing...!")
		}
	}
}

function gotData(data) {
	arrDataReceived = [];
	var scores = data.val();
	var keys = Object.keys(scores);
	for (let i = 0; i < keys.length; i++) {
		let k = keys[i];
		let name = scores[k].name;
		let time = scores[k].time;
		let key = scores[k].key;
		let level = scores[k].level;
		arrDataReceived.push({ name: name, time: time, key: key, level: level });
	}
	drawScore(arrDataReceived);
}

function errData(err) {
	console.log('Error!');
	console.log(err);
}
