/**
 * Created by Administrator on 4/22/15.
 */

var imageRunnerNew = require("./imageRunnerNew.js");
var S = require('string');
//,8003/tcp,8004/tcp
var svrIP="0.0.0.0";
var sub = '/';
//var image="clusterconfiguration";
//var ports = '8000/tcp';
//var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,HOST_PORT=8000,HOST_DOMAIN=192.168.3.200,REDIS_IP=192.168.3.200,REDIS_PORT=6379';
/*
var image="eventmonitor";
var ports = '8001/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,FS_IP=192.168.2.36,FS_PORT=8021,FS_PASSWORD=ClueCon,FS_HTTP_PORT=8080,REDIS_IP=192.168.3.200,REDIS_PORT=6379';
//var p_a={ '8000/tcp': '{}' };
//var p_b={"8000/tcp": [{"HostIp": "0.0.0.0", "HostPort": "8000"}],"8001/tcp": [{"HostIp": "0.0.0.0", "HostPort": "8001"}]};
*/
/*
var image="httpprogrammingapi";
var ports = '8086/tcp,8087/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,FS_IP=192.168.2.36,FS_PORT=8021,FS_PASSWORD=devadmin,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_PORT=8086,LB_IP=192.168.3.200,LB_PORT=8087,SYS_SERVICE_FILE=http://upload.duovoice.com,SYS_SERVICE_RULE=http://rule.duovoice.com,SYS_SERVICE_ARDSCONNECTOR=http://ards.duovoice.com';
*/
/*
var image="cdrprocessor";
var ports = '9095/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_PORT=9093';
*/
/*
var image="appregistry";
var ports = '8080/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=8080';
*/
/*
var image="fileservice";
var ports = '8081/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,HOST_PATH=/usr/local/src/'+image+',LOG4JS_CONFIG=/usr/local/src/'+image+'/config/log4js_config.json,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=8081';
*/
/*
var image="httpprogrammingmonitorapi";
var ports = '8082/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=8082';

*/
/*
var image="sipuserendpointservice";
var ports = '8085/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=8085';
*/
/*
var image="limithandler";
var ports = '8083/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,HOST_PATH=/usr/local/src/'+image+'/,LOG4JS_CONFIG=/usr/local/src/'+image+'/config/log4js_config.json,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=8083';
*/
/*
var image="dynamicconfigurationgenerator";
var ports = '9083/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=9083,SYS_SERVICE_HTTPROGRAMMING=http://192.168.2.33/hhhdsjf';
*/
/*

var image="ruleservice";
var ports = '9093/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,HOST_IP=0.0.0.0,HOST_PORT=9093';
*/
/*
var image="phonenumbertrunkservice";
var ports = '9898/tcp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,LOG4JS_CONFIG=/usr/local/src/'+image+'/config/log4js_config.json,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,REDIS_IP=192.168.3.200,REDIS_PORT=6379,HOST_IP=0.0.0.0,HOST_PORT=9898';
*/
//,16385/udp ,16386/udp,16387/udp,16388/udp,16389/udp,16390/udp,16391/udp,16392/udp,16393/udp,16394/udp
var image="fsmanager";
var ports = '5060/udp,16384/udp,16385/udp,16386/udp,16387/udp,16388/udp,16389/udp,16390/udp,16391/udp,16392/udp,16393/udp,16394/udp';
var enV = 'NODE_CONFIG_DIR=/usr/local/src/'+image+'/config,FS_ID=1,FS_HOST=192.168.2.36,FS_EXTERNALIP=192.168.2.36,FS_RTPSTARTPORT=11111,FS_RTPENDPORT=22222,FS_PORT=8021,FS_PASSWORD=devadmin,FS_PATH=/usr/local/freeswitch/,REDIS_IP=192.168.3.200,REDIS_PORT=6379,DB_TYPE=postgres,DB_USER=duo,DB_PASSWORD=DuoS123,DB_PORT=5432,DB_HOST=192.168.3.200,DB_BASE=dvpdb,SYS_SERVICE_FILE=http://192.168.3.200:8081,SYS_SERVICE_PROFILE=1.0,SYS_SERVICE_FILE_VERSION=http://192.168.3.200:8000,SYS_SERVICE_PROFILE_VERSION=1.0';

var args = enV.split(",");
var portsArry = ports.split(",");
var exposedPortsList={};
var portBindingsList={};


//ExposedPorts: {'5060/udp': {} , '16384/udp' : {}, '16385/udp' : {}, '16386/udp' : {}, '16387/udp' : {}, '16388/udp' : {}, '16389/udp' : {}},
if(portsArry.length>0)
{
for(var i=0;i<portsArry.length;i++)
{
    // console.log("qq");
    exposedPortsList[portsArry[i]]='{}';

    var pos = portsArry[i].toString().indexOf(sub);
    var port = portsArry[i].toString().substr(0,pos);
    var resultArray=[{HostIp: svrIP, HostPort: port}];
    //console.log(result_1);
    // console.log("ddd");
    portBindingsList[portsArry[i]]=resultArray;
}
}

console.log(portsArry);
console.log(args);
console.log(portsArry.length);
console.log(exposedPortsList);
console.log(portBindingsList);

//ExposedPorts: END


imageRunnerNew.CreateContainerWithServices(exposedPortsList,image,args,portBindingsList,image);
//require('imageRunnerNew.js').CreateContainerWithServices(p_a,image,args);
//C:\nodejs\DVP-ApplicationPublisher-master\imageRunnerNew.js
//C:\nodejs\DVP-ApplicationPublisher-master\startImageRunner.js
//CreateContainerWithServices(p_a,image,args);