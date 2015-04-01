/**
 * Created by a on 3/28/2015.
 */

var config = require('config');
var Docker = require('dockerode');



var dockerIP = config.Docker.ip;
var dockerport = config.Docker.port;



var docker = new Docker({protocol:'http', host: dockerIP, port: dockerport});

docker.listContainers({all: false}, function(err, containers) {
    console.log('ALL: ' + containers.length);
});


docker.buildImage('./Dockerfile.tar', {t: 'freeswitch'}, function(err, stream) {
    if(err) return;

    stream.pipe(process.stdout, {end: true});

    stream.on('end', function() {
        done();
    });
});

function done() {
    /*
    docker.createContainer({
        Image: 'freeswitch',
        Cmd: [''],
        Env: ['StartRTPPort=16384', 'EndRTPPort=16394', 'ExternalIP=104.131.90.110','ConfPath=/opt/freeswitch/conf'],
        HostConfig: { PortBindings : { "5060/tcp": [{ "HostPort": "5060" }], "5060/udp": [{ "HostPort": "5060" }], "16384/udp": [{ "HostPort": "16384" }] ,"16385/udp": [{ "HostPort": "16385" }] , "16386/udp": [{ "HostPort": "16386" }] , "16387/udp": [{ "HostPort": "16387" }] , "16388/udp": [{ "HostPort": "16388" }] , "16389/udp": [{ "HostPort": "16389" }] , "16390/udp": [{ "HostPort": "16390" }] , "16391/udp": [{ "HostPort": "16391" }] , "16392/udp": [{ "HostPort": "16392" }] , "16393/udp": [{ "HostPort": "16393" }] , "16394/udp": [{ "HostPort": "16394" }] }}

    }, function(err, container) {
        container.attach({
            stream: true,
            stdout: true,
            stderr: true,
            tty: true
        }, function(err, stream) {
            if(err) return;

            stream.pipe(process.stdout);

            container.start({
                Privileged: true
            }, function(err, data) {
                if(err) return;
            });
        });
    });
    */
}



