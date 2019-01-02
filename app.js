const express = require("express");
const app = express()
const api = require("./endpoints")
const port = 3030;

api.endpoints.forEach(function(endpoint) {
    app.use(endpoint.url, endpoint.code)
})

app.listen(port)
