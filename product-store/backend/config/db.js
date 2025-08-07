import mysql from "mysql2/promise";

export const connectDB = async () => {
  try {
    // use createPool is multiple connection, don't use createConnection for REST API
    const connection = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 100, // kamu ubah di sini
      queueLimit: 0,
    });
    console.log("MySQL connected");
    return connection;
  } catch (error) {
    console.error(`Error connecting to MySQL: ${error.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success
  }
};
