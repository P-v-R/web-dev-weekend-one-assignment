"use strict";
/** Emoji Race
 *
 * Two emojis race one another when "Start Race" button clicked
 * The first emoji to reach the finish line wins!
 *
 * The amount of steps a contestant takes when racing is random
 * The location of the finish line is determined by the window size
 */

// DO NOT CHANGE THESE VARIABLES
const FINISH_LINE_OFFSET = 200;
const TIME_BETWEEN_STEPS_MS = 100;
const MIN_STEPS = 5;
const MAX_STEPS = 20;

const finishLine = document.getElementById("finish-line");
const raceTrack = document.getElementById("race-track");

let raceTrackWidth = raceTrack.offsetWidth;
let finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;


  //  each instance of race should have the following properties:
  //  - contestants: two seperate instances of contensant class
  //  - raceWinner: the winner of the race {}
  //  - raceTimerId: a setIntervalID that will be used to clear timer 

class Race {

  constructor(c1, c2) {
    this.contestants = [c1, c2];
    this.raceWinner;
    this.raceTimerID;
  }

  startRace() {
    // assigns raceTimerID to begin race(racing function) until a winner is determined.
    this.raceTimerID = setInterval(this.racing, TIME_BETWEEN_STEPS_MS)
    console.log("race started")
  }
  
  racing = () => {

    /* first checks if anyone has passed finish line, if yes alert user, end race and return
     winning contestant, if not, move both contestants up a randomly intervaled step */

    if (this.checkForWinner()) {
      console.log("assigning winner");
      this.raceWinner = this.checkForWinner();
      return this.endRace();
    } else {
      this.contestants[0].move();
      this.contestants[1].move();
    }
  }
  /* checks for and returns winning contestant */
  checkForWinner = () => {
    console.log("check for winner is being called")
    const [c1, c2] = this.contestants;

    // have a winner if a contestant's stepsTaken is >= the finish line location
    const haveWinner = (
      c1.stepsTaken >= finishLineLocation ||
      c2.stepsTaken >= finishLineLocation);
    console.log(haveWinner);

    if (haveWinner && c1.stepsTaken >= c2.stepsTaken) {
      return c1;
    } else if (haveWinner) {
      return c2;
    }
  }
  /* when winner is determined, stop moving contestants and call announceWinner fuction */
  endRace = () => {
    clearInterval(this.raceTimerID);
    this.announceWinner(this.raceWinner)
  }

  /* pops up an alert stating the race winner and their total steps */
  announceWinner = (contestant) => {
    console.log("this for annWin -", this)
    setTimeout(alert(`We have a winner! ${this.raceWinner.emoji} with ${this.raceWinner.stepsTaken.toFixed(0)} total steps!`))
  }
}

/* blueprint for contestants for race, identified by an emoji, tracks location on html, and total steps */
class Contestant {
  constructor(emoji, htmlLocation, htmlStepDisplay) {
    this.emoji = emoji;
    this.htmlLocation = htmlLocation;
    this.htmlStepDisplay = htmlStepDisplay;
    this.stepsTaken = 0;

    htmlLocation.innerText = emoji;
    this.updateHtmlSteps();
  }

  /* move: makes contestant take a random number of steps (pixels). */
  move = () => {

    this.stepsTaken += this.randomSteps()
    /* updates display, both emoji position and total steps */
    this.htmlLocation.style.left = `${this.stepsTaken}px`;
    this.updateHtmlSteps();
  }

  /* returns a random number to be sent to contestants move function */
  randomSteps() {
    return Math.random() * (MAX_STEPS - MIN_STEPS) + MIN_STEPS;
  }

  /* update a contestant's steps displayed in DOM */
  updateHtmlSteps() {
    this.htmlStepDisplay.innerText = `${this.emoji} steps: ${this.stepsTaken.toFixed(0)}`;
  }
}
  /* when start button is clicked a new instance of Race class is called */
function handleStartBtn() {
  const race = new Race(c1, c2);
  race.startRace();
}

/* sets up racetrack and keeps its sizing proportionate to screen  */
function main() {
  
  // default position of html finish line- 200px before end of race track
  finishLine.style.left = `${finishLineLocation}px`;

  // updates position of html finish line when window resized
  window.addEventListener("resize", () => {
    raceTrackWidth = raceTrack.offsetWidth;
    finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;
    finishLine.style.left = `${finishLineLocation}px`;
  });

  // create and start a new race
  document.getElementById("start-race").addEventListener("click", handleStartBtn);
}

// DO NOT CHANGE ANY CODE BELOW THIS LINE
// this code has been moved outside of start() so Contestant instance
// methods can be tested in the console.

const c1HtmlLocation = document.getElementById("contestant-1");
const c2HtmlLocation = document.getElementById("contestant-2");

const c1HtmlStepDisplay = document.getElementById("contestant-1-steps");
const c2HtmlStepDisplay = document.getElementById("contestant-2-steps");

const c1 = new Contestant("🦧", c1HtmlLocation, c1HtmlStepDisplay);
const c2 = new Contestant("🚣‍♀️", c2HtmlLocation, c2HtmlStepDisplay);

main();
