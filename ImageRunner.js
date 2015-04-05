
var config = require('config');
var Docker = require('dockerode');


var dockerIP = config.Docker.ip;
var dockerport = config.Docker.port;



var docker = new Docker({protocol:'http', host: dockerIP, port: dockerport});


docker.createContainer({
    Image: 'freeswitch',
    ExposedPorts: {'5060/udp': {} , '16384/udp' : {}, '16385/udp' : {}, '16386/udp' : {}, '16387/udp' : {}, '16388/udp' : {}, '16389/udp' : {}, '16390/udp' : {}, '16391/udp' : {}, '16392/udp' : {}, '16393/udp' : {}, '16394/udp' : {}},
    Cmd: ['bash', '/usr/local/src/fsmanager/run.sh'],
    Env: ['StartRTPPort=16384', 'EndRTPPort=16394', 'ExternalIP=104.131.90.110', 'freeswitchpath=/opt/freeswitch/', 'freeswitchid=1', 'envirnment=production', 'domain=duovoice.com']


    //5060:5060/tcp -p 5060:5060/udp -p 16384:16384/udp -p 16385:16385/udp -p 16386:16386/udp -p 16387:16387/udp -p 16388:16388/udp -p 16389:16389/udp -p 16390:16390/udp -p 16391:16391/udp -p 16392:16392/udp -p 16393:16393/udp

}, function(err, container) {
    if(!err) {
        container.attach({
            stream: true,
            stdout: true,
            stderr: true,
            tty: true


        }, function (err, stream) {
            if (err) return;

            stream.pipe(process.stdout);

            container.start({

                Privileged: true,
                PortBindings: {
                    "5060/udp": [{"HostIp": "0.0.0.0", "HostPort": "5060"}],
                    "16384/udp": [{"HostIp": "0.0.0.0", "HostPort": "16384"}],
                    "16385/udp": [{"HostIp": "0.0.0.0", "HostPort": "16385"}],
                    "16386/udp": [{"HostIp": "0.0.0.0", "HostPort": "16386"}],
                    "16387/udp": [{"HostIp": "0.0.0.0", "HostPort": "16387"}],
                    "16388/udp": [{"HostIp": "0.0.0.0", "HostPort": "16388"}],
                    "16389/udp": [{"HostIp": "0.0.0.0", "HostPort": "16389"}],
                    "16390/udp": [{"HostIp": "0.0.0.0", "HostPort": "16390"}],
                    "16391/udp": [{"HostIp": "0.0.0.0", "HostPort": "16391"}],
                    "16392/udp": [{"HostIp": "0.0.0.0", "HostPort": "16392"}],
                    "16393/udp": [{"HostIp": "0.0.0.0", "HostPort": "16393"}],
                    "16394/udp": [{"HostIp": "0.0.0.0", "HostPort": "16394"}]
                }

            }, function (err, data) {
                if (err) return;
            });
        });
    }else{

        console.log( err);
    }
});
