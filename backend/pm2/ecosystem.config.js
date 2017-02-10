
const detect = require('detect-port');

function getPorts(basePort, number) {
  let ports = [];
  return new Promise((resolve) => {
    const cb = (err, _port) => {
      if (err) {
        console.log(err);
      }
      ports.push(_port)
      if (ports.length < number) {
        detect(_port + 1, cb)
      } else {
        resolve(ports)
      }
    }

    detect(basePort, cb);
  })
}

const apps = [
  {
    name: 'web1',
    script: 'web.js'

  },
  {
    name: 'web2',
    script: 'web.js'
  }
];


function getApps() {
  return new Promise((resolve) => {
    getPorts(8080, apps.length).then((data) => {
      const appCopy = apps.map((v, k) => {
        return Object.assign(v,
          {
            name : v.name + " :" + data[k]
          },
          {
            env: {
              PORT: data[k]
            }
          }
        )
      })
      resolve(appCopy)
    })
  })
}

module.exports = getApps()
