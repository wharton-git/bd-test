import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config(); // Charge les variables d'environnement

const pool = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportations
export const query = async (sql, params) => {
    const [rows] = await pool.query(sql, params);
    return rows;
};

export const getPool = () => pool;