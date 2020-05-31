let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;


document.addEventListener('mousedown', lock);
document.addEventListener('touchstart', lock);

document.addEventListener('mouseup', release);
document.addEventListener('touchend', release);

function lock(event) {
	startX = event.type === 'mousedown' ? event.screenX : event.changedTouches[0].screenX;
	startY = event.type === 'mousedown' ? event.screenY : event.changedTouches[0].screenY;
}

function release(event) {
	if (!startX) return;
	endX = event.type === 'mouseup' ? event.screenX : event.changedTouches[0].screenX;
	endY = event.type === 'mouseup' ? event.screenY : event.changedTouches[0].screenY;
	SwipeDirrectionChecker();
}
function SwipeDirrectionChecker() {
	if (gameState && waitingTime === 0 && !joystickCheckBox.checked) {
		if (Math.abs(endX - startX) > 50)
			if (endX < startX) {
				player.moveLeft();
				playerPath.push([player.x, player.y]);
				return;
			} else if (endX > startX) {
				player.moveRight();
				playerPath.push([player.x, player.y]);
				return;
			}
		if (endY < startY) {
			player.moveUp();
			playerPath.push([player.x, player.y]);
			return;
		} else {
			player.moveDown();
			playerPath.push([player.x, player.y]);
			return;
		}
	}
}

leftButton.addEventListener('click', goLeft)
rightButton.addEventListener('click', goRight)
upButton.addEventListener('click', goUp)
downButton.addEventListener('click', goDown)


function goUp() {
	player.moveUp();
	playerPath.push([player.x, player.y]);
}
function goDown() {
	player.moveDown();
	playerPath.push([player.x, player.y]);
}
function goLeft() {
	player.moveLeft();
	playerPath.push([player.x, player.y]);
}
function goRight() {
	player.moveRight();
	playerPath.push([player.x, player.y]);
}