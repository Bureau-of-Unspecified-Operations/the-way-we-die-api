var testEndpoint = {
    url: "/",
    code: function(req, res, next) {
	res.send("Hellos test world")
    }
}


module.exports = {
    endpoints: [testEndpoint]
}
