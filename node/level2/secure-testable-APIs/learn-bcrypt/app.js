// npm packages
const bcrypt = require("bcrypt");

// globals
const password = "secret";
const saltRounds = 10;

const t1 = Date.now();

/*

The prefix just indicates that bcrypt was used to generate the string. The salt is a random string that is then combined with the password to generate the hashed password. In particular, the hash that we get from bcrypt includes the salt in it! This is what allows us to check passwords when users attempt to log in later: the combination of salt, work factor, and password uniquely determines the hash.
 */

bcrypt
  .hash(password, saltRounds)
  .then(hashedPassword => {
    console.log("hash", hashedPassword);
    return hashedPassword; // notice that all of these methods are asynchronous!
  })
  .then(hash => {
    return bcrypt.compare(password, hash); // what does this method return? -> hash again and compare pw
  })
  .then(res => {
    console.log("match", res);
  });

const hashWith = async (salt = 10) => {
  const hashed = await bcrypt.hash(password, salt)
  console.log('HASHED_IS', hashed)
  return hashed
}

hashWith()
hashWith(11)
hashWith(12)
hashWith(13)
hashWith(14)
hashWith(15)
hashWith(16)

// how compare time to run async code? Fuck it run first??
const t2 = Date.now();

console.log('TIME_', t2 - t1)

// -> stop in create db because of I can not create a database.
