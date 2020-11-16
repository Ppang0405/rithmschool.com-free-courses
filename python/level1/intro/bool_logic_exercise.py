"""
Complete the exercises below by writing an expression in Python to answer the question:

    Declare a variable called first and assign it to the value "Hello World".

    Write a comment that says "This is a comment."

    Log a message to the terminal that says "I AM A COMPUTER!"

    Write an if statement that checks if 1 is less than 2 and if 4 is greater than 2. If it is, show the message "Math is fun."`

    Assign a variable called nope to an absence of value.

    Use the language's "and" boolean operator to combine the language's "true" value with its "false" value.

    Calculate the length of the string "What's my length?"

    Convert the string "i am shouting" to uppercase.

    Convert the string "1000" to the number 1000.

    Combine the number 4 with the string "real" to produce "4real".

    Record the output of the expression 3 * "cool".

    Record the output of the expression 1 / 0.

    Determine the type of [].

    Ask the user for their name, and store it in a variable called name.

    Ask the user for a number. If the number is negative, show a message that says "That number is less than 0!" If the number is positive, show a message that says "That number is greater than 0!" Otherwise, show a message that says "You picked 0!.

    Find the index of "l" in "apple".

    Check whether "y" is in "xylophone".

    Check whether a string called my_string is all in lowercase.

"""

first = "Hello world!"
# This is comment
print("I AM A COMPUTER!")
if 1 < 2 and 4 > 2:
    print("Math is fun.")
nope = None
True and False
len("What's my length?")
"i am shouting".upper()
int("1000")
str(4) + "real"
print(3 * "cool")
print(1/0)
type([]) # list
name = input("What's your name?")
num = float(input("Pick a number"))
if num < 0:
    print("The number is less than 0!")
elif num > 0:
    print("The number is greater than 0!")
else:
    print("You picked 0!")
"apple".find("l")
"y" in "xylophone"
my_string.islower()
