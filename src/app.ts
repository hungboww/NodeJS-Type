import express, {Request, Response,Application} from 'express';
import mysql from 'mysql';
import morgan from "morgan";
const port = process.env.PORT || 3000;
//Routes
import IndexRouters from "./routes/index.routers";
import PostRoutes from "./routes/post.routes";
export class App{
  private  app:Application;
    constructor(private port?:number | string) {
        this.app = express();
        this.middlewares();
        this.routes()
    }
    // setting(){
    //     this.app.set('port', this.port || )
    // }
    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }
    routes(){
        this.app.use(IndexRouters);
        this.app.use('/posts',PostRoutes);
    }
    async listen(){
        await this.app.listen(port, () => console.log('Sever on port 3000'))

    }
}





