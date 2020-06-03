const gameContainer = document.querySelector('.game-container');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const homeContainer = document.querySelector('.home-container');
const joystickContainer = document.querySelector('.joystick');
const joystickCheckBox = document.getElementById("js");

const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const playerNameInput = document.querySelector('.player-name');
const instructionContainer = document.querySelector('.instructions');

const tableContainer = document.querySelector('.table-board');

const timerContainer = document.querySelector('.timer');
const timeDiv = document.querySelector('.time');
const levelDiv = document.querySelector('.level');

const pauseContainer = document.querySelector('.pause-container');
const pauseSection = document.querySelector('.pause-section');
const pauseInput = document.getElementById('pause-input');

const speedrunContainer = document.querySelector('.speedrun');
const scoreDiv = document.querySelector('.score');

const soundLabel = document.querySelector('.sound-label');
const soundInput = document.getElementById('sound-input');

const gameoverContainer = document.querySelector('.gameover');
const gameoverSpan = document.querySelector('.gameover-span');
const gameoverMessage = document.querySelector('.gameover-message');
const gameoverLevelMessage = document.querySelector('.gameover-level-message');
const gameoverTimeMessage = document.querySelector('.gameover-time-message');

// Buttons
const playButton = document.querySelector('.play-button');
const trainingButton = document.querySelector('.training-button');
const scoreboardShowButton = document.querySelector('.scoreboard-button');
const scoreboardHiddenButton = document.querySelector('.hidden-table-button');
const restartButton = document.querySelector('.restart-button');
const goHomeButton = document.querySelector('.go-home-button');
const goHomeButton2 = document.querySelector('.go-home-button-2');

const cw = (canvas.width = 600);
const ch = (canvas.height = 600);

// PLayer information
let playerName,
	playerTime,
	playerKey;

// Game Sounds
let gameoverSound;
let nextLevelSound;
let backgroundSound_1;
let backgroundSound_2;

let waitingTime = 4;
let levelReached = 0;
let gameState = false;
let gameover = false;

const blockSize = 24;

let player, enemy, door;

let countTimer,
	followTimer,
	score = 0,
	minute = 0;

let teleporter_1, teleporter_2, teleporter_3;

let walls = [];
let walkSpots = [];
let playerPath = [];
let teleporters = [];

const levels = [level_1, level_2, level_3, level_4, level_5, level_6, level_7, level_8, level_9, last_message];
const levelsImage = [
	'url(levels/levels.png) no-repeat',
	'url(levels/level_1.png) no-repeat',
	'url(levels/level_2.png) no-repeat',
	'url(levels/level_3.png) no-repeat',
	'url(levels/level_4.png) no-repeat',
	'url(levels/level_5.png) no-repeat',
	'url(levels/level_6.png) no-repeat',
	'url(levels/level_7.png) no-repeat',
	'url(levels/level_8.png) no-repeat',
	'url(levels/level_9.png) no-repeat',
	'url(levels/last_message.png) no-repeat'
];
let width = 0;

window.addEventListener('load', () => {
	let storagePlayerInfo = getPlayerInfoFromSystem();
	if (storagePlayerInfo.length !== 0) {
		playerNameInput.value = storagePlayerInfo[0].name;
		playerKey = storagePlayerInfo[0].key;
	}

	gameoverSound = new Audio('sounds/gameover_sound.mp3');
	nextLevelSound = new Audio('sounds/next_level_sound.mp3');
	backgroundSound_1 = new Audio('sounds/background_sound_1.mp3');
	backgroundSound_2 = new Audio('sounds/background_sound_2.mp3');
});

class GameEntity {
	constructor(x, y, size, src) {
		this.size = 24;
		this.x = x;
		this.y = y;
		this.fillColor = 'black';
		this.strokeColor = 'white';
		this.src = '';
	}

	draw = () => {
		c.beginPath();
		c.strokeStyle = this.strokeColor;
		c.fillStyle = this.fillColor;
		c.lineWidth = 2;
		c.rect(this.x, this.y, this.size, this.size);
		c.fill();
		c.stroke();
		c.closePath();
	};
	drawT = () => {
		var img = new Image(24, 24);
		img.src = this.src;
		c.beginPath();
		c.fillStyle = c.createPattern(img, 'repeat');
		c.rect(this.x, this.y, this.size, this.size);
		c.fill();
		c.closePath();
	};
	isCollision = (other) => {
		let a = this.x - other.x;
		let b = this.y - other.y;
		let distance = Math.sqrt(a * a + b * b);

		if (distance <= this.size) {
			return true;
		} else {
			return false;
		}
	};
	teleport = (other) => {
		this.x = other.x;
		this.y = other.y;
	};
}
class Wall {
	constructor(x, y) {
		this.wallSize = blockSize;
		this.x = x;
		this.y = y;
		this.fillColor = 'black';
		this.strokeColor = 'white';
	}

	draw = () => {
		c.beginPath();
		c.strokeStyle = this.strokeColor;
		c.fillStyle = this.fillColor;
		c.lineWidth = 2;
		c.rect(this.x, this.y, this.wallSize, this.wallSize);
		c.fill();
		c.stroke();
		c.closePath();
	};
}
class Door extends GameEntity {
	constructor(x, y, size, src) {
		super(x, y, size, src);
		this.fillColor = 'gold';
		this.strokeColor = 'gold';
		this.src = 'levels/door.png';
	}
}
class Teleporter extends GameEntity {
	constructor(x, y, size, src) {
		super(x, y, size, src);
		this.x = x;
		this.y = y;
		this.src = 'levels/hole2.png';
	}
}
class Enemy extends GameEntity {
	constructor(x, y, size) {
		super(x, y, size);
		this.enemySize = this.size;
		this.fillColor = 'red';
		this.strokeColor = 'black';
	}

	followPath = () => {
		let loop = async () => {
			for (let coordinate = 0; coordinate < playerPath.length; coordinate++) {
				// if (pauseInput.checked) await new Promise((resolve) => setTimeout(resolve, 5000));
				await waitFor((_) => !pauseInput.checked);

				await new Promise((resolve) => setTimeout(resolve, 470));

				if (playerPath[coordinate]) {
					this.x = playerPath[coordinate][0];
					this.y = playerPath[coordinate][1];
					playerPath.splice(coordinate, 1);
				}
			}
		};
		loop();
	};
}
class Player extends GameEntity {
	constructor(x, y, size) {
		super(x, y, size);
		this.fillColor = 'blue';
		this.strokeColor = 'blue';
		this.moveX;
		this.moveY;
		this.playerPos = [];
	}

	moveLeft = () => {
		this.moveX = this.x - this.size;
		this.moveY = this.y;
		this.playerPos[0] = [this.moveX, this.moveY];

		// this allow the player move to a blank spot
		walkSpots.forEach((spot, index) => {
			if (JSON.stringify(walkSpots[index]) == JSON.stringify(this.playerPos[0])) {
				this.x = this.moveX;
			}
		});
	};
	moveRight = () => {
		this.moveX = this.x + this.size;
		this.moveY = this.y;
		this.playerPos[0] = [this.moveX, this.moveY];

		// this allow the player move to a blank spot
		walkSpots.forEach((spot, index) => {
			if (JSON.stringify(walkSpots[index]) == JSON.stringify(this.playerPos[0])) {
				this.x = this.moveX;
			}
		});
	};
	moveUp = () => {
		this.moveX = this.x;
		this.moveY = this.y - this.size;
		this.playerPos[0] = [this.moveX, this.moveY];

		// this allow the player move to a blank spot
		walkSpots.forEach((spot, index) => {
			if (JSON.stringify(walkSpots[index]) == JSON.stringify(this.playerPos[0])) {
				this.y = this.moveY;
			}
		});
	};
	moveDown = () => {
		this.moveX = this.x;
		this.moveY = this.y + this.size;
		this.playerPos[0] = [this.moveX, this.moveY];

		// this allow the player move to a blank spot
		walkSpots.forEach((spot, index) => {
			if (JSON.stringify(walkSpots[index]) == JSON.stringify(this.playerPos[0])) {
				this.y = this.moveY;
			}
		});
	};

	teleport = (other) => {
		this.x = other.x;
		this.y = other.y - this.size;
	};
}
// This return a promise when a condiction is true
function waitFor(condFunc) {
	const poll = (resolve) => {
		if (condFunc()) resolve();
		else setTimeout((_) => poll(resolve), 400);
	};
	return new Promise(poll);
}
async function followPath(self) {
	for (let coordinate = 0; coordinate < playerPath.length; coordinate++) {
		// if (!pauseInput.checked) await new Promise((resolve) => setTimeout(resolve, 1000));
		await waitFor((_) => !pauseInput.checked);

		await new Promise((resolve) => setTimeout(resolve, 400));
		self.x = playerPath[coordinate][0];
		self.y = playerPath[coordinate][1];
		playerPath.splice(coordinate, 1);
	}
}
function showSection(element) {
	element.style.visibility = 'visible';

}
function hiddenSection(element) {
	element.style.visibility = 'hidden';
}
function timeScore() {
	let time = new Date();
	let mm = time.getMilliseconds();
	if (mm > 100) {
		score += 0.1;
	}
	if (score > 60) {
		minute += 1;
		score = 0;
	}
	if (minute > 0) {
		scoreDiv.innerText = `⏰ ${minute}:${Math.floor(score)}:${mm}`;
		gameoverTimeMessage.innerHTML = `<span>⏰</span> ${minute}:${Math.floor(score)}:${mm}`;
	} else {
		scoreDiv.innerText = `⏰ ${Math.floor(score)}:${mm}`;
		gameoverTimeMessage.innerHTML = `<span>⏰</span> ${Math.floor(score)}:${mm}`;
	}
	playerTime = `${minute}:${Math.floor(score)} `;

	gameoverLevelMessage.innerHTML = `<span>Level</span> ${levelReached + 1}`;
}
function toggleControl(e) {
	if (e.keyCode == '37' && gameState && !pauseInput.checked) {
		player.moveLeft();
		playerPath.push([player.x, player.y]);
	}

	if (e.keyCode == '39' && gameState && !pauseInput.checked) {
		player.moveRight();
		playerPath.push([player.x, player.y]);
	}

	if (e.keyCode == '38' && gameState && !pauseInput.checked) {
		player.moveUp();
		playerPath.push([player.x, player.y]);
	}

	if (e.keyCode == '40' && gameState && !pauseInput.checked) {
		player.moveDown();
		playerPath.push([player.x, player.y]);
	}
}
function drawMaze(level) {
	let block;
	for (const y in level) {
		for (const x in level[y]) {
			// if (level_reached < 9) block = level[x][y];
			// if (level_reached > 5) block = level[x][y];
			if (levelReached < 5) {
				block = level[y][x];
			} else {
				block = level[x][y];
			}

			// block = level[x][y];
			x_cor = x * blockSize;
			y_cor = y * blockSize;

			if (block === 'X') {
				// walls.push(new Wall(x_cor, y_cor));
				// walls.forEach((wall) => wall.draw());
			}
			if (block === '.') {
				walkSpots.push([x_cor, y_cor]);
			}
			if (block === 'P') {
				player = new Player(x_cor, y_cor);
				playerPath.push([x_cor, y_cor]);
				player.draw();
			}
			if (block === 'E') {
				enemy = new Enemy(x_cor - 1, y_cor - 1);
				// enemy.color = 'darkblue';
				enemy.draw();
			}
			if (block === 'D') {
				door = new Door(x_cor, y_cor);
			}
			if (block === 'T') {
				teleporter_1 = new Teleporter(x_cor, y_cor);
				teleporters.push(teleporter_1);
			}
			if (block === 't') {
				teleporter_2 = new Teleporter(x_cor, y_cor);
				teleporters.push(teleporter_2);
			}
			if (block === '@') {
				teleporter_3 = new Teleporter(x_cor, y_cor);
				teleporter_3.color = 'purple';
				teleporters.push(teleporter_3);
			}
		}
	}
}
// drawMaze(levels[8]);
function changeGameState() {
	gameState = !gameState;
}
function startTime() {
	countTimer = setInterval(Countdown, 1000);
}
function Countdown() {
	--waitingTime;
	timeDiv.innerText = waitingTime;
	if (levelReached === levels.length - 1) {
		levelDiv.innerText = `🎊🎉CONGRATULATION🎊🎉GAME COMPLETED🎊🎉`;

		setTimeout(() => alert('En 10 segundo volveras a home!.\n Terminaste el juego, Ahora \n trata de romper tu record(time)'), 4000);
		setTimeout(() => window.location.reload(), 10000);
	} else {
		levelDiv.innerText = `Level ${levelReached + 1}`;
	}
	if (waitingTime === 0) {
		clearInterval(countTimer);
		changeGameState();
		hiddenSection(timerContainer);
		playBackgroundSound()
	}

	if (gameState && waitingTime === 0) {
		document.addEventListener('keyup', toggleControl);
		followTimer = setTimeout(() => enemy.followPath(), 3000);
		// followTimer = setTimeout(() => followPath(enemy), 3000);
		setTimeout(() => clearTimeout(followTimer), 3000);
	}
}
function nextLevel(currectLevel = 0) {
	canvas.style.background = levelsImage[0];
	if (currectLevel === 0) canvas.style.backgroundPosition = `0px 0px`;
	levelReached++
	currecetLevel = currecetLevel + levelReached;
	
	if (currectLevel > 0) {
		width = 600 * -currectLevel;
		if (width === 6000) width = 6000;
		canvas.style.backgroundPosition = `${width}px 0px`;

		playerData = {
			name: playerName,
			time: playerTime,
			level: levelReached,
			key: playerKey
		};
		nextLevelSound.currentTime = 0;
		nextLevelSound.play();

		saveDataToFirebase(playerData);

		timeDiv.innerText = '';
		showSection(timerContainer);

		waitingTime = 4;
		startTime();
	}

	drawMaze(levels[currectLevel]);
}
function startGame() {
	nextLevel();
}
function restartGame() {
	waitingTime = 4;
	levelReached = 0;
	score = 0;
	minute = 0;
	gameover = false;

	timeDiv.innerText = '';
	walls = [];
	walkSpots = [];
	playerPath = [];

	showSection(timerContainer);
	nextLevel(levelReached);
	countTimer = setInterval(Countdown, 1000);
}
function animateTeleporter(teleporter) {
	if (Math.random() > 0.5) {
		teleporter.src = 'levels/hole3.png';
	} else if (Math.random() > 0.8) {
		teleporter.src = 'levels/hole1.png';
	} else {
		teleporter.src = 'levels/hole2.png';
	}
}
function playBackgroundSound() {
	if (!soundInput.checked) {
		if (Math.random() > 0.5) {
			backgroundSound_2.pause();
			backgroundSound_1.currectTime = 0;
			backgroundSound_1.play();
			backgroundSound_1.loop = true;
		} else {
			backgroundSound_1.pause();
			backgroundSound_2.currectTime = 0;
			backgroundSound_2.play();
			backgroundSound_2.loop = true;
		}
	}
}
function pauseBackgroundSound() {
	if (backgroundSound_1) backgroundSound_1.pause()
	if (backgroundSound_2) backgroundSound_2.pause()
}
function detectMob() {
	return ((window.innerWidth <= 800) && (window.innerHeight <= 800));
}

function drawAllEntity() {
	player.draw();
	door.draw();
	enemy.draw();

	if (levelReached == 4 || levelReached == 8) {
		if (teleporter_1 || teleporter_2 || teleporter_2) {
			teleporter_1.drawT();
			teleporter_2.drawT();
			teleporter_3.drawT();

			teleporters.forEach((teleporter) => {
				animateTeleporter(teleporter);
				teleporter.drawT();
			});

			// Collision with teleporter1
			if (teleporter_1.isCollision(player)) player.teleport(teleporter_3);
			if (teleporter_1.isCollision(enemy)) enemy.teleport(teleporter_3);

			// Collision with teleporter2
			if (teleporter_2.isCollision(player)) player.teleport(teleporter_3);
			if (teleporter_2.isCollision(enemy)) enemy.teleport(teleporter_3);
		}
	}

}

function observeCollisions() {
	if (door.isCollision(player)) {
// 		levelReached = levelReached + 1;

		walls = [];
		walkSpots = [];
		playerPath = [];

		canvas.classList.add('animate-canvas');
		canvas.addEventListener('animationend', () => {
			canvas.classList.remove('animate-canvas');
		});

// 		playerData = {
// 			name: playerName,
// 			time: playerTime,
// 			level: levelReached,
// 			key: playerKey
// 		};

		changeGameState();
// 		setTimeout(nextLevel(levelReached), 400);
		setTimeout(nextLevel(),400)
	}

	if (enemy.isCollision(player) && !gameover) {
		setTimeout(() => {
			showSection(gameoverContainer);
			hiddenSection(joystickContainer);

			gameoverSpan.classList.add('animate-over');
			gameoverSpan.addEventListener('animationend', () => {
				gameoverSpan.classList.remove('animate-over');
			});

			pauseBackgroundSound()

			gameoverSound.currentTime = 0;
			gameoverSound.play();

			gameover = true;
			gameState = false;
		}, 100);
	}

}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	if (!pauseInput.checked) {
		c.clearRect(0, 0, cw, ch);

		if (levelReached !== levels.length - 1) {
			if (gameState) timeScore();



			drawAllEntity()
			observeCollisions()


		}
	}
}

pauseInput.addEventListener("change", () => {
	if (!pauseInput.checked) {
		hiddenSection(pauseSection);
		backgroundSound_1.volume = 1;
		backgroundSound_2.volume = 1;
	} else {
		showSection(pauseSection);
		backgroundSound_1.volume = 0.3;
		backgroundSound_2.volume = 0.3;
	}
})
soundInput.addEventListener("change", () => {
	if (soundInput.checked) {
		soundLabel.innerText = "🔇";
		pauseBackgroundSound();
	} else {
		soundLabel.innerText = "🔊";
		playBackgroundSound();
	}
})

playButton.addEventListener('click', () => {
	playerName = playerNameInput.value;
	if (playerName == '') return alert('Necesitas Poner Tu Nombre!');
	hiddenSection(homeContainer);
	showSection(gameContainer);
	showSection(pauseContainer);
	showSection(speedrunContainer);
	showSection(timerContainer);

	if (detectMob() && joystickCheckBox.checked) {
		showSection(joystickContainer);
	}

	startGame();
	startTime();

	gameLoop();
});

restartButton.addEventListener('click', () => {
	hiddenSection(gameoverContainer);

	if (detectMob() && joystickCheckBox.checked) {
		showSection(joystickContainer);
	}

	restartGame();
});

trainingButton.addEventListener('click', () => {
	hiddenSection(homeContainer);
	showSection(instructionContainer);
});

scoreboardShowButton.addEventListener('click', () => {
	hiddenSection(homeContainer);
	showSection(tableContainer);

	tableContainer.style.marginLeft = '0%';
});
scoreboardHiddenButton.addEventListener('click', () => {
	hiddenSection(tableContainer);
	showSection(homeContainer);
	tableContainer.style.marginLeft = '-107%';
});

goHomeButton.addEventListener('click', () => {
	hiddenSection(instructionContainer);
	showSection(homeContainer);
});
goHomeButton2.addEventListener('click', () => {
	if (gameover === true) window.location.reload();
});
