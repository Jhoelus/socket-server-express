import express from 'express';
import {SERVER_PORT} from '../global/enviroment'

export default class Server {

    public app: express.Application;
    public puerto:number;

    constructor(){
        this.app = express();
        this.puerto = SERVER_PORT
    }

    start(callback: FunctionStringCallback ) {
        this.app.listen(this.puerto, callback)
    }     
}