const express = require('express');
const mailRoutes = require('./routes/mail');

const app = express();

app.use(express.json());
app.use('/mail', mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));