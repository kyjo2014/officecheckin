let express = require('express')

const app = express()

const officeIP = "183.63.119.47"//检查点IP

const timeSpan = 10000 //单位是ms

//当前用户列表
let userList = {

}
//nginx has delete the x-forward-* head
app.set('trust proxy', true)


app.get('/', (req, res) => {
    var ipAddress = 1;
    var time = new Date();
    var headers = req.headers;
    var forwardedIpsStr = headers["x-real-ip"] || headers["x-forwarded-for"];
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }

    if (forwardedIpsStr == officeIP &&　req.query.username　) {
        
        userList[req.query.username] = {}
        userList[req.query.username][time] = time.getTime()
    }
    // res.send({
    //     'userList': userList
    // })
    refresh(userList)
    res.send({
        "yourIP": forwardedIpsStr,
        "time": time.getTime(),
        "username": req.query.username,
        "userList": userList,
        "isAlarm": isAlarm(userList[req.query.username])
    })
    if(userList[req.query.username])
        userList[req.query.username].alarm = false;
    //1234567>8

})

app.get('/alarm', (req, res) => {
    if (req.query.username) {
        userList[req.username].alarm = true;
    }
    res.send({
        "status": "accept"
    })
})


function isAlarm(user) {
    if(user)
        return user.alarm == true
    return false
}

function refresh(userList) {
    let time = new Date()
    let newTime = time.getTime()
    for (var i in userList) {
        var oldTime = userList[i].time
        if (newTime - oldTime > timeSpan) { 
            delete userList[i]
        }
    }
    return userList
}

app.listen(8201, () => {
    console.log("listening")
})