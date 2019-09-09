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
var scarPrice = 75000000;
var scarTotal = 0;
var scarBPS = 200000;
var gunUpgrade1 = false;
var gunUpgrade2 = false;
var gunUpgrade3 = false;
var gunUpgrade4 = false;
var gunUpgrade5 = false;
var gunUpgrade6 = false;
var powergunUpgrade = false;
var powergunUpgrade2 = false;
var powergunUpgrade3 = false;
var powergunUpgrade4 = false
	
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

function buySCAR() {
	if(bullets >= scarPrice) {
		bullets = bullets - scarPrice;
		scarTotal = scarTotal + 1;
		scarPrice = Math.ceil(75000000 * 1.15**scarTotal);
		document.getElementById("scar").innerHTML = 'Buy an SCAR for ' + scarPrice + ' Bullets';
		document.getElementById("scarAmmount").innerHTML = 'You have ' + scarTotal + ' SCARs';
		document.getElementById("scarProduce").innerHTML = 'Shooting ' + (scarBPS * scarTotal).toFixed(1) + ' bullets per second';
	}
}

window.setInterval(function() { //Adds together all the Bullets and then updates the elements in the HTML
	  bullets = (bullets + (gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (rifleTotal * rifleBPS) + (assaultrifleTotal * assaultrifleBPS) + (smgTotal * smgBPS) + (shotgunTotal * shotgunBPS) + (scarTotal * scarBPS));
		totalBPS = ((gunTotal * gunBPS) + (powergunTotal * powergunBPS) + (rifleTotal * rifleBPS) + (assaultrifleTotal * assaultrifleBPS) + (smgTotal * smgBPS) + (shotgunTotal * shotgunBPS) + (scarTotal * scarBPS));
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

function checkUpgrades() {
	console.log(gunupgrade4);
	if(gunTotal >= 1 && gunupgrade4 != true) {
		var gunupgrade4Elements = document.getElementsByClassName("gunupgrade4");
		for (i = 0; i < gunupgrade4Elements.length; i++){
			gunupgrade4Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(gunupgrade5);
	if(gunTotal >= 1 && gunupgrade5 != true) {
		var gunupgrade5Elements = document.getElementsByClassName("gunupgrade5");
		for (i = 0; i < gunupgrade5Elements.length; i++){
			gunupgrade5Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(gunupgrade6);
	if(gunTotal >= 1 && gunupgrade6 != true) {
		var gunupgrade6Elements = document.getElementsByClassName("gunupgrade6");
		for (i = 0; i < gunupgrade6Elements.length; i++){
			gunupgrade6Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(powergunupgrade);
	if(powergunTotal >= 1 && powergunupgrade != true) {
		var powergunupgradeElements = document.getElementsByClassName("powergunupgrade");
		for (i = 0; i < powergunupgradeElements.length; i++){
			powergunupgradeElements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(powergunupgrade2);
	if(powergunTotal >= 1 && powergunupgrade2 != true) {
		var powergunupgrade2Elements = document.getElementsByClassName("powergunupgrade2");
		for (i = 0; i < powergunupgrade2Elements.length; i++){
			powergunupgrade2Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(powergunupgrade3);
	if(powergunTotal >= 1 && powergunupgrade3 != true) {
		var powergunupgrade3Elements = document.getElementsByClassName("powergunupgrade3");
		for (i = 0; i < powergunupgrade3Elements.length; i++){
			powergunupgrade3Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(powergunupgrade4);
	if(powergunTotal >= 1 && powergunupgrade4 != true) {
		var powergunupgrade4Elements = document.getElementsByClassName("powergunupgrade4");
		for (i = 0; i < powergunupgrade4Elements.length; i++){
			powergunupgrade4Elements[i].style.display = "inline";
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

function gunupgrade4() {
	var gunupgrade4Cost = 200000
	if(bullets >= gunupgrade4Cost) {
		bullets = bullets - gunupgrade4Cost;
		gunupgrade4 = true;
		localStorage.setItem("gunupgrade4", true);
		gunBPS = gunBPS * 3;
		var gunupgrade4Elements = document.getElementsByClassName("gunupgrade4");
		for (i = 0; i < gunupgrade4Elements.length; i++){
			gunupgrade4Elements[i].style.display = "none";
		}
	}
}

function gunupgrade5() {
	var gunupgrade5Cost = 1000000
	if(bullets >= gunupgrade5Cost) {
		bullets = bullets - gunupgrade5Cost;
		gunupgrade5 = true;
		localStorage.setItem("gunupgrade5", true);
		gunBPS = gunBPS * 3;
		var gunupgrade5Elements = document.getElementsByClassName("gunupgrade5");
		for (i = 0; i < gunupgrade5Elements.length; i++){
			gunupgrade5Elements[i].style.display = "none";
		}
	}
}

function gunupgrade6() {
	var gunupgrade6Cost = 25000000
	if(bullets >= gunupgrade6Cost) {
		bullets = bullets - gunupgrade6Cost;
		gunupgrade6 = true;
		localStorage.setItem("gunupgrade6", true);
		gunBPS = gunBPS * 5;
		var gunupgrade6Elements = document.getElementsByClassName("gunupgrade6");
		for (i = 0; i < gunupgrade6Elements.length; i++){
			gunupgrade6Elements[i].style.display = "none";
		}
	}
}

function powergunupgrade() {
	var powergunupgradeCost = 500
	if(bullets >= powergunupgradeCost) {
		bullets = bullets - powergunupgradeCost;
		powergunupgrade = true;
		localStorage.setItem("powergunupgrade", true);
		powergunBPS = powergunBPS * 2;
		var powergunupgradeElements = document.getElementsByClassName("powergunupgrade");
		for (i = 0; i < powergunupgradeElements.length; i++){
			powergunupgradeElements[i].style.display = "none";
		}
	}
}

function powergunupgrade2() {
	var powergunupgrade2Cost = 2500
	if(bullets >= powergunupgrade2Cost) {
		bullets = bullets - powergunupgrade2Cost;
		powergunupgrade2 = true;
		localStorage.setItem("powergunupgrade2", true);
		powergunBPS = powergunBPS * 2;
		var powergunupgrade2Elements = document.getElementsByClassName("powergunupgrade2");
		for (i = 0; i < powergunupgrade2Elements.length; i++){
			powergunupgrade2Elements[i].style.display = "none";
		}
	}
}

function powergunupgrade3() {
	var powergunupgrade3Cost = 25000
	if(bullets >= powergunupgrade3Cost) {
		bullets = bullets - powergunupgrade3Cost;
		powergunupgrade3 = true;
		localStorage.setItem("powergunupgrade3", true);
		powergunBPS = powergunBPS * 2;
		var powergunupgrade3Elements = document.getElementsByClassName("powergunupgrade3");
		for (i = 0; i < powergunupgrade3Elements.length; i++){
			powergunupgrade3Elements[i].style.display = "none";
		}
	}
}

function powergunupgrade4() {
	var powergunupgrade4Cost = 500000
	if(bullets >= powergunupgrade4Cost) {
		bullets = bullets - powergunupgrade4Cost;
		powergunupgrade4 = true;
		localStorage.setItem("powergunupgrade4", true);
		powergunBPS = powergunBPS * 3;
		var powergunupgrade4Elements = document.getElementsByClassName("powergunupgrade4");
		for (i = 0; i < powergunupgrade4Elements.length; i++){
			powergunupgrade4Elements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (bullets >= clickCost) {
		bullets = bullets - clickCost;
		clickStr = clickStr * 2;
		clickStr = clickStr + 1;
		clickCost = clickCost *1.5;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("clickCost", clickCost);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + clickCost.toFixed(1);
	}
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}
