// calculate function here first declared varibles and called values using getElementById and then using if-else if statement made the calculation work
function calculate() {
  // declared first number variable 
  var firstNum = document.getElementById('num1').value;
  
  // declared operator variable
  var secondNum = document.getElementById('num2').value;

  // declared 2nd number 
  var optr = document.getElementById('optr').value;

  //  using  if-else if statement I created a logic if two numbers and a operator is selected then that particular operator will get executed in the code according to its functinality 

  if (optr == '+') {
    var answer = parseInt(firstNum) + parseInt(secondNum);
  }
  else if (optr == '-') {
    var answer = parseInt(firstNum) - parseInt(secondNum);
  }
  else if (optr == '*') {
    var answer = parseInt(firstNum) * parseInt(secondNum);
  }
  else if (optr == '/') {
    var answer = parseInt(firstNum) / parseInt(secondNum);
  }
  document.getElementById('rslt').value = answer;
}

// function for while the the user changes any input in the input fields result field will be blank 
  function blank() {
    document.getElementById('rslt').value = '';
  }
