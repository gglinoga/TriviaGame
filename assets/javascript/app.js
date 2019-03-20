$(document).ready(function () {
    let got = {
        numRight: 0,
        numWrong: 0,
        numUnA: 0,
        currentQ: "",
        currentA: "",
        buttonsExist: 0,
        questions: [{
                q: "question1 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question2 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question3 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question4 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question5 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question6 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question7 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },
            {
                q: "question8 goes here",
                c: ["sample choice one", "sample choice two", "sample choice three", "sample choice four"],
                a: 1
            },

        ],

        startup: function () {
            $("#startbutton").remove();
            numRight = 0;
            numWrong = 0;
            numUnA = 0;
            currentQ = "update to 1st Q";
            currentA = "update to 1st A";
            if (got.buttonsExist === 0) {
                var timer = $("<div id='timer' class='card-body'</div>");
                $("#anchor").append(timer);
                $("#timer").html("00:00");
                var question = $("<div id='question' class='card-body'</div>");
                $("#timer").append(question);
                $("#question").html("1st Question");
                var choice1 = $("<br> <div id='choice1' class='btn btn-primary btn-lg'>choice1</div>");
                $("#question").append(choice1);
                var choice2 = $("<br> <div id='choice2' class='btn btn-primary btn-lg'>choice1</div>");
                $("#question").append(choice2);
                var choice3 = $("<br> <div id='choice3' class='btn btn-primary btn-lg'>choice1</div>");
                $("#question").append(choice3);
                var choice4 = $("<br> <div id='choice4' class='btn btn-primary btn-lg'>choice1</div>");
                $("#question").append(choice4);
                
                // $("#choice1").text(choice1);
                ////make buttons/divs
                buttonsExist = 1;
            }
        },

        // qUpdate: function () {
        //     //timers go in here
        //     for (var i = 0; i < questions.length; i++) {

        //     }
        // }

    } ///end of got object

    ///start button
    $("#startbutton").on("click", function () {
        got.startup();
    })

}) /////// ready wrapper