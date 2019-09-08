function openTab(evt, pageName){
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}
/*
----Beginign of MainPage section of the javascript----
*/
//Initialize all global variables that are relevent to the game
var totalBPS = 0;
var bullets = 0;
var bulletstext = document.getElementById("bullets");
var clickStr = 1;
var clickCost = 100;
var gunPrice = 10;
var gunTotal = 0;
var gunBPS = 1;
var powergunPrice = 100;
var powergunTotal = 0;
var powergunBPS = 5;
var riflePrice = 1000;
var rifleTotal = 0;
var rifleBPS = 25;
var gunUpgrade1 = false
	
function addBullets() { //function for clicking
	bullets = bullets + clickStr;
	//console.log(getCookie("bullets"))l;
	document.getElementById("bullets").innerHTML = bullets.toFixed(1) + ' Bullets';
}

function buyGun() { //function for buying more guns
	if(bullets >= gunPrice) {
		bullets = bullets - gunPrice;
		gunTotal = gunTotal + 1;
		gunPrice = Math.ceil(10 * 1.10**gunTotal);
		document.getElementById("gun").innerHTML = 'Buy a Gun for ' + gunPrice + ' Bullets';
		document.getElementById("gunAmmount").innerHTML = 'You have ' + gunTotal + ' Gun';
		document.getElementById("gunProduce").innerHTML = 'Shooting ' + (gunBPS * gunTotal).toFixed(1) + ' bullets per second';
	}
}

function buyPowerGun() { //function for buying more guns
	if(bullets >= powergunPrice) {
		bullets = bullets - powergunPrice;
		powergunTotal = powergunTotal + 1;
		powergunPrice = Math.ceil(100 * 1.20**powergunTotal);
		document.getElementById("powergun").innerHTML = 'Buy a Power Gun for ' + powergunPrice + ' Bullets';
		document.getElementById("powergunAmmount").innerHTML = 'You have ' + powergunTotal + ' Power Guns';
		document.getElementById("powergunProduce").innerHTML = 'Shooting ' + (powergunBPS * powergunTotal).toFixed(1) + ' bullets per second';
	}
}

function buyNicole() {
	if(points >=nicolePrice) {
		points = points - nicolePrice;
		nicoleTotal = nicoleTotal + 1;
		nicolePrice = Math.ceil(1100 * 1.19**nicoleTotal);
		document.getElementById("nicole").innerHTML = 'Buy a Nicole for ' + nicolePrice + ' Lines of code';
		document.getElementById("nicoleAmmount").innerHTML = 'you have ' + nicoleTotal + ' Nicoles';
		document.getElementById("nicoleProduce").innerHTML = 'Writing ' + (nicoleLPS * nicoleTotal).toFixed(1) + ' Lines of code per second';
	}
}

window.setInterval(function() { //Adds together all the Bullets and then updates the elements in the HTML
	  bullets = (bullets + (gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (nicoleTotal * nicoleLPS));
		totalLPS = ((gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (nicoleLPS * nicoleTotal));
		document.getElementById("bulletspersec").innerHTML = totalBPS.toFixed(1) + ' Bullets per second'
		document.getElementById("bullets").innerHTML = points.toFixed(1) + ' Bullets';
		document.cookie = "bullets=" + bullets.toFixed(1);
}, 1000); // dont change this to anything other than 1000 lol

window.setInterval(function() {
	document.getElementById("bullets").innerHTML = bullets.toFixed(1) + ' Bullets';
}, refreshRateVar);


/*
----This section represents the Upgrades page of the javascript----
*/
function checkUpgrades() {
	console.log(davidredbullUpgrade);
	if(davidTotal >= 1 && davidredbullUpgrade != true) {
		var davidredbullElements = document.getElementsByClassName("davidRedbull");
		for (i = 0; i < davidredbullElements.length; i++){
			davidredbullElements[i].style.display = "inline";
		}
	}
}

function davidRedBull() {
	var davidredbullCost = 100
	if(points >= davidredbullCost) {
		points = points - davidredbullCost;
		davidredbull = true;
		localStorage.setItem("davidredbull", true);
		davidLPS = davidLPS * 2;
		var davidredbullElements = document.getElementsByClassName("davidRedbull");
		for (i = 0; i < davidredbullElements.length; i++){
			davidredbullElements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (points >= clickCost) {
		points = points - clickCost;
		clickStr = clickStr + 1;
		clickCost = clickCost*2.75;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("clickCost", clickCost);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + clickCost.toFixed(1);
	}
}
