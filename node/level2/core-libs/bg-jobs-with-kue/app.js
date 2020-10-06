var kue = require('kue');
var queue = kue.createQueue();


/*


Once you have created the queue - it's time to queue up some tasks! These tasks can be time consuming web scraping, gathering analytics, making bulk database writes, uploading files or sending emails.
 */
function sendEmail(title,to,subject,message, done){
    var email = queue.create('email', {title, to, subject, message});
    done();
}

router.post('/', function(req, res, next) {
  queue.process('email', function(job, done){
    const {title,to,subject,message} = req.body;
    // use nodemailer or another tool to send an email
    sendEmail(title,to,subject,message);
  });
});
