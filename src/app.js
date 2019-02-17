import Express from 'express';
import {ReportingServiceController} from './reporting-service.controller';

const PORT = 3000;

class Application {

    constructor() {
        this.app = Express();
        this.instantiateControllers();
        this.startServer();
    }

    startServer(){
        this.app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        });
    }

    instantiateControllers(){
        new ReportingServiceController().instantiate(this.app);
    }
}

new Application();

