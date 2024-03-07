const express = require('express');
const cors = require('cors');
const mailRoutes = require('./routes/mail');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/mail', mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));