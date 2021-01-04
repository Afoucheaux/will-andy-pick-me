 var answerArray = [
   "It is certain",
   "It is decidedly so",
   "Without a doubt",
   "Yes - definitely",
   "You may rely on it",
   "As I see it, yes",
   "Most likely",
   "Outlook good",
   "Yes",
   "Signs point to yes",
   "Reply hazy, try again",
   "Ask again later",
   "Better not tell you now",
   "Cannot predict now",
   "Concentrate and ask again",
   "Don't count on it",
   "My reply is no",
   "My sources say no",
   "Outlook not so good",
   "Very doubtful"
 ];
 
element = document.querySelector(selectors);
var question = document.querySelector("#your-question");
var answerButton = document.querySelector("#get-answer");
var clearButton = document.querySelector(".clear");
var eightBallImg = document.querySelector("#eight-ball");

answerButton.addEventListener("click", getAnswer);

function hide(element) {
  element.classList.add('hidden');
}

function getAnswer() {
  event.preventDefault();
  hide(eightBallImg);

}
