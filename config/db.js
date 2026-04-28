import 'dotenv/config'; // Carrega as variáveis do .env automaticamente
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste de conexão
try {
    const conn = await pool.getConnection();
    console.log('Conectado ao banco de dados MySQL com ES6 Modules!');
    conn.release();
} catch (err) {
    console.error('Erro ao conectar ao banco:', err.message);
}

export default pool;