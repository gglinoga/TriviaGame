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
            $("#rightH").remove();
            $("#right").remove();
            $("#wrongH").remove();
            $("#wrong").remove();
            $("#startbutton").remove();
            this.numRight = 0;
            this.numWrong = 0;
            this.numUnA = 0;
            this.i = 0;
            if (got.buttonsExist === 0) {
                var question = $("<div id='question' class='card-body'></div>");
                $("#anchor").append(question);
                $("#question").html("1st Question");
                var c0 = $("<br> <div id='choice0' class='btn btn-primary btn-lg'>choice0</div>");
                $("#anchor").append(c0);
                var c1 = $("<br> <div id='choice1' class='btn btn-primary btn-lg'>choice1</div>");
                $("#anchor").append(c1);
                var c2 = $("<br> <div id='choice2' class='btn btn-primary btn-lg'>choice2</div>");
                $("#anchor").append(c2);
                var c3 = $("<br> <div id='choice3' class='btn btn-primary btn-lg'>choice3</div>");
                $("#anchor").append(c3);
                got.game();
                buttonsExist = 1;
            }
        },

        game: function () {
            $("#question").html(this.questions[this.i].q);
            $("#choice0").html(this.questions[this.i].c[0]);
            $("#choice1").html(this.questions[this.i].c[1]);
            $("#choice2").html(this.questions[this.i].c[2]);
            $("#choice3").html(this.questions[this.i].c[3]);

            var time = 30;
            var clockRunning = true;
            if (!clockRunning) {
                console.log("start time!")
                intervalId = setInterval(count, 1000);
                clockRunning = true;
            }

            function count() {
                time--;
                console.log(time)
                $("#timer").html(time);
                if (time <= 0) {
                    console.log("time is up")
                    stop();
                    clockreset();
                    got.timeover();
                    // got.timeover()
                    // } else if (this.currentA == this.questions[this.i].a) {
                    //     alert("correct!");
                }
            }

            function clockreset() {
                time = 30;
                $("#timer").html(time);
            }

            function stop() {
                clearInterval(intervalId);
                clockRunning = false;
            }

        },

        ///timer in here, 30s
        // update q, update a, update choices
        //end for
        //if timer runs out, incorrect, delay 5s
        //if choice = a, correct, delay 5s
        //if choice != a, incorrect, delay 5s
        button: function (z) {
            this.currentA = z;
            if (this.currentA === this.questions[this.i].a) {
                alert("correct")
                this.numRight++;
            } else {
                alert("incorrect")
                this.numWrong++;
            }
            this.i++;
            if (this.i<8){
            got.game();
            }
            else {
                got.gameover();
                alert("Number right = " + this.numRight + "    Number wrong = " + this.numWrong)
            }
        },

        timeover: function () {
            // alert("time is over");
            this.numUnA++;
            console.log("unaswered = " + this.numUnA);
            this.game();
        },

        gameover: function () {
            $("#question").remove();
            $("#choice0").remove();
            $("#choice1").remove();
            $("#choice2").remove();
            $("#choice3").remove();
            var rightH = $("<div id='rightH'class='card-header'>Correct:</div>");
            $("anchor").append(rightH)
            var right = $("<div id='right'class='card-body'></div>");
            $("#anchor").append(right);
            $("#right").html(this.numRight);
            var wrongH = $("<div id='wrongH'class='card-header'>Incorrect:</div>");
            $("anchor").append(wrongH)
            var wrong = $("<div id='wrong' class='card-body'></div>");
            $("#anchor").append(wrong);
            $("#wrong").html(this.numWrong);
            
            this.startup();
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