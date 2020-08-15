const express = require("express");

// Setup express app
 const app = express();

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.get('/', (req, res) => {
    res.send({ ok: true});
})