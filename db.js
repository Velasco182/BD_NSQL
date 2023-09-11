function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nombres = ["Juan", "María", "Carlos", "Ana", "Pedro", "Luis", "Laura", "Sofía", "Diego", "Elena"];
const ciudades = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Manizales", "Pereira", "Santa Marta", "Cúcuta", "Bucaramanga"];

for (let i = 1; i <= 30; i++) {
  const nombreAleatorio = nombres[getRandomInt(0, nombres.length - 1)];
  const edadAleatoria = getRandomInt(18, 60); // Edades entre 18 y 60 años
  const ciudadAleatoria = ciudades[getRandomInt(0, ciudades.length - 1)];

  db.miColeccion.insert({
    nombre: nombreAleatorio,
    edad: edadAleatoria,
    ciudad: ciudadAleatoria
  });
}
