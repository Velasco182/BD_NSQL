const {MongoClient} = require("mongodb");
console.log('Linea 2');

main();

async function main(){
    const url = "mongodb+srv://Velasco_182:Dragon970928*@atlascluster.mg3kkdj.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try {

        await client.connect();
        console.log('Linea 11');
        listar(client);

    } catch (error) {

        console.error(error);

    }finally{

        await client.close();

    }
    
}

async function listar(client){

    const dbList =  await client.db().admin().listar();
    console.log(`Lista de bases de datos: ${JSON.stringify(dbList)}`);

}