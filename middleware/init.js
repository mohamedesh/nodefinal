import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const initMiddlewares = (app)=>{

    app
        .use(bodyParser.json())
        .use(cors())
        .use(helmet())

}

export default initMiddlewares;