/*



By the end of this chapter, you should be able to:

    Define what a background job is
    Explain what redis is and its use in background jobs
    Use kue to run background jobs

 */


/*



Background jobs

Another common issue when building applications is ensuring that long processes or tasks are not blocking or slowing down the entire application. This could happen when many emails are being sent, large files are being uploaded, or when you want to execute a process and you know there will be less traffic. Background job library often involve using another data store (usually a queue) to handle the order and management of jobs being processed. Kue is a very common tool (written by the same people who made Mongoose!) for handling background jobs.
 */