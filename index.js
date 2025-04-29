import { query } from './db/connection-mysql.js';
import express from 'express';

const app = express();
app.use(express.json());

// Route test
app.get('/users', async (req, res) => {
    try {
        const users = await query('SELECT * FROM users');
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});