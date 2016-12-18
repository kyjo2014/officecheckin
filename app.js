let express = require('express')

const app = express()

const officeIP = 'localhost'

let userList = []

app.get('/', (req, res) => {

    res.send('please register')
})

app.get('/:username', (req, res) => {
    var ipAddress = 1;
    var headers = req.headers;
    var forwardedIpsStr = headers["x-real-ip"] || headers["x-forwarded-for"]
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    let time = new Date()

    res.send({
        "yourIP": req.ip,
        "time": time.getTime,
        "username": req.params.username
    })
    
    time.getTime()
    console.log(req.ip)
})
app.listen(3000, () => {
    console.log("listening")
})