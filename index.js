const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/users', require('./routes/userRoutes'));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
