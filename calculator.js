//array that will store my employee objects
var employeeData = [];

$(document).ready(function (){
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

displayEmployees();

//empty inputs
$('#firstNameIn').val('');
$('#lastNameIn').val('');
$('#employeeNumberIn').val('');
$('#jobTitleIn').val('');
$('#salaryIn').val('');

}); // submit button function
//call displayEmployees


});

//create a function that displays the employee data you have
function displayEmployees () {
  console.log('in displayEmployees');
  //target output by ID
  var output = $('.container');
  //empty output
  output.empty();
  //create a loop go through employeeArray
  for (var i = 0; i<employeeData.length; i++) {
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
