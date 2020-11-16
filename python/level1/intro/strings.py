"""
Objectives:

By the end of this chapter, you should be able to:

    Understand Unicode vs ASCII encodings
    Learn about the different string methods
    Learn about formatted strings
"""

# string is an iterable series of characters. You can loop through a string just like a list:
for x in "word":
    print(x)
# w
# o
# r
# d

# String literals can be defined with either single or double quotes (your choice),
# and can be defined on multiple lines with a backslash like so:
x = "my favorite " \
    "string"


# Most importantly, strings in Python are immutable. This means you cannot change strings like so:
my_str = "can't touch this"
my_str[6] = " "  # TypeError

# Also, when you build strings with += in a loop, you're creating a new string every iteration:
new_str = "hello "
for c in "world":
    new_str += c  # new string created every single time!

print(new_str)  # hello world

# This has serious implications for time and space complexity,
# which are discussed in the computer science fundamentals section about Big O.


"""
Unicode vs ASCII

In Python 2 strings, are stored internally as 8 bit ASCII. But in Python 3, all strings are represented in Unicode.


Uh, what?

Before we talk about methods on strings in Python,
let's learn a little bit about the history of character encodings.
If you would like a longer description, feel free to read this excellent article.

When we as humans see text on a computer screen,
we are viewing something quite different than what a computer processes.
emember that computers deal with bits and bytes, so we need a way to encode (or map)
characters to something a computer can work with.

In 1968, the American Standard Code for Information Interchange (or ASCII) was standardized
as a character encoding. ASCII defined codes for characters ranging from 0 to 127.

Why this range? Remember that computers work in base 2 or binary,
so each bit represents a power of two.
This means that 7 bits can get us 2^7 = 128 different binary numbers;
since each bit can equal 0 or 1, with 7 bits
we can represent all numbers from 0000000 up to 1111111.
With ASCII, we can then map each of these numbers to a distinct character.
Since there are only 26 letters in the alphabet (52 if you care about the distinction
between upper and lower case), plus a handful of digits and punctuation characters,
ASCII should more than cover our needs, right?

ASCII was a great start, but issues arose when non English characters like é or ö could not
be processed and would just be converted to e and o. In the 1980s, computers were 8-bit machines
which meant that bytes now held 8 bits. The highest binary number we could obtain
on these machines was 11111111 or 2^0 + 2^1 + 2^2 + 2^3 + 2^4 + 2^5 + 2^6 + 2^7, or 255.
Different machines now used the values of 128 to 255 for accented characters,
but there was not a standard that emerged until the International Standards Organization (or ISO) emerged.

Even with an additional 128 characters, we started running into
lots of issues once the web grew. Languages with completely different character
sets like Russian, Chinese, Arabic, and many more had to be encoded
in completely different character sets, causing a nightmare
when trying to deliver a single text file with multiple character sets.

In the 1980s, a new encoding called Unicode was introduced.
Unicode's mission was to encode all possible characters and still be backward compatible with ASCII.
The most popular character encoding that is dominant on the web now is UTF-8,
which uses 8-bit code units, but with a variable length to ensure that all sorts of characters
can be encoded.

TL;DR: in Python3, strings are Unicode by default.

"""

