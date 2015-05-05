/**
 * Created by Administrator on 4/21/15.
 */


var config = require('config');
var Docker = require('dockerode');
var dockerNewIP = config.DockerNew.ip;
var dockerNewport = config.DockerNew.port;
var docker = new Docker({protocol:'http', host: dockerNewIP, port: dockerNewport});


function CreateContainerWithServices(exposedPortslist,image,args,portBindings,dockerName) {

//console.log(exposedPortslist);
console.log(args);

    docker.createContainer({
        Image: image,
        name: dockerName,
        ExposedPorts: exposedPortslist,
       /// ExposedPorts: {'8000/tcp' : {}},
       // Cmd: ['nodejs', '/usr/local/src/'+image+'/app.js'],
        Cmd: ['./usr/local/src/servicesrart.sh'],
        Env: args

    }, function (err, container) {
        if (!err) {
            console.log('noErrors');
            container.attach({
                stream: true,
                stdout: true,
                stderr: true,
                tty: true


            }, function (err, stream) {
                if (err) return;

                stream.pipe(process.stdout);
                console.log("dddd");
                //console.log(portBindings);
                container.start({

                    Privileged: true,
                    PortBindings:portBindings


                }, function (err, data) {
                    if (err) return;
                });
              //  var a= docker.inspect(eventmonitor);
              console.log("start");
            });
            console.log('started');
        } else {

            console.log(err);
        }

    });

};

module.exports.CreateContainerWithServices=CreateContainerWithServices;