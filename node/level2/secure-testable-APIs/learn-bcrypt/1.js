/*


By the end of this chapter, you should be able to:

    Define essential terms like one-way encryption, hashing, and salting
    Explain how to securely store passwords in a database
    Add authentication to an express app



 
 *
 */


/*


Auth Intro / Terms

    bcrypt - The library we will be using for hashing, salting, and decrypting passwords is the bcrypt library. The library is based on the blowfish cipher, a widely recognized algorithm for secure one way hashing.

    one-way encryption - With one-way encryption, also called hashing, encrypted information is not meant to be decrypted. This is quite common when thinking about passwords. Ideally the only person who should be aware of their password is the person who created it, as this is much more secure. As you'll see, we'll be hashing passwords and storing the hashes in a database. When a user then attempts to log in, we can hash the password they provide and see if there is a match between hashes. This allows us to authenticate a user without knowing what their password is. While this is a good start, hashing alone is not secure as it opens yourself up to dictionary attacks.

    dictionary attack - A dictionary attack occurs when a hacker takes all possible combinations of characters and runs it through a hashing algorithm. Once they have found a hash that matches yours, they can look up the text in the dictionary they have built and voila - you are hacked!

    salting - In order to prevent dictionary attacks, we add a randomized string of characters to the password (the salt) and then hash the entire password. This prevents someone from successfully creating a dictionary.

    two-way encryption - In contrast with one way encryption, two-way encryption is meant to be decrypted, often with some sort of key that the parties can use for decryption. This is very common when establishing a secure connection between another party (SSH keys on GitHub).



 */
 
// seem like this package outdated a lot, find a new.
 