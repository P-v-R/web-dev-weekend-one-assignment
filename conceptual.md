# Conceptual Exercise

Answer the following questions below in Markdown. 
Check out the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### What is Big O notation and why does it matter?
**big O** notation, is essentially a way for programmers to gauge the overall efficiency of any given program. Given the difference in hardware from one user to another, a programs efficiency is not 
judged by the time it takes to complete any given task, but measures how the code preforms as the input scales. In other words, rather than counting the *seconds* it takes for a program to run, we count
the *number* of simple operations the computer needs to preform. **big O** notation plays a very important role in the deployment of programs being used at a larger scale, a simple browser guessing game
may not need to consider its big O run time, but a full blown adventure RPG with thousands of lines of code all running at once, or a social media app used by millions of people needs to run as efficiently as possible to maintain usability and user experience. ***nothing worse than a slow, laggy aplication!***

### What is time complexity?
**time complexity** is the unit of measurment that gauges an algorithms scaled efficiancy. When measuring the computational *complexity* of program, we use **big O** notation and look at any given algorithms 
*worst case scenerio*. some examples of time complexity include (from most, to lease efficiant)...
* O(log n) / O(1)
* O(n)
* O(n log n)
* O(n^2)
* (2^n)
* O(n!) *(bad bad not good!!!)*

### What are important differences between arrays and objects?
in JavaScript, both **arrays** & **objects** are considered objects (*almost* everything in JavaScript is an object), but they do have some key differences! The way I like to imagine the difference is to picture 
an array as a numerical filing cabinet, 

1. file 1 contains Rithm-School notes, 
1. file 2 contains Homework, 
1. file 3 contains all my artwork. 

It's a quick and easy way to store different information and access it by its *numerical index*. But other people my not know how I like to organize my filing cabinet, or if the cabinet is stuffed with tons of files ** I myself may forget** the order of things, this is where objects come in handy. I imagine an object as a more detailed / labeled filing cabinet, although it might take a little longer to read through, it can offers up more specificity for what is help in each file. For example...

1. rithm-school noted File : day one Notes
1. homework Files : homework weekend1.jpg, homework.jpeg 
1. photography File : photo1.png

Objects also make storing different data types simpler than nesting them inside an array. 

### What are important differences between `var` and `let`?
up until a few years ago, **var** was the only option to JavaScript programmers, the main difference between the two, and one of the reason for the inception of **let** is its more limited block scope. A variable declared with **var** holds a *global scope* which in larger programs may cause some issues. **let** is a fantastic option for declaring variables that may not be used throughout the whole program. **both let and var** are reassignable values, unlike **const**
  
### What are important differences between `let` and `const`?
the **biggest** difference between **let** & **const** is their ability (or lack there of) to be reassigned. **const** stands for *constant*, meaning that variables declared with it should NOT be adjusted throughout the program. Both are mutable, but the **const** declaration is a good way to let other programmers know **not to mess with this variables value** a good example of a **const** variable would be...

```const PI = 3.14159```

### What are important differences between arrow functions and regular functions?
**arrow functions** preform in the same way as normal functions with some valuable differences, mostly being the fact that arrow functions take significantly less keystrokes than a traditional function declaration, and don't require a declared name. a great option for when you need a quick function that may only be used only once throughout the program, or as a **callback function** thats parent function will be called instead. Another difference is that with **arrow functions** there is no binding of *this*, rather *this* is found in the parent or host of the arrow function.  

### What is the purpose of the rest operator?
the **rest** operator is useful in many cases, for example in functions that take a *variable* number of arguments. It can handle any given argument passed into a function, or the *rest* of the arguments passed into a function. For example a function where we add the first two arguments and add the rest...

```
function multFirstTwoAddRest(num1,num2,...restOfNums){
    let firstTwo = a*b;
    let addRest = rest.reduce((previous, current) => {
        return previous + current
    })
    return firstTwo+addRest
}
multFirstTwoAddRest(2,2,3,3)  >>> 10 because 2*2+3+3 = 10

```

### What is the purpose of the spread operator?
The **spread** operator is a newer feature of JavaScript that allows allows and *expands* an iterable to be passed in a function so that its individual elements can act as arguments. A good option for passing arrays or objects into a function and working with each element of the given iterable. 


### What is Object Oriented Programming?
**Object Oriented Programming** or **OOP** is a concept that relies on *classes* and objects* to structure and *encapsulate* related and intertwined pieces of code. In General **oop** is a way to write more readable, scalable and efficient programs. Properly set up *classes* and *objects* greatly reduce redundancy in programs and greatly improve the programs writability. 

### What is a class? When would you make one?
A **class** acts as a structural blueprint to build objects from, when dealing with similar but different pieces of data *classes* help capture all the needed individual information into an object with specific functionality without having to rewrite the same code for each object. I like to think of a **class** like a car. Their can be many versions of the same car on the road that all essentially do the same thing... but are not the same thing! one car is red with black interior, one is blue with tan interior, one is a hybrid! they may all come from the same manufacturing plant and house a lot of the same functionality, but they are very much different! :blue_car: :red_car: :blue_car: :red_car:

### What is an instance?
an **instance** refers to an implimented version of a Class, like mentioned above with the cars! a car is the class (like a blueprint) but *your car* is an instance of the class. :racing_car:

### What is the keyword `this`?
~~A NIGHTMARE I WILL NEVER WAKE UP FROM~~ *this* refers to *self referential lexical scope* ... in other words everything in JavaScript is called onto **something**, when you call a vanilla function, its being called on the "global object", when you call a method in an instance of a class, it is being called on the instance. *this* refers to whatever a given snippet of code is being called to.  

### What does the `bind` function do?
the **bind function** Permanently *binds* an object's *this* to whatever you would declare. Especially useful in classes where methods can easily loose or *forget* their referential scope(or definition of *this*), the **bind function** helps programmers assure that any given method or function wont forget it's score no matter where it is being called. 