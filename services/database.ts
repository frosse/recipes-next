import mongoose from "mongoose";
import config from "../utils/config";

function connect() {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(`${config.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default { connect };
