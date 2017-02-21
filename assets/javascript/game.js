var classArray = ["healer", "warrior", "mage"];
var healer = {
	hp: 200,
	mp: 200,
	heal: 50,
	attack: 1,
	armor: 0,
}
var warrior = {
	hp: 450,
	attack: 20,
	armor: 10,
}
var mage = {
	hp: 200,
	mp: 200,
	fire: 50,
	attack: 1,
	armor: 0,
}
var enemy = {
	hp: 600,
	attack:100,
	armor:10,
}
var delay = 1000;
// JavaScript function that wraps everything
$(document).ready(function() {
	//Return functions for all characters after they use a command
	function healerReturn() {
		$("#healer").attr("src","assets/images/healer.stand.gif")
	}
	function warriorReturn() {
		$("#warrior").attr("src","assets/images/warrior.stand.gif")
	}
	function mageReturn() {
		$("#mage").attr("src","assets/images/mage.stand.gif")
	}
	function healerButton() {
		$(".healerAction").removeAttr("disabled")
	}
	function warriorButton() {
		$(".warriorAction").removeAttr("disabled")
	}
	function mageButton() {
		$(".mageAction").removeAttr("disabled")
	}
	function healerSpeedReturn() {
		$("#healerSpeed").removeAttr("class")
	}
	function warriorSpeedReturn() {
		$("#warriorSpeed").removeAttr("class")
	}	
	function mageSpeedReturn() {
		$("#mageSpeed").removeAttr("class")
	}		

	//link hp, MP , armor to HTML
	$("#healerHpBar").html(healer.hp);
	$("#healerMpBar").html(healer.mp);
	$("#healerArmor").html(healer.armor);
	$("#warriorHpBar").html(warrior.hp);		
	$("#warriorArmor").html(warrior.armor);
	$("#mageHpBar").html(mage.hp);
	$("#mageMpBar").html(mage.mp);
	$("#mageArmor").html(mage.armor);
	$("#enemyHpBar").html(enemy.hp);
	function refresh() {
		$("#healerHpBar").html(healer.hp);
		$("#healerMpBar").html(healer.mp);
		$("#healerArmor").html(healer.armor);
		$("#warriorHpBar").html(warrior.hp);
		$("#warriorArmor").html(warrior.armor);
		$("#mageHpBar").html(mage.hp);
		$("#mageMpBar").html(mage.mp);
		$("#mageArmor").html(mage.armor);
		$("#enemyHpBar").html(enemy.hp);
	}
	//Healer command starts here
	$(document).on("click","button", function() {
		if ($(this).hasClass("healer-attack")) {
			$("#healerSpeed").toggleClass("healerSpeed");
			$(".healerAction").attr("disabled","disabled");
			$("#healer").attr("src","assets/images/healer.attack.gif");
			enemy.hp -= healer.attack;
			console.log(enemy.hp);
			setTimeout(healerReturn, 1000);
			setTimeout(healerButton, 10000);
			setTimeout(healerSpeedReturn, 10000);
			refresh();
		}
		else if ($(this).hasClass("healer-magic")) {
			$("#healerSpeed").toggleClass("healerSpeed");
			if(healer.mp > 0) {
			healer.hp += 100;
			warrior.hp += 100;
			mage.hp += 100;
			healer.mp -= 50;
			$("#healer").attr("src","assets/images/healer.cast.spell.gif")
			console.log(healer.hp + " healer hp");
			console.log(warrior.hp + " warrior hp");
			console.log(mage.hp + " mage hp");
			console.log(healer.mp + " healer mp");
			setTimeout(healerReturn, 1500);
			$(".healerAction").attr("disabled","disabled");
			setTimeout(healerButton, 10000);
			setTimeout(healerSpeedReturn, 10000);
			}
			refresh();
		}
		else if ($(this).hasClass("healer-guard")) {
			healer.armor += 2;
			healer.mp += 25;
			$("#healerSpeed").toggleClass("healerSpeed");
			console.log(healer.armor + " healer armor");
			console.log(healer.mp + " healer mp");
			$(".healerAction").attr("disabled","disabled");
			setTimeout(healerButton, 10000);
			setTimeout(healerSpeedReturn, 10000);
			refresh();
		}
	})
	//healer command Ends
	//warrior command starts here
	$(document).on("click","button", function() {
		if ($(this).hasClass("warrior-attack")) {
			$("#warriorSpeed").toggleClass("warriorSpeed");
			$(".warriorAction").attr("disabled","disabled");
			$("#warrior").attr("src","assets/images/warrior.attack.gif")
			enemy.hp -= warrior.attack;
			console.log(enemy.hp);
			setTimeout(warriorReturn, 1000);
			setTimeout(warriorButton, 7000);
			setTimeout(warriorSpeedReturn, 7000);
			refresh();
		}
		else if ($(this).hasClass("warrior-guard")) {
			$("#warriorSpeed").toggleClass("warriorSpeed");
			$(".warriorAction").attr("disabled","disabled");
			warrior.armor += 2;
			console.log(warrior.armor + " warrior armor");
			setTimeout(warriorButton, 7000);
			setTimeout(warriorSpeedReturn, 7000);
			refresh();
		}

	})
	//warrior command ends
	//mage command starts here
	$(document).on("click","button", function() {
		if ($(this).hasClass("mage-attack")) {
			$("#mageSpeed").toggleClass("mageSpeed");
			$(".mageAction").attr("disabled","disabled");
			$("#mage").attr("src","assets/images/mage.attack.gif")
			enemy.hp -= mage.attack;
			console.log(enemy.hp);
			setTimeout(mageReturn, 1000);
			setTimeout(mageButton, 8000);
			setTimeout(mageSpeedReturn, 8000);
			refresh();
		}
		else if ($(this).hasClass("mage-magic")) {
			if (mage.mp > 0) {
				$("#mageSpeed").toggleClass("mageSpeed");
				$(".mageAction").attr("disabled","disabled");
				enemy.hp -= mage.fire
				mage.mp -= 50;
				console.log(enemy.hp + " enemy hp")
				console.log(mage.mp + " mage mp")
				$("#mage").attr("src","assets/images/mage.cast.gif")
				setTimeout(mageReturn, 1500);
				refresh();
				setTimeout(mageButton, 8000);
				setTimeout(mageSpeedReturn, 8000);
			}
		}
		else if ($(this).hasClass("mage-guard")) {
			$("#mageSpeed").toggleClass("mageSpeed");
			$(".mageAction").attr("disabled","disabled");
			mage.armor += 2;
			mage.mp += 25;
			console.log(mage.armor + " mage armor");
			console.log(mage.mp + " mage mp")
			refresh();
			setTimeout(mageButton, 8000);
			setTimeout(mageSpeedReturn, 8000);
		}
	})
	//mage commands ends
	//enemy command starts	
	function enemyAttack() {
		var randomAttack = classArray[Math.floor(Math.random() * classArray.length)];
		console.log(randomAttack);
		if (randomAttack == "warrior") {
			warrior.hp -= enemy.attack;
			refresh();
			if (warrior.hp <= 0) {
				var i = classArray.indexOf("warrior"); //this will stop the enemy from attacking a dead body
				if (i != -1){
					classArray.splice(i,1);
				}
				$(".warriorAction").attr("disabled","disabled");
				$("#warrior").attr("src","assets/images/stone.png");
			}
		}
		else if (randomAttack == "healer") {
			healer.hp -= enemy.attack;
			refresh();
			if (healer.hp <= 0) {
				var i = classArray.indexOf("healer"); //this will stop the enemy from attacking a dead body
				if (i != -1){
					classArray.splice(i,1);
				}
				$(".healerAction").attr("disabled","disabled");
				$("#healer").attr("src","assets/images/stone.png");
			}
		}
		else if (randomAttack == "mage") {
			mage.hp -= enemy.attack;
			refresh();
			if (mage.hp <= 0) {
				var i = classArray.indexOf("mage"); //this will stop the enemy from attacking a dead body
				if (i != -1){
					classArray.splice(i,1);
				}
				$(".mageAction").attr("disabled","disabled");
				$("#mage").attr("src","assets/images/stone.png");
			}
		}	
	}
	setInterval(enemyAttack, 8000);
	//enemy command ends

	//Game victory or lost criteria

})