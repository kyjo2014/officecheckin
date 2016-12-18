let express = require('express')

const app = express()

const officeIP = 'localhost'

let userList = []
//nginx has delete the x-forward-* head
app.set('trust proxy', true)

app.get('/', (req, res) => {

    res.send('please register')
})
>
app.get('/:username', (req, res) => {
    var ipAddress = 1;
    var headers = req.rawHeaders;
    var forwardedIpsStr = headers["x-real-ip"] || headers["x-forwarded-for"]
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    let time = new Date()

    res.send({
        "yourIP": ipAddress,
        "headers": headers,
        "time": time.getTime,
        "username": req.params.username
    })
    //123
    time.getTime()
    console.log(req.ip)
})
app.listen(8201, () => {
    console.log("listening")
})