import { FastifyInstance,FastifyRequest, FastifyReply } from "fastify";
import {Body} from "../schemas/schema";
import {create} from "../services/userServices";


const userRoutes = async (app: FastifyInstance) => {
    app.post("/", async (request: FastifyRequest<{ Body: Body }>, reply: FastifyReply) => {
        return await create(request, reply);
        });
    };



export default userRoutes;