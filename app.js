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


