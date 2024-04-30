const mongoose = require('mongoose');
const { mongoURI } = require('../src/config');

beforeAll(async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});
