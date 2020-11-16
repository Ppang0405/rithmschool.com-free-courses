print("Hello world!")

# Objectives:

""" By the end of this chapter, you should be able to:

    Explain what Python is and where it is used
    Compare and contrast Python2 and Python3
    List common data types in Python

"""



""" Data Types in Python

Python has quite a few native datatypes. We'll provide an overview of a few of the more common ones. For a complete list of the built-in types, check out the docs. You can also find a list of even more data types available in Python here.

    Booleans - As with many other programming languages, there are two booleans in Python: True and False (be mindful of the capitalization).
    Numbers - There are a number (pun intended) of different number types in Python. These include integers (4, 1, -10, etc.), floats (1.3, -2.9, etc), and more.
    Strings - Strings are sequences of Unicode characters, like "hi", "bye", and "I love strings!"
    Lists - Lists are ordered sequences of values. The values are comma-separated and in between square brackets. Compared to a language like JavaScript, a list is very similar to an array. Here's an example of what a list might look like: [1, 2, 3, "the end"].
    Tuples - Tuples are very similar to lists, but they have one crucial difference. With a list, you can always reassign a value somewhere in the list. However, once you set values in a tuple, you can't change them. We say that tuples are immutable, as opposed to lists, which are mutable. A tuple uses parentheses rather than brackets: (4, 2, 1) is an example of a tuple.
    Sets - Sets are also similar to lists, but have a couple of big differences. One is that sets don't keep track of duplicate values: they only store unique values. The second difference is that unlike lists, whose elements are ordered by index, sets don't impose any order on the elements inside of them. You can think of a set as simply an unordered collection of distinct values. Here's an example of a set: set("a", "b", "c").
    Dictionaries - A dictionary is an unordered collection of key-value pairs. This data type exists in other programming languages, but often goes by other names. For example, a dictionary is similar to a hash in Ruby, or an object in JavaScript. Here's an example of a dictionary: {"key": "value", "a": 0}.

"""
