const mongoose = require('mongoose');
require('dotenv').config();
const Pelicula = require('./models/Pelicula');

const peliculas = [
  {
    "id": 1,
    "titulo": "El Rey León",
    "descripcion": "Un joven león lucha para recuperar su reino.",
    "genero": "Animación",
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
  },
  {
    "id": 2,
    "titulo": "Buscando a Nemo",
    "descripcion": "Un pez payaso recorre el océano para encontrar a su hijo.",
    "genero": "Aventura",
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg"
  },
  {
    "id": 3,
    "titulo": "Ratatouille",
    "descripcion": "Un ratón con talento para la cocina en París.",
    "genero": "Animación",
    "poster": "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg"
  },
  {
    "id": 4,
    "titulo": "Kung Fu Panda",
    "descripcion": "Un panda torpe se convierte en un guerrero legendario.",
    "genero": "Animación",
    "poster": "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg"
  },
  {
  "id": 5,
  "titulo": "Buscando a Dory",
  "descripcion": "Dory emprende una aventura para encontrar a su familia.",
  "genero": "Aventura",
  "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Finding_Dory.jpg"
},
  {
    "id": 6,
    "titulo": "Sing",
    "descripcion": "Un grupo de animales participa en un concurso de canto.",
    "genero": "Comedia",
    "poster": "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg"
  },
  {
    "id": 7,
    "titulo": "Encanto",
    "descripcion": "Una familia mágica vive en una casa encantada en Colombia.",
    "genero": "Fantasía",
    "poster": "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
  },
  {
    "id": 8,
    "titulo": "La Era de Hielo",
    "descripcion": "Un grupo de animales prehistóricos se embarca en una aventura.",
    "genero": "Aventura",
    "poster": "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg"
  },
  {
    "id": 9,
    "titulo": "Cómo entrenar a tu dragón",
    "descripcion": "Un joven vikingo entabla amistad con un dragón.",
    "genero": "Aventura",
    "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg"
  },
  {
    "id": 10,
    "titulo": "Toy Story",
    "descripcion": "Juguetes que cobran vida cuando no los miran.",
    "genero": "Animación",
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB...');
    await Pelicula.insertMany(peliculas);
    console.log('Películas insertadas con éxito');
    mongoose.disconnect();
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err));
