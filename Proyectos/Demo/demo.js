// import { peliculas } from "../../db_movies.movies";
const ejemplos = {name: 'Messi', name: 'CR7 el chivo'};

const {MongoClient} = require("mongodb");
console.log('Linea 2');

main();

async function main(){
    const url = "mongodb+srv://Velasco_182:Dragon970928*@atlascluster.mg3kkdj.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try {

        await client.connect();
        console.log('Linea 11');
        await listar(client);
        await crear(client, ejemplos);
        await mostrar(client);

    } catch (error) {

        console.error(error);

    }finally{

        await client.close();

    }
    
}

async function listar(client){

    const dbList =  await client.db().admin().listDatabases();
    // console.log(`Lista de bases de datos: ${JSON.stringify(dbList)}`);
    dbList.databases.forEach(element => {
        console.log(`Lista de bases de datos:`, element);
    });
    // dbList.databases.forEach(element => {
    //     console.log(`Lista de bases de datos:`, element);
    // });
    

}

async function crear(client, nuevo){

    const crear = await client.db('prueba').collection('ejemplos').insertOne(nuevo);
    console.log(crear);

}

async function mostrar(client){

        // Realiza una consulta para listar los documentos en la colección
        const mostrar = await client.db("prueba").collection("peliculas").find().toArray();
    
        // Imprime los documentos en la consola
        console.log('Documentos en la colección:');
        console.log(mostrar);

    ///Postman

    ///https://vuejs.org/
    ////npm create vue@latest
    ////npm install
    ///npm run dev
    ///http://localhost:5173/

    ///Paquete para consumir apis
    ///npm install axios
}