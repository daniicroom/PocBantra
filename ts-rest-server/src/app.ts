import { Server } from "./presentation/server";
import { envs } from './config/envs';
import { AppRoutes } from './routes/routes'


const main = () => {
    const server = new Server({
        PORT: envs.PORT,
        routes: AppRoutes.routes        
    });
    server.start();

}

(async () => {
    try {
        main();
    } catch (error) {
        console.error("Error starting the server:", error);
    }
})();

