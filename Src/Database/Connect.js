const oracledb = require('oracledb');

const mypw = "admin" // set mypw to the hr schema password

oracledb.autoCommit = true;
var connection;
async function run() {

  

  try {
    connection = await oracledb.getConnection( {
      user          : "c##admin",
      password      : "admin",
      connectString : "localhost:1521/orcl"
    });
 console.log('Connected to Database');
 } catch(err) {
    console.log('Error in processing:\n', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }
}
run();

module.exports = connection;