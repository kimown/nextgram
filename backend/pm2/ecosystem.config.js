
// const portPromise = require('./port-find')


const detect = require('detect-port');

function getPorts(basePort, number) {
    let ports = [];
    return new Promise((resolve)=>{
        const cb = (err, _port) => {
            if (err) {
                console.log(err);
            }
            ports.push(_port)
            if(ports.length<number){
                detect(_port+1, cb)
            }else {
                resolve(ports)
            }
        }

        detect(basePort, cb);
    })
}

const apps = [
    {
        name:'specify port',
        script    : "app.js",
    },
    {
        name:'    script',
        script    : "web.js"
    }
];


function getApp() {
    return new Promise((resolve)=>{
        getPorts(3000, apps.length).then((data)=>{
            const appCopy = apps.map((v,k)=>{
                return Object.assign(v,{name:v.name+data[k]})
            })
            resolve(appCopy)
        })
    })
}

module.exports = getApp()
//
//
// getApp().then((data)=>{
//     console.log(data)
// })
