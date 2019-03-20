// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (s, n) {

     var output="";  //// new variable for the string output
		while(n>0)
  { 

  	   output+=s;           ///  adding the new string every time
  	   n--;
  }
   return output;            ///returning the output 
		//your code is here  
	}