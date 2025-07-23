const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const peliculasRouter = require('./routes/peliculas');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Ruta de películas
app.use('/api/peliculas', peliculasRouter);

app.listen(4000, () => {
  console.log('🎬 Backend corriendo en http://localhost:4000');
});
