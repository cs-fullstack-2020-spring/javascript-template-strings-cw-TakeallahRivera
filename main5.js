//Classwork Problem 1 Question

/*### Exercise 1:
Create a template string and assign it to the variable ```my_template_string```.

The template string should contain the following data only:

```
My name is ${my_name}.
My id is ${my_id}.
My address is ${my_address}.
```

Create the variables ```my_name```, ```my_id```, and ```my_address``` and set their values to ```Kevin```, ```2112```, and ```Memphis, TN```.

Use the template string you created and assigned to the variable ```my_template_string``` to log the formatted output to the console.

Sample Output:
```
My name is Kevin.
My id is 2112.
My address is Memphis, TN.
```


*/



//Classwork Problem 1 Solution
let my_name = "Kevin";
let my_id = "2112";
let my_address = "Memphis TN";

let my_template_string = `My name is ${my_name}
My ID is ${my_id} 
My address is ${my_address}`

console.log(my_template_string);




//Classwork Problem 2 Question
/*### Exercise 2:

Create a new template string 

```
var contestant = "1_M_l337!";
var score = "9001";
```

and use the provided variables to print 
```
Congratulations 1_M_l337! !!, your score is 9001.
```
*/



//Classwork Problem 2 Solution
let contestant = "1_M_l337";
let score = "9001";

let my_template_string2 = `Congratulations ${contestant} your score is ${score}`;

console.log(my_template_string2);



/*### Exercise 3:

Combine multiple development concepts to create a basketball scoring program that meets the following requirements:
- Prompts the user for the name of their Home team
- Prompts the user for the name of the Visiting team
- Prompt the user to enter the score for their home team *(include the team name when prompting the user)*
`How many points did the Memphis Grizzlies score? (Home team score)`
- Prompt the user to enter the score for the visiting team *(include the team name when prompting the user)*
`How many points did the GS Warriors score? (Visting team score)`

In your program determine which team won the game with the highest score and display the results in an alert box.

Expected Output:
```
Looks like the Memphis Grizzles have defeated the GS Warriors!

FINAL SCORE:
Home/Memphis Grizzlies: 102
Visitors/GS Warriors: 23
```

Create a tie position. 

*/

//Classwork Problem 3 Solution

prompt("What is the name of your home team?");
prompt("What is the name of your visiting team?");
prompt("Enter the score of your home team");
prompt("Enter the score of your visiting team");
