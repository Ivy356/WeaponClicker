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
var refreshRateVar = 100;
var gunPrice = 10;
var gunTotal = 0;
var gunBPS = 1;
var powergunPrice = 100;
var powergunTotal = 0;
var powergunBPS = 5;
var riflePrice = 1000;
var rifleTotal = 0;
var rifleBPS = 25;
var assaultriflePrice = 15000;
var assaultrifleTotal = 0;
var assaultrifleBPS = 150;
var smgPrice = 250000;
var smgTotal = 0;
var smgBPS = 1000;
var shotgunPrice = 5000000;
var shotgunTotal = 0;
var shotgunBPS = 10000;
var gunUpgrade1 = false;
var gunUpgrade2 = false;
var gunUpgrade3 = false;
var gunUpgrade4 = false;
var gunUpgrade5 = false;
var gunUpgrade6 = false
	
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
		document.getElementById("gunAmmount").innerHTML = 'You have ' + gunTotal + ' Guns';
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

function buyRifle() {
	if(bullets >= riflePrice) {
		bullets = bullets - riflePrice;
		rifleTotal = rifleTotal + 1;
		riflePrice = Math.ceil(1000 * 1.19**rifleTotal);
		document.getElementById("rifle").innerHTML = 'Buy a Rifle for ' + riflePrice + ' Bullets';
		document.getElementById("rifleAmmount").innerHTML = 'You have ' + rifleTotal + ' Rifles';
		document.getElementById("rifleProduce").innerHTML = 'Shooting ' + (rifleBPS * rifleTotal).toFixed(1) + ' bullets per second';
	}
}

function buyAssaultRifle() {
	if(bullets >= assaultriflePrice) {
		bullets = bullets - assaultriflePrice;
		assaultrifleTotal = assaultrifleTotal + 1;
		assaultriflePrice = Math.ceil(15000 * 1.18**assaultrifleTotal);
		document.getElementById("assaultrifle").innerHTML = 'Buy a Assault Rifle for ' + assaultriflePrice + ' Bullets';
		document.getElementById("assaultrifleAmmount").innerHTML = 'You have ' + assaultrifleTotal + ' Assault Rifles';
		document.getElementById("assaultrifleProduce").innerHTML = 'Shooting ' + (assaultrifleBPS * assaultrifleTotal).toFixed(1) + ' bullets per second';
	}
}

function buySMG() {
	if(bullets >= smgPrice) {
		bullets = bullets - smgPrice;
		smgTotal = smgTotal + 1;
		smgPrice = Math.ceil(250000 * 1.17**smgTotal);
		document.getElementById("smg").innerHTML = 'Buy a SMG for ' + smgPrice + ' Bullets';
		document.getElementById("smgAmmount").innerHTML = 'You have ' + smgTotal + ' SMGs';
		document.getElementById("smgProduce").innerHTML = 'Shooting ' + (smgBPS * smgTotal).toFixed(1) + ' bullets per second';
	}
}

function buyShotgun() {
	if(bullets >= shotgunPrice) {
		bullets = bullets - shotgunPrice;
		shotgunTotal = shotgunTotal + 1;
		shotgunPrice = Math.ceil(5000000 * 1.16**shotgunTotal);
		document.getElementById("shotgun").innerHTML = 'Buy a Shotgun for ' + shotgunPrice + ' Bullets';
		document.getElementById("shotgunAmmount").innerHTML = 'You have ' + shotgunTotal + ' Shotguns';
		document.getElementById("shotgunProduce").innerHTML = 'Shooting ' + (shotgunBPS * shotgunTotal).toFixed(1) + ' bullets per second';
	}
}

window.setInterval(function() { //Adds together all the Bullets and then updates the elements in the HTML
	  bullets = (bullets + (gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (rifleTotal * rifleBPS) + (assaultrifleTotal * assaultrifleBPS) + (smgTotal * smgBPS) + (shotgunTotal * shotgunBPS));
		totalBPS = ((gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (rifleTotal * rifleBPS) + (assaultrifleTotal * assaultrifleBPS) + (smgTotal * smgBPS) + (shotgunTotal * shotgunBPS));
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
	console.log(gunupgrade);
	if(gunTotal >= 1 && gunupgrade != true) {
		var gunupgradeElements = document.getElementsByClassName("gunupgrade");
		for (i = 0; i < gunupgradeElements.length; i++){
			gunupgradeElements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(gunupgrade2);
	if(gunTotal >= 1 && gunupgrade2 != true) {
		var gunupgrade2Elements = document.getElementsByClassName("gunupgrade2");
		for (i = 0; i < gunupgrade2Elements.length; i++){
			gunupgrade2Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(gunupgrade3);
	if(gunTotal >= 1 && gunupgrade3 != true) {
		var gunupgrade3Elements = document.getElementsByClassName("gunupgrade3");
		for (i = 0; i < gunupgrade3Elements.length; i++){
			gunupgrade3Elements[i].style.display = "inline";
		}
	}
}

function gunupgrade() {
	var gunupgradeCost = 100
	if(bullets >= gunupgradeCost) {
		bullets = bullets - gunupgradeCost;
		gunupgrade = true;
		localStorage.setItem("gunupgrade", true);
		gunBPS = gunBPS * 2;
		var gunupgradeElements = document.getElementsByClassName("gunupgrade");
		for (i = 0; i < gunupgradeElements.length; i++){
			gunupgradeElements[i].style.display = "none";
		}
	}
}

function gunupgrade2() {
	var gunupgrade2Cost = 1000
	if(bullets >= gunupgrade2Cost) {
		bullets = bullets - gunupgrade2Cost;
		gunupgrade2 = true;
		localStorage.setItem("gunupgrade2", true);
		gunBPS = gunBPS * 2;
		var gunupgrade2Elements = document.getElementsByClassName("gunupgrade2");
		for (i = 0; i < gunupgrade2Elements.length; i++){
			gunupgrade2Elements[i].style.display = "none";
		}
	}
}

function gunupgrade3() {
	var gunupgrade3Cost = 10000
	if(bullets >= gunupgrade3Cost) {
		bullets = bullets - gunupgrade3Cost;
		gunupgrade3 = true;
		localStorage.setItem("gunupgrade3", true);
		gunBPS = gunBPS * 2;
		var gunupgrade3Elements = document.getElementsByClassName("gunupgrade3");
		for (i = 0; i < gunupgrade3Elements.length; i++){
			gunupgrade3Elements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (bullets >= clickCost) {
		bullets = bullets - clickCost;
		clickStr = clickStr * 2;
		clickCost = clickCost*2.5;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("clickCost", clickCost);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + clickCost.toFixed(1);
	}
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}
