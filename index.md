class: center, middle

## Recursive Spreadsheets

### _or_

### How to Liberate Excel Users from the Shackles of Visual Basic

### _and_

### How to Free Google Sheets Users from the Crushing Jackboot of JavaScript

---

---

Recursive Spreadsheets
-or-

Spreadsheets should allow users to define new functions directly without learning a separate programming language like VBA.

Let's say you want a function that calculates the fibonacci sequence so you can use it in your fibonacci-related spreadsheet.

You should be able to accomplish this by creating a new worksheet named `FIB()` and populating it with:

  | A |    B   |
--+---+--------+
1 | N | RETURN |
--+---+--------+
2 |   |        |
--+---+--------+

You would then right-click A2, and tell Excel that it an argument. Similarly, you would right-click B2 and tell Excel that it contains a return value.

Inside B2 would go the expression `=If(A2>2,FIB(A2-1) + FIB(A2-2),A2)`

Then, you should be able to use `FIB(N)` in your spreadsheet and have Excel calculate the value by substituting `N` into the `FIB()` worksheet.

Do any spreadsheets have this feature? I 

- googling recursive spreadsheets is really disappointing

- always look for how to put the tool you're making inside of itself
- beautiful learning curve
  - static text
  - formatting
  - simple formulas
  - crazy fomrulas
  - excel trading bot
- important for non-programmers to have tools with this nice learning curve
  - mention python, rcers automate their job
  - mention emacs, secretaries were writing lisp functions and saying that they aren't weren't programmers
  - excel is another good one
  - a terminal is another good one (steep initial, but just ad an iff, for loop, variable, or whatever)

- i really want a world where people use computers and claim that they aren't programmers, and do really awesome crazy stuff, and claim that they're not programming, and that they're not programmers, and just make their claims less and less and less credible, until they're finally forced to admit that they're programmers

- this is how things are empowering. they have a nice, smooth learning curve (python hump at beginning and hump at the end, rust huge hump but then smooth, c is awful, excel is smooth but then hits a wall)

- show those terrible tables that people make

- pretend that it exists, but really implement it in javascript

- recursion makes things shockingly powerful

- i'm convinced that adding this to excel would make it shockingly powerful

- another pattern is to make somethings output its own input, to facilitate chaining

- yo dog, i put a spreadsheet inside your spreadsheet so you can spreadsheet while you spreadsheet
