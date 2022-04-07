

1-Gotchas: watch out for and fix these bugs if they show up in your code:

a-Users should be able to string together several operations and get the right answer, 
with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. 
An example of the behavior we’re looking for would be this online calculator: https://www.theonlinecalculator.com/.
Note that this behavior means your calculator is not required to follow order of operations, aka PEMDAS (though there’s nothing stopping you from implementing PEMDAS if you feel like it!).
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"
Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
EXTRAS

2-EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

3-EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

4-EXTRA CREDIT: Add a "backspace" button, so the user can undo if they click the wrong number.

5-EXTRA CREDIT: Add keyboard support!
