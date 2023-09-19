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