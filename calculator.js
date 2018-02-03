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
//empty inputs
$('#firstNameIn').val('');
$('#lastNameIn').val('');
$('#employeeNumberIn').val('');
$('#jobTitleIn').val('');
$('#salaryIn').val('');
}); // submit button function



});
