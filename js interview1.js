<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DayOne</title>
    <style>
        body{margin-left: 2%;}
       .algn{margin-left:6%;}
       .text{margin-left: 3%;}
        b{margin-left: 3%;}
       .exphase{margin-left: 11%;}
    </style>
</head>
<body>
    <h2>Difference between “ == “ and “ === “ operators?</h2>
        <p class="text">- Double equals to(==) named as Equality Operator and Triple Equals named as Identity/Strict equality operator.</p>
        <p class="text">- Double equals is used for comparison between two variable irrespective of the datatype of variable and Triple equals used for comparison between</p> 
        <p class="text">  two variables but it will strictly check for data type of variable.</p>
        <p class="text">- Double equals to operator first convert the operands into the same type and then compare and Triple equals do not perform any type of conversion </p>
        <p class="text">  before comparsion and return true.</p>


    <h2>What is the spread operator?</h2>
        <p class="text">The spread operator allows us to quickly copy all part/data of an existing array or object into another array or object.</p>


    <h2>What are the differences between var, let and const??</h2>
        <p><b>Let:-</b>&nbsp We can declare the variable name is one line and initialize it on another line.</p>
        <p class="algn">- Two variables with same name aren't possible with let.</p>
        <p class="algn">- We can reassign/update the value of the variable which have already been initialized.</p>
        <p class="algn">- It is blocked scoped.</p>
        <p class="algn">- Let doesn't support Hosting</p>

        <p><b>const:-</b> We can declare and initialize variable in the same line itself.</p>
        <p class="algn">- Two variables with same name aren't possible with const.</p>
        <p class="algn">- We can't reassign/update the values of the variable which have been already initialized.</p>
        <p class="algn">- It is blocked scoped.</p>
        <p class="algn">- Doesn't support Hoisting.</p>

        <p><b>var:-</b> Declare the variables in one line and initialize it on another line or same line.</p>
        <p class="algn">- Two variables with same name are possible with var.</p>
        <p class="algn">- We can reassign/update the values of the variables which have already been initialized.</p>
        <p class="algn">- var is global scoped.</p>
        <p class="algn">- var support Hosting.</p>


    <h2>What is execution context?</h2>
        <p class="text">The Execution context is an abstract environment created by javascript engine to ececute code.</p>
        <p class="text">The execution context contains the code that's currently runniung and everything that aids in its execution.</p>
        <p class="text">During the Execution context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory</p>
        <p class="text">executabke byte-code gets generated and the code gets executed.</p>

    <h2>What is creation phase and execution phase?</h2>
        <p><b>Creation Phase:-</b> During the creation phase of the execution context, JS allocates memory space for the functions and variables. In case of functions,</p>
        <p class="exphase">   the whole function body is stored but in case of the variables, it is declared and assigned a default value undefined. This phenomena is called Hoisting.</p>
        
        <p><b>Execution Phase:-</b> In the Code Execution Phase, JavaScript being a single thread language again runs through the code line by line and updates the values</p>
        <p class="exphase">   of function and variables which are stored in the Memory Allocation Phase in the Memory Component.</p>
        <p class="exphase">   So in the code execution phase, whenever a new function is called, a new Execution Context is created. So, every time a function is invoked in the Code</p> 
        <p class="exphase">   Component, a new Execution Context is created inside the previous global execution context.</p>


    <h2>What is meant by first class functions?</h2>
        <p class="text">- First class functions are also called as first class citizens function.</p>
        <p class="text">- First class functions are those functions that can behave like variables.</p>
        <p class="text">- They can also be passesd as argument to higher order functions or another function or can be returned from another function.</p>


    <h2>What are closures? Give an example of closure?</h2>
        <p class="text">- In, Javascript closures are created are created every time a function is created, at function creation time.</p>
        <p class="text">- A closure is a function having access to the parent scope, even after the parent function has closed.</p>
        <p class="text">- A closure gives you access to an outer function's scope from an inner function.</p>
        <pre>
            function get(){
                let name = "JoyFull";
                function display(){
                    console.log(name);
                }
                display();
            }
            get();
        </pre>
    
</body>
</html>