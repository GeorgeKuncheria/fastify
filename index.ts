import fastify, {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import pinoPretty from "pino-pretty";
//pino pretty is a pretty logger for console output
import route from "./routes/route";
import connectDB from "./connection";
import dotenv from "dotenv";
dotenv.config();

const app: FastifyInstance = fastify({
    logger: {
        level: 'info',
        stream: pinoPretty({
            colorize: true
        })
    }
});



app.register(connectDB);

route(app);


app.listen({ port: 8000 }, (err, address) => {
    console.log(`Server listening at ${address}`);
})

