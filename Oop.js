// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.



function makeGame(upperbound){
 
 makeGame ={};
   makeGame.upper=upperbound;
  
   makeGame.counter=0;
   
   makeGame.randInt=randInt;
   makeGame.giveUp=giveUp;
   makeGame.numOfGuesses=numOfGuesses;
   makeGame.guessMynumber=guessMynumber;
   makeGame.rand=randInt(makeGame.upper);


  return makeGame;
}///////////

///////////////////////
/////////////////////////
  function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}
 
/////////////////////// start of guess my number.
  function guessMynumber(n){
      this.counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    }///////////
    ///////////

    function giveUp(){
      return this.rand;
    }//////////
     ///////

  function  numOfGuesses(){
      return this.counter;
    }///////////