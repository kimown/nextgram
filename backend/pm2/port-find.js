/**
 * Created by google on 1/20/17.
 */

const detect = require('detect-port');

function portPromise(basePort, number) {
    let ports = [];
    let _basePort = basePort;
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

        detect(_basePort, cb);
    })
}

module.exports = portPromise;

// portPromise(3000,5).then((data)=>{
//     console.log(data)
// })



