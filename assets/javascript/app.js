$(document).ready(function () {
    let got = {
        numRight: 0,
        numWrong: 0,
        numUnA: 0,
        currentA: 4,
        buttonsExist: 0,
        i: 0,
        questions: [{
                q: "Hodor is..?",
                c: ["alive", "dead", "still holding the door", "at the Wall"],
                a: 1
            },
            {
                q: "The seat of the Lannister's power is in..?",
                c: ["Highgarden", "Summerfell", "Casterly Rock", "Winterfell"],
                a: 2
            },
            {
                q: "Winter is..?",
                c: ["coming", "going", "cold", "ice"],
                a: 0
            },
            {
                q: "Which dragon did the Night King turn?",
                c: ["Drogon", "Raeghal", "Viserion", "Puff"],
                a: 2
            },
            {
                q: "Valar Morghulis means..?",
                c: ["praise the old gods", "don't catch your eggs before they hatch", "always pay your debts", "all men must die"],
                a: 3
            },
            {
                q: "The Stark sigil bears this animal:",
                c: ["direwolf", "lion", "fish", "bear"],
                a: 0
            },
            {
                q: "Along with Valyrian steel, this can slay a white walker...",
                c: ["sunlight", "dragon glass", "harsh language", "fire"],
                a: 1
            },
            {
                q: "What is the punishment for deserting the Night's Watch?",
                c: ["lose a hand", "prison", "exile", "death"],
                a: 3
            },

        ],

        startup: function () {
            console.log("startup")
            $("#right").remove();
            $("#wrong").remove();
            $("#startbutton").remove();
            this.numRight = 0;
            this.numWrong = 0;
            this.numUnA = 0;
            this.i = 0;
            if (this.buttonsExist === 0) {
                var question = $("<div id='question' class='card-body'></div>");
                $("#anchor").append(question);
                console.log('help');
                $("#question").html("1st Question");
                var c0 = $("<div id='choice0'>choice0</div>");
                $("#anchor").append(c0);
                var c1 = $("<div id='choice1'>choice1</div>");
                $("#anchor").append(c1);
                var c2 = $("<div id='choice2'>choice2</div>");
                $("#anchor").append(c2);
                var c3 = $("<div id='choice3'>choice3</div>");
                $("#anchor").append(c3);
                got.game();
                this.buttonsExist = 1;
            }
        },

        game: function () {
            console.log("index " + this.i);
            $("#question").html(this.questions[this.i].q);
            $("#choice0").html(this.questions[this.i].c[0]);
            $("#choice1").html(this.questions[this.i].c[1]);
            $("#choice2").html(this.questions[this.i].c[2]);
            $("#choice3").html(this.questions[this.i].c[3]);

            var time = 30;
            var clockRunning = false;
            if (!clockRunning) {
                intervalId = setInterval(count, 1000);
                clockRunning = true;
            }

            function count() {
                time--;
                console.log(time)
                $("#timer").html(time);
                if (time <= 0) {
                    console.log("time is up")
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

        button: function (z) {
            this.currentA = z;
            if (this.currentA === this.questions[this.i].a) {
                alert("correct")
                this.numRight++;
            } else {
                alert("incorrect")
                this.numWrong++;
            }
            got.stop();
            got.clockreset();
            this.i++;
            if (this.i < 8) {
                got.game();
            } else {
                console.log("answer gameover")
                got.gameover();
            }
        },

        timeover: function () {
            this.numUnA++;
            this.i++;
            if (this.i < 8) {
                this.game();
            } else {
                console.log("timeover gameover")
                got.gameover();
            }
        },

        gameover: function () {
            console.log("Number right = " + this.numRight + "    Number wrong = " + this.numWrong + "    Number Unaswered = " + this.numUnA)
            $("#question").remove();
            $("#choice0").remove();
            $("#choice1").remove();
            $("#choice2").remove();
            $("#choice3").remove();
            var right = $("<div id='right'class='card-body'></div>");
            $("#anchor").append(right);
            $("#right").html("Number Correct: " + this.numRight);
            var wrong = $("<div id='wrong' class='card-body'></div>");
            $("#anchor").append(wrong);
            $("#wrong").html("Number Incorrect: " + this.numWrong);
            this.buttonsExist=0;
            this.startup()
            // setTimeout(this.startup, 5000);    ///index is being read before it resets at the start of the this.startup.
        }

    } ///end of got object
    $("#startbutton").on("click", function () {
        got.startup();
    })
    $("body").on("click", "div#choice0", function () {
        got.button(0);
    })
    $("body").on("click", "div#choice1", function () {
        got.button(1);
    })
    $("body").on("click", "div#choice2", function () {
        got.button(2);
    })
    $("body").on("click", "div#choice3", function () {
        got.button(3);
    })

}) /////// ready wrapper