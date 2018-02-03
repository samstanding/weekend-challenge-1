Components:
--Collect user and store user inputs
--Use inputs to collect monthly costs and append to DOM with employee info
--Create a button that removes employee from the DOM
--Add some styling
--Create logic that changes monthly costs when employee is deleted


Collect User Inputs
-Create html elements for inputs and outputs
-stub out interface (what would it look like when data is collected?)
-create a SUBMIT button that clears the input fields
-create a function that stores my inputted data in javascript
-use above function to return info i need onto the DOM

Create Logic for monthly costs
--develop a function that sums total annual salaries and divides by 12
-- Add that info to the DOM

Create a button that Removes an employee
-- Will probably need to use a data tag that tells my functions what employee is being deleted:
  def will use the $(this).data('employeeNumber')

For deleting employees-
-- that will lean on the data.id info that i put into the function
-- I imagine the best way to go about this is to make my calculating function run a loop over the employees in my array, and then use the deletion as a trigger for removing that employee from my array of data. 
