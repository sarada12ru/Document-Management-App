const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json({type: 'application/json'}));
app.use(cors());
app.get('/', (req, res) => {
    res.send("hello")
})
const router = require('./router');
app.use('/api', router);

app.listen(3000, () => {
    console.log(`App Listen On Port 3000`);
});