import { FastifyRequest,FastifyReply } from "fastify";
import User from '../models/userModel';
import {Body} from '../schemas/schema';



const create = async (request : FastifyRequest<{Body:Body}>, reply : FastifyReply) => {
    const {user_id,name,email,airlinePreference} = request.body;
    const user = new User({user_id: user_id, name: name, email: email, airlinePreference: airlinePreference});
    await user.save();
        

    return reply.code(201).send(user);
};


export {create};