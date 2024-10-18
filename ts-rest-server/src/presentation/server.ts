import express, { Router } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import path from 'path';

interface Options {
    PORT: number;
    routes: Router;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly routes: Router;
    private readonly publicPath = 'public'; // Replace with your public folder path. Make sure this folder exists and is accessible by the server.

    constructor(options: Options) {
        this.port = options.PORT;
        this.routes = options.routes;
    }
    async start() {
        //Middleware

        //body parser middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
        }));
        //* Public Folder
        this.app.use(express.static(this.publicPath));


        //Routes       
        this.app.use(this.routes);

        //* SPA
        
        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });

        //Start the server
        this.app.listen(this.port, () => {
            console.log('Server listening on port: ' + this.port);
        });
    }
}