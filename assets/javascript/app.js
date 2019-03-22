$(document).ready(function () {
	let got = {
		allowClick: true,
		numRight: 0,
		numWrong: 0,
		numUnA: 0,
		currentA: 4,
		buttonsExist: 0,
		i: 0,
		questions: [{
			q: "Hodor is...",
			c: ["alive", "dead", "still holding the door", "at the Wall"],
			a: 1
		}, {
			q: "The seat of the Lannister's power is in...",
			c: ["Highgarden", "Summerfell", "Casterly Rock", "Winterfell"],
			a: 2
		}, {
			q: "Winter is...",
			c: ["coming", "going", "cold", "ice"],
			a: 0
		}, {
			q: "Which dragon did the Night King turn to undead?",
			c: ["Drogon", "Raeghal", "Viserion", "Puff"],
			a: 2
		}, {
			q: "Valar Morghulis means...?",
			c: ["praise the old gods", "don't catch your eggs before they hatch", "always pay your debts", "all men must die"],
			a: 3
		}, {
			q: "The Stark sigil bears this animal:",
			c: ["direwolf", "lion", "fish", "bear"],
			a: 0
		}, {
			q: "Along with Valyrian steel, this can slay a white walker...",
			c: ["sunlight", "dragon glass", "harsh language", "fire"],
			a: 1
		}, {
			q: "What is the punishment for deserting the Night's Watch?",
			c: ["lose a hand", "prison", "exile", "death"],
			a: 3
		}, ],
		startup: function () {
			let audio = new Audio('assets/sounds/click.mp3');
			audio.play();
			let audio2 = new Audio('assets/sounds/got.mp3');
			audio2.play();
			$("#restart").remove();
			$("#right").remove();
			$("#wrong").remove();
			$("#noA").remove();
			$("#startbutton").remove();
			this.numRight = 0;
			this.numWrong = 0;
			this.numUnA = 0;
			got.i = 0;
			// if (this.buttonsExist === 0) {
			var question = $("<div id='question' class='card-body'></div>");
			$("#anchor").append(question);
			$("#question").html("1st Question");
			var c0 = $("<div id='choice0' class='btn'>choice0</div>");
			$("#anchor").append(c0);
			var c1 = $("<div id='choice1' class='btn'>choice1</div>");
			$("#anchor").append(c1);
			var c2 = $("<div id='choice2' class='btn'>choice2</div>");
			$("#anchor").append(c2);
			var c3 = $("<div id='choice3' class='btn'>choice3</div>");
			$("#anchor").append(c3);
			got.game();
			//     this.buttonsExist = 1;
			// }
		},
		game: function () {
			$("#question").html(got.questions[got.i].q);
			$("#choice0").html(got.questions[got.i].c[0]);
			$("#choice1").html(got.questions[got.i].c[1]);
			$("#choice2").html(got.questions[got.i].c[2]);
			$("#choice3").html(got.questions[got.i].c[3]);
			var time = 30;
			var clockRunning = false;
			if (!clockRunning) {
				intervalId = setInterval(count, 1000);
				clockRunning = true;
			}

			function count() {
				time--;
				$("#timer").html(time);
				if (time <= 0) {
					got.stop();
					got.clockreset();
					got.timeover();
				}
			}
		},
		clockreset: function () {
			time = 30;
			$("#timer").html(time);
		},
		stop: function () {
			clearInterval(intervalId);
			clockRunning = false;
		},
		correct: function () {
			let audio = new Audio('assets/sounds/win.mp3');
			audio.play();
			$("#question").html("Correct!");
		},
		incorrect: function () {
			let audio = new Audio('assets/sounds/buzzer.mp3');
			audio.play();
			var correctAnswer = this.questions[this.i].a;
			$("#question").html("Incorrect!  The correct answer is: " + this.questions[this.i].c[correctAnswer])
		},
		button: function (z) {
			this.currentA = z;
			if (this.currentA === this.questions[this.i].a) {
				got.correct();
				this.numRight++;
			} else {
				got.incorrect();
				this.numWrong++;
			}
			got.stop();
			got.clockreset();
			this.i++;
			if (this.i < 8) {
				setTimeout(got.game, 5000);
			} else {
				got.stop();
				setTimeout(got.gameover, 5000);
			}
		},
		timeover: function () {
			this.numUnA++;
			this.i++;
			if (this.i < 8) {
				this.game();
			} else {
				got.gameover();
			}
		},

		clicker: function () {
			got.allowClick = true;
		},

		gameover: function () {
			let audio = new Audio('assets/sounds/win.mp3');
			audio.play();
			$("#question").remove();
			$("#choice0").remove();
			$("#choice1").remove();
			$("#choice2").remove();
			$("#choice3").remove();
			var right = $("<div id='right'class='card-body'></div>");
			$("#anchor").append(right);
			$("#right").html("Number Correct: " + got.numRight);
			var wrong = $("<div id='wrong' class='card-body'></div>");
			$("#anchor").append(wrong);
			$("#wrong").html("Number Incorrect: " + got.numWrong);
			var noA = $("<div id='noA' class='card-body'></div>");
			$("#anchor").append(noA);
			$("#noA").html("Number Unanswered: " + got.numUnA);
			var restart = $("<button id='restart'class='btn'>Restart</button>")
			$("#anchor").append(restart);
			// this.startup()
			// setTimeout(this.startup, 5000);    ///index is being read before it resets at the start of the this.startup.
		}
	} ///end of got object
	$("#startbutton").on("click", function () {
		got.startup();
	})
	$("body").on("click", "div#choice0", function () {
		if (got.allowClick === true) {
			got.allowClick = false
			got.button(0);
			setTimeout(got.clicker, 5000);
			console.log(got.allowClick)
		}
	})
	$("body").on("click", "div#choice1", function () {
		if (got.allowClick === true) {
			got.allowClick = false
			got.button(1);
			setTimeout(got.clicker, 5000);
			console.log(got.allowClick)
		}
	})
	$("body").on("click", "div#choice2", function () {
		if (got.allowClick === true) {
			got.allowClick = false
			got.button(2);
			setTimeout(got.clicker, 5000);
			console.log(got.allowClick)
		}
	})
	$("body").on("click", "div#choice3", function () {
		if (got.allowClick === true) {
			got.allowClick = false
			got.button(3);
			setTimeout(got.clicker, 5000);
			console.log(got.allowClick)
		}
	})
	$("body").on("click", "button#restart", function () {
		got.startup();
	})
}) /////// ready wrapper