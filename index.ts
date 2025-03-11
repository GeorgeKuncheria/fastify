import fastify, {FastifyInstance} from "fastify";


const app : FastifyInstance  = fastify({ logger: true });

app.get("/", async (request, reply) => {
    return { response: "hello world" };
});


app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
})

