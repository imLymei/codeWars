function zero(nextFunction) {
	return nextFunction == undefined ? '0' : Math.floor(eval(`0${nextFunction}`));
}
function one(nextFunction) {
	return nextFunction == undefined ? '1' : Math.floor(eval(`1${nextFunction}`));
}
function two(nextFunction) {
	return nextFunction == undefined ? '2' : Math.floor(eval(`2${nextFunction}`));
}
function three(nextFunction) {
	return nextFunction == undefined ? '3' : Math.floor(eval(`3${nextFunction}`));
}
function four(nextFunction) {
	return nextFunction == undefined ? '4' : Math.floor(eval(`4${nextFunction}`));
}
function five(nextFunction) {
	return nextFunction == undefined ? '5' : Math.floor(eval(`5${nextFunction}`));
}
function six(nextFunction) {
	return nextFunction == undefined ? '6' : Math.floor(eval(`6${nextFunction}`));
}
function seven(nextFunction) {
	return nextFunction == undefined ? '7' : Math.floor(eval(`7${nextFunction}`));
}
function eight(nextFunction) {
	return nextFunction == undefined ? '8' : Math.floor(eval(`8${nextFunction}`));
}
function nine(nextFunction) {
	return nextFunction == undefined ? '9' : Math.floor(eval(`9${nextFunction}`));
}

function plus(nextFunction) {
	return `+ ${nextFunction}`;
}
function minus(nextFunction) {
	return `- ${nextFunction}`;
}
function times(nextFunction) {
	return `* ${nextFunction}`;
}
function dividedBy(nextFunction) {
	return `/ ${nextFunction}`;
}

console.log(one(zero(plus(five()))));
