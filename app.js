let express = require('express')

const app = express()

const officeIP = "183.63.119.18"

//当前用户列表
let userList = {

}
//nginx has delete the x-forward-* head
app.set('trust proxy', true)


app.get('/', (req, res) => {
    var ipAddress = 1;
    var time = new Date();
    var headers = req.headers;
    var forwardedIpsStr = headers["x-real-ip"] || headers["x-forwarded-for"]
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }

    if (forwardedIpsStr == officeIP) {
        
        userList[req.query.username] = time.getTime()

    }
    // res.send({
    //     'userList': userList
    // })
     refresh(userList)
    res.send({
        "yourIP": forwardedIpsStr,
        "headers": headers,
        "time": time.getTime(),
        "username": req.query.username,
        "userList": userList
    })
    //1234567>8

})


function refresh(userList) {
    let time = new Date()
    let newTime = time.getTime()
    for (var i in userList) {
        var oldTime = userList[i]
        if (newTime - oldTime > 5000) { 
            delete userList[i]
        }
    }
    return userList
}

app.listen(8201, () => {
    console.log("listening")
})