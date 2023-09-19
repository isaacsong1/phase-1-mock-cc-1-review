//! Quiz Review
//TODO: JavaScript Fundamentals Quiz
/* 
    Strict inequality operator: !==
    Strict equality operator: ===

    Logical Operators:
        "&&": AND
        "||": OR
        "!": NOT

    Variable Declarators
        const: Cannot be re-assigned or re-declared
        let: Can be re-assigned, not re-declared (in same scope)
        var: Can be re-assigned and re-declared in the same scope (Can lead to scope-related bugs)
*/

//TODO: Functions in JavaScript Quiz
/* 
    Terms:
        Hoisting: The ability to place a function call before the function definition
            Function must be defined as a function declaration
        Anonymous Function: const fn = function() { console.log("This is anonymous") }
        Immediately Invoked Function Expression (IIFE): (function(baseNumber) { return baseNumber + 3; })(2)
        Function-Level Scope: Variables belonging to a function can only be accessed from inside the function
        Closure: When a function 'encloses' the function-level scope of its parent
            Gives us access to an outer function's scope from an inner function
        Function Declaration: function razzle() { console.log("Function Declared"); }
        Callback Function: A function passed into another function as an argument, which is then invoked inside the outer function
    
    A function is a first-class object

    Closure Example:
        function outerFn(outerParam) {
            let outerVar = 0;
            return function innerFn(innerParam) {
                let innerVar = 0;
            }
        }
        innerFn() has access to outerVar, as well as outerParam
*/

//TODO: Scope Quiz
/*
    Closure: Gives us access to an outer function's variables from an inner function
    Lexical Scope: For variables defined using const or let, a variable defined outside a function can be accessible inside the function, but not the other way around
    Scope Chain: All variables and functions declared in outer scopes are availble in inner scopes via scope chain

    When our JS code is run in the browser, the JS engine makes two separate passes over our code: "compilation" and "execution"
        Compilation Phase: Allocates memory, sets up references to variables, and adds a reference to the appropriate scope chain for functions
        Execution Phase:Runs our code line-by-line, assigning values to variables and calling functions
*/

//TODO: Working with Objects in JavaScript Quiz
/*
    for ... in: Iterates over all enumberable properties of an object that are keyed by strings, including inherited enumerable properties
    Example:
        const address = {
            name: "P. Sherman",
            street2: "42 Wallaby Way",
            city: "Sydney",
            state: "New South Whales",
            country: "AUS",
        };
        for (const key in address) {
            console.log(address[key])
        }
        By using the bracket operator, we are successfully able to access the objects values

    Object values can be re-assigned

    Spread Operator: Can be used on arrays and objects
        Can non-destructively create a copy of the array or object

    Methods:
        Object.assign(): Copies all enumerable properties from one or more source objects to a target object
            Can be used to combine two objects into one object
*/

//TODO: Working with Arrays in JavaScript Quiz
/*
    Methods:
        filter(callbackFn): Creates a new array with all elements that pass the test implemented by the provided function
        Example:
            let artists = [
                "Smash Mouth",
                "Janelle Monae",
                "SZA",
                "Thunder Cat",
                "Frank Ocean",
                "Solange",
            ];
            artists. _________ (function (artist) {
                return artist.startsWith("S");
            });

        forEach(callbackFn): Executes a provided function once for each array element. Does not have a built-in return value
        Example:
            Iterate through an array to log values
            Iterate over an array and directly mutate elements

        find(callbackFn): Returns the value of the first element in the provided array that satisfies the provided testing function
        Example:
            let artists = [
                "Smash Mouth",
                "Janelle Monae",
                "SZA",
                "Thunder Cat",
                "Frank Ocean",
                "Solange",
            ];
            artists. _________ (function (artist) {
                return artist.startsWith("S");
            });

        map(callbackFn): Creates a new array populated with the results of calling a provided function on every element in the calling array
            Returns a new array with the same number of elements as the original array

        reduce(callbackFn, initialValue): Executes a reducer function on each element of the array, resulting in a single output value
*/

//TODO: JavaScript and The DOM Quiz
/*
    Methods:
        querySelector("HTMLement"): Returns the first element that matches the given CSS selector
            - Can use textContent to return the text of given CSS selector

        getElementById("HTMLID"): Returns the element given by the ID as a string

        remove(): Removes the HTML element that the method is called on

        querySelectorAll(): Returns all elements that match the CSS selector argument

        getElementsByTagName(): Takes a tag name as a string and returns an HTML collection with the specified tag name

        getElementsByClassName(): Takes a class name as a string and returns all the elements with the specified class name

    When using Chrome DevTools to manipulate the DOM, the changes in the DOM do not affect the HTML file on the server

    The Document Object Model (DOM) is represented as a tree of nodes

    Order of Specificity:
        Most Specific: document.getElementById()
        Medium Specific: document.getElementsByClassName()
        Least Specific: document.getElementsByTagName()
*/