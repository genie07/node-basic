var os = require("os"); // os module을 가져와 os 변수에 저장

var hostname = os.hostname(); // 운영체제의 호스트 이름을 리턴함
var type = os.type(); // 운영체제의 이름을 리턴함
var platform = os.platform(); // 운영체제의 플랫폼을 리턴함
var arch = os.arch(); // 운영체제의 아키텍쳐를 리턴함
var release = os.release(); // 운영체제의 버젼을 리턴함
var uptime = os.uptime();// 운영체제가 실행된 시간을 리턴함
var loadavg = os.loadavg(); // 로드 에버리지 정보를 담은 배열을 리턴함
var totalmem = os.totalmem(); // 시스템의 총 메모리를 리턴함
var freemem = os.freemem(); // 시스템의 사용 가능한 메모리를 리턴함
var cpus = os.cpus(); // CPU의 정보를 담을 객체를 리턴함.
var networkInterfaces = os.networkInterfaces(); // 네트워크 인터페이스의 정보를 담은 배열을 리턴함.

console.log("hostname : " + hostname);
console.log("type : " + type);
console.log("platform : " + platform);
console.log("arch : " + arch);
console.log("release : " + release);
console.log("uptime : " + uptime);
console.log("loadavg : " + loadavg);
console.log("totalmem : " + totalmem);
console.log("freemem : " + freemem);
console.log("cpus : " + cpus);
console.log("networkInterfaces : " + networkInterfaces);
