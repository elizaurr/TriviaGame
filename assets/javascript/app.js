$( document ).ready(function() {
  console.log("ready!");

  var sportOne = {
    question: 'Who said "Baseball is 90% mental. The other half is physical"?',
    choice1: 'Yogi Berra',
    choice2: 'David Ortiz',
    choice3: 'Derek Jeter',
    Choice4: 'Babe Ruth',
    answer: 'Yogi Berra',
    info: "<img src='assets/images/yogi.jpg'>"
  };

  var sportTwo = {
    question: 'Who is the has the most championship in the NBA?',
    choice1: 'Kobe Bryant',
    choice2: 'Karl Malone',
    choice3: 'Patrick Ewing',
    Choice4: 'Bill Russell',
    answer: 'Bill Russell',
    info: "<img src='assets/images/russell.gif'>"
  };

  var sportThree = {
    question: 'Who holds the record for the most goals in the NHL playoffs in one season?',
    choice1: 'Alex Ovechkin',
    choice2: 'Sidney Crobsy',
    choice3: 'Jaromir Jagr',
    Choice4: 'Wayne Gretzky',
    answer: 'Wayne Gretzky',
    info: "<img src='assets/images/wayne.jpeg'>"
  };

  var sportFour = {
    question: 'What school has won the most consecutive NCAA Division 1 mens basketball championship?',
    choice1: 'UCLA',
    choice2: 'North Carolina',
    choice3: 'UCONN', 
    Choice4: 'Rutgers',
    answer: 'UCLA',
    info: "<img src='assets/images/ucla.jpeg'>"
  };

  var sportFive = {
    question: 'How many times did Michael Jordan win the NBA MVP award?',
    choice1: '1',
    choice2: '3',
    choice3: '5',
    Choice4: '6',
    answer: '5',
    info: "<img src='assets/images/mj.gif'>"
  };

  var sportSix = {
    question: 'Who has won the Heisman Trophy more than once?',
    choice1: 'Tim Teabow',
    choice2: 'Archie Griffin',
    choice3: 'Tim Brown',
    Choice4: 'Desmond Howard',
    answer: 'Archie Griffin',
    info: "<img src='assets/images/archie.jpg'>"
  };

  var sportSeven = {
    question: 'Who hold the all-time homerun record in the MLB?',
    choice1: 'Hank Arron',
    choice2: 'Ty Cobb',
    choice3: 'Barry Bonds',
    Choice4: 'Ken Griffey Jr.',
    answer: 'Barry Bonds'
    info: "<img src='assets/images/bonds,gif'>"
  };

  var sportEight = {
    question: 'Who is the all-time leading scorer in the NBA?',
    choice1: 'Walt Chamberlain',
    choice2: 'Michael Jordan', 
    choice3: 'Kobe Bryant',
    Choice4: 'Kareem Abdul-Jabbar',
    answer: 'Kareem Abdul-Jabbar',
    info: "<img src='assets/images/jabbar.jpeg'>"
  };

  var sportNine = {
    question: 'Who is the all-time leading rusher in the NFL?',
    choice1: 'Emmitt Smith',
    choice2: 'Walter Payton',
    choice3: 'Barry Sanders',
    Choice4: 'Curtis Martin',
    answer: 'Emmitt Smith',
    info: "<img src='assets/images/smith.gif'>"
  };

  var sportTen = {
    question: 'What pitcher has the most career wins in the MLB?',
    choice1: 'Cy Young',
    choice2: 'Randy Johnson',
    choice3: 'Sandy Koafax',
    Choice4: 'Pedro Martinez',
    answer: 'Cy Young',
    info: "<img src='assets/images/cy.jpeg'>"
  };

  var triviaQuestion = [sportOne,sportTwo,sportThree,sportFour,sportFive,sportSix,sportSeven,sportEight,sportNine,sportTen];


  var questions = [];

  var num =0;
  var time =30;
  var numberCorrect = 0;
  var numberWrong = 0;
  var numTimeout = 0;


  function nextquestion() {
    time = 30;
    counter = setInterval(increment, 1000);
    $(".timer").html("<h2>Time Remaining:" + time + "</h2>");
    $(".question").html(questions[num].question);
    $(".ans1").html(questions[num].choice1);
    $(".ans2").html(questions[num].choice2);
    $(".ans3").html(questions[num].choice3);
    $(".ans4").html(questions[num].choice4);
    $(".info").empty();
  };


  function increment() {
    time--
    $(".timer").html("<h2>Time Remaining; " + time + "</h2>")
    if (time ===0) {
      timeout();
      stop();
      $(".choice").empty();
    }
    else (time<10) {
      $(".timer").addClass("red");
      setTimeout(function(){$(".timer").removeClass("red")},500)
    };
  };


  function stop() {
    clearInterval(counter);
    num++;
    if (num=== questions.length) {
      setTimeout(endgame,5000);
    }
    else {
      setTimeout(nextquestion,5000);
    };
  };


  function correctanswer() {
    $(".question").html("<p>Correct</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };

  function wronganswer() {
    numberWrong++;
    $(".question").html("<p>Wrong! <br> The correct answer was: "+questions[num].answer+"</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };


  function timeout() {
    numTimeout++;
    $(".question").html("<p>Time's up! <br> The correct answer was: "+questions[num].answer+"</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };

  







});
