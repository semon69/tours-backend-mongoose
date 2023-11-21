import app from "./app"
import mongoose from 'mongoose';
import config from "./config";

// main().catch(err => console.log(err));

const port = 3000
async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(port, () => {
            console.log(`App listening on port ${config.port}`)
        })
    } catch (error) {
        console.log(error);
    }

}

main()