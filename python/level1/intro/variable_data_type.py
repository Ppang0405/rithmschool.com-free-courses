"""
Objectives:

By the end of this chapter, you should be able to:

    Understand how to assign and use variables
    Learn about the different data types
    Learn why Python is called a dynamically-typed language
"""
a = 1
b = "YOLO"
nothing = None


c, d = 1, 2
"""
Naming Requirements

    Variables in Python are required to start with a letter or an underscore.
    The rest of the name must consist of letters, numbers, or underscores
    Names are case-sensitive
"""

"""
Naming Conventions

    Most variable names should be written in lower_snake_case. This means that all words should be lowercase, and words should be separated by an underscore.
    CAPITAL_SNAKE_CASE usually refers to constants
    UpperCamelCase usually refers to a class (more on that later)
    Variables that start and end with two underscores (called "dunder" for double underscore) are intended to be private or are builtins to the language
"""
myVariable = 3  # Get outta here, this isn't JavaScript!
my_variable = 3  # much better
AVOGADRO_CONSTANT = 6.022140857 * 10 ** 23  # https://en.wikipedia.org/wiki/Avogadro_constant
__no_touchy__ = 3  # someone doesn't want you to mess with this!

"""
Data Types in Python

As we mentioned in the last chapter, Python has quite a few built in data types, including:

    bool = True or False values aka Boolean values
    int = an integer
    float = a decimal number
    str = a UNICODE string
    list = an ordered collection of other types (e.g. a list of ints)
    dict = a dictionary aka unordered collection of key:value entries
    and many more...

"""

type(False) # bool
type("nice") # str
type({}) # dict
type([]) # list
type(()) # tuple
type(None) # NoneType

"""
Note that Python has no concept of "primitives" like other languages such as JavaScript.
In JS, strings and numbers are primitive types while arrays and objects are composite types,
for example. In Python, all data types are objects. We'll revisit this when we talk about Python OOP.
"""
awesomeness = None
awesomeness = 33.5
awesomeness = True


x = 3
y = " cats"
str(x) + y # 3 cats
