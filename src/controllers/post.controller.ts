import {Request, Response} from "express"
const bcrypt = require('bcrypt');
const saltRounds = 10;
import {connect} from "../database";
import {Post} from "../interface/Post"
//select user ls from user
export async function getPosts(req:Request, res:Response):Promise<Response>{
    const conn = await connect()
   const posts = await conn.query('SELECT * FROM users');
    return res.json(posts[0]);
}
export async function createUser(req:Request,res:Response){
    const newUser:Post = req.body
    const conn = await connect()
    await conn.query('INSERT INTO users SET ?' ,[newUser])

    return res.json({
        message:"Post created"
    })
}

export async function registerUser(req:Request,res:Response){
    const conn = await connect();
    const password:string = req.body.password;
    const encryptedPassword = await bcrypt.hash(password,saltRounds)

    let users ={
        "id":req.body.id,
        "name":req.body.name,
        "password":encryptedPassword,
        "email":req.body.email
    }
    await conn.query('INSERT INTO users SET ? ',[users])
    return res.json({
        message:"Post created"
    })
}
export async function listUser(req:Request, res:Response):Promise<Response>{
    const id = req.params.id
    const conn = await connect();
    const posts = await conn.query('SELECT * from users where id = ?',[id])
    return res.json(posts[0])
}
export async function deleteUser(req:Request,res:Response):Promise<Response>{
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM users where id = ?',[id]);
    return res.json({
        message: "Delete User Okay"
    })
}
export async function updateUser(req:Request,res:Response){
    const id = req.params.id;
    const conn = await connect();
    const checkUser:Post = req.body
    await conn.query('UPDATE users set ? WHERE  id = ?',[checkUser,id]);
    return res.json({
        message:'Update Successful'
    })
}