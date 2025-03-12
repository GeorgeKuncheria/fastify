import { FastifyInstance } from "fastify";
import userRoutes from "../routes/userRoutes";




const route = async (app: FastifyInstance) => {
    app.register(userRoutes, {prefix: "/api/users"});
}


export default route;

