//array that will store my employee objects
var employeeData = [];

$(document).ready(function (){
  //create a function that stores and returns data upon inputs
$('#submitButton').on('click',function () {
  //new employee objects
  var newEmployee = {
    firstName: $('#firstNameIn').val(),
    lastName: $('#lastNameIn').val(),
    employeeNumber: $('#employeeNumberIn').val(),
    jobTitle: $('#jobTitleIn').val(),
    salary: $('#salaryIn').val()
};
//push employee info into data array
employeeData.push(newEmployee);
//call display employees
displayEmployees();
calcSal(employeeData);
//empty inputs
$('#firstNameIn').val('');
$('#lastNameIn').val('');
$('#employeeNumberIn').val('');
$('#jobTitleIn').val('');
$('#salaryIn').val('');

}); // submit button function
  //build deletebutton functionality
  $('.container').on('click', '.deleteButton', function () {
    //create a variable to store the clicked employees' button
    var clickedIndex = $(this).data('id');
    //take that employee out of our data array
    employeeData.splice(clickedIndex, 1);
    //run display and calculate functions again
    displayEmployees();
    calcSal(employeeData);
    //cross-fingers
  });


}); //ends docReady function

//create a function that displays the employee data you have
function displayEmployees () {
  console.log('in displayEmployees');
  //target output by ID
  var output = $('.container');
  //empty output
  output.empty();
  //create a loop go through employeeArray
  for (var i = 0; i<employeeData.length; i++) {
    //create an outputString that prints data objects to DOM
    var outputString = '<li>';
    outputString += employeeData[i].lastName + ', ';
    outputString += employeeData[i].firstName + ', ';
    outputString += employeeData[i].employeeNumber + ', ';
    outputString += employeeData[i].jobTitle + ', ';
    outputString += employeeData[i].salary;
    outputString += '<button class="deleteButton" data-id="' + i + '">Delete Employee</button></li>';
    output.append(outputString);

  }

}

function calcSal (arr) {
    //creating an array to put the salary info- so i can perform a reduce
    var salaryArray = [];
    for (var i= 0; i<arr.length; i++) {
      //adding this little condition to allow second conditional to work
      if (arr[i] !== 0 ) {
      salaryArray.push(parseInt(arr[i].salary)/12);
    }
    }
    console.log(salaryArray);
    var salaryAvg;
    //adding conditional to account for zero employees
    if (salaryArray.length === 0) {
      salaryAvg = 0;
    } else {
    //using reduce method to get the sum of my monthly salary
     salaryAvg = salaryArray.reduce(function (a, b) {
      return (a + b);
    });
    }
    //target my output by ID
    var salOut = $('#costs');
    //empty output
    salOut.empty();
    //create an output
    var salOutputString ='<p>' + 'Monthly Salary Cost: $' + salaryAvg.toFixed(2) + '</p>';
    //append salOut w/average
    salOut.append(salOutputString);

}
