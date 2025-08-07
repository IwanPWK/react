import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const TOTAL_CONNECTIONS = 100; // Ubah sesuai jumlah koneksi yang ingin diuji

const testConnection = async (index) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log(`✅ Connection ${index} successful`);
    // Jangan tutup koneksi dulu agar tetap aktif
    return connection;
  } catch (err) {
    console.error(`❌ Connection ${index} failed:`, err.message);
    return null;
  }
};

const main = async () => {
  const connections = [];
  for (let i = 1; i <= TOTAL_CONNECTIONS; i++) {
    connections.push(testConnection(i));
  }

  const results = await Promise.all(connections);

  const successful = results.filter((conn) => conn !== null).length;
  const failed = results.filter((conn) => conn === null).length;

  console.log(`\n--- Test result ---`);
  console.log(`Total attempts   : ${TOTAL_CONNECTIONS}`);
  console.log(`Successful        : ${successful}`);
  console.log(`Failed            : ${failed}`);

  // Tutup semua koneksi yang berhasil
  for (const conn of results) {
    if (conn) await conn.end();
  }
};

main();
