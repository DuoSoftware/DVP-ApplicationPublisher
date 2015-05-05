/**
 * Created by Administrator on 4/20/15.
 */


var config = require('config');
var Docker = require('dockerode');



var dockerNewIP = config.DockerNew.ip;
var dockerNewport = config.DockerNew.port;



var docker = new Docker({protocol:'http', host: dockerNewIP, port: dockerNewport});

docker.listContainers({all: false}, function(err, containers) {
    console.log('ALL: ' + containers.length);
});

docker.buildImage('./DockerfileFSManager.tar', {t: 'fsmanager'}, function(err, stream) {
//docker.buildImage('./DockerfileSIPUserEndpointService.tar', {t: 'sipuserendpointservice'}, function(err, stream) {
//docker.buildImage('./DockerfilePhoneNumberTrunkService.tar', {t: 'phonenumbertrunkservice'}, function(err, stream) {
//docker.buildImage('./DockerfileFileService.tar', {t: 'fileservice'}, function(err, stream) {
//docker.buildImage('./DockerfileDynamicConfigurationGenerator.tar', {t: 'dynamicconfigurationgenerator'}, function(err, stream) {
//docker.buildImage('./DockerfileLimitHandler.tar', {t: 'limithandler'}, function(err, stream) {
//docker.buildImage('./DockerfileFileService.tar', {t: 'fileservice'}, function(err, stream) {
    if(err) return;

    stream.pipe(process.stdout, {end: true});

    stream.on('end', function() {
      // done();
    });
});



