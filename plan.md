User clicks create button
a modal pops up asking the user for name category and description
the modal will be hidden in the html with a button event that displays the modal
the modal will have a submit and a cancel button
the submit button saves the data and creates a card
the cancel button closes the modal 
name is a string category is a string description is a string
with those inputs a modal will be created with a name a category a description a start button and a delete button also a time button in the format hours and minutes
when the user sees the card and klicks on the start button a timer will start and and the start button gets replaced by a stop button
if the user presses the stop button the time will be saved into a session variable which will be an object with session id category and time duration and time created.
the card will get updated with the new time
in the stats section each category has a card a today view a weekly view and a monthly view
user can go back days weeks and months
the sum of each category will be calculated to show the time spent 
the data is only saved into the dom once everything works localstorage will be added
there can only be one timer running at the same time
