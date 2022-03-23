import {createPool} from 'mysql2/promise'

export async function connect(){
    const connection = await createPool({
        host:'localhost',
        user:'root',
        password:'Password@123',
        database:'myapp',
        connectionLimit:10
    });
    return connection;
}