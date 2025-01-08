const oracledb = require("oracledb");

// config
// oracledb.initOracleClient({ libDir: process.env.INSTACLIENT });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;

// db connection config
const db = {
  user: "ELIBRARY1",
  password: "ELIBRARY1",
  connectString: "10.21.0.53:1521/INFOTECH",
};

// creating tipsoi_pool
function dataBaseConnection() {
  return new Promise(async function (resolve, reject) {
    try {
      const pool = await oracledb.createPool({
        ...db,
        poolAlias: "ELIBRARY1",
      });
      pool.reconfigure({
        poolMin: 10,
        poolMax: 200,
        poolIncrement: 10,
        poolTimeout: 2000000,
      });
      resolve(pool);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
// initializing
dataBaseConnection();

// common connection
function getConnection(pool) {
  return new Promise(async function (resolve, reject) {
    let connection;
    try {
      connection = await oracledb.getConnection(pool);
      // response
      resolve(connection);
    } catch (err) {
      // console.log(object);
      reject(err);
    }
  });
}
module.exports = { getConnection, oracledb };
