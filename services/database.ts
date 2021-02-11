import mongoose from 'mongoose';

function connect() {
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(
            `${process.env.MONGO_URL}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    }
}

export default { connect }