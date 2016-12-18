let express = require('express')

const app = express()

const officeIP = 'localhost'

//当前用户列表
let userList = {

}
//nginx has delete the x-forward-* head
app.set('trust proxy', true)

app.get('/', (req, res) => {

    res.send('please register')
})
>
app.get('/', (req, res) => {
    var ipAddress = 1;
    var headers = req.headers;
    var forwardedIpsStr = headers["x-real-ip"] || headers["x-forwarded-for"]
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }

    if (forwardedIpsStr == officeIP) { 

    }

    let time = new Date()

    res.send({
        "yourIP": forwardedIpsStr,
        "headers": headers,
        "time": time.getTime(),
        "username": req.query.username
    })
    //1234567>8
    time.getTime()
    console.log(headers)
})
app.listen(8201, () => {
    console.log("listening")
})