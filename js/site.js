//get values from the user. We need to get the fizz and the buzz value.
function getValues(){

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check that the numbers are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

    //call fizzBuzz() function
    let fbArray = fizzBuzz(fizzValue,buzzValue);

    //call displayData() function and write the values to the screen
    displayData(fbArray);

    } else {
        alert("You must enter integers")
    }
}

//do fizz buzz
function fizzBuzz(fizzValue, buzzValue){

    //initialize the returnArray[]
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        //check if divisible by 3 and 5
        //if so push `FizzBuzz` into the array and not the number
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');

        //check to see if divisble by fizz value 3
        //if so push `Fizz` into the array and not the number
        } else if(i % fizzValue == 0) {
            returnArray.push('Fizz');
            
        //check to see if divisble by buzz value 5
        //if so push `Buzz` into the array and not the number
        } else if(i % buzzValue == 0) {
            returnArray.push('Buzz');
        
        //If it isn't divisible by either number push the number into the array
        } else {
            returnArray.push(i);  
        }        
    }
    return returnArray;
}

//loop over the array and create a table row for each item
function displayData(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+=5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the tds and put them into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);        
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index]);
        rowCols[1].textContent = fbArray[index+1]; 
        
        rowCols[2].classList.add(fbArray[index]);
        rowCols[2].textContent = fbArray[index+2];
        
        rowCols[3].classList.add(fbArray[index]);
        rowCols[3].textContent = fbArray[index+3];        
      
        rowCols[4].classList.add(fbArray[index]);
        rowCols[4].textContent = fbArray[index+4];
        
        tableBody.appendChild(tableRow);
    }  
}