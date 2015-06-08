
var irobot = require('irobot');
var keypress = require('keypress');
var robot = new irobot.Robot('/dev/ttyO0');
robot.on('ready', function () {
  console.log('READY');
});

// robot.on('sensordata', function (data) {
//   console.log('SENSOR DATA', data);
// });

 robot.on('bump', function (e) { 
console.log('BUMP', e);
	function drive(){
		data = {left:-50, right: 50};
		robot.drive(data);
	};
	function drive1(){
		data = {left: 40, right: 40};
		robot.drive(data);
	}
	function stop(){
		data = {left: 0, right: 0};
		robot.drive(data);
	}
setTimeout(drive,0);
setTimeout(drive1, 8000);
setTimeout(stop, 13000);
});

robot.on('button', function (e) { console.log('BUTTON', e); 
	data = {left:-50, right: 50};
	robot.drive(data);
});
robot.on('cliff', function (e) { console.log('CLIFF', e);
 clearTimeout(drive1); 
	data = {left:0, right:0};
	robot.drive(data);
});
robot.on('ir', function (e) { console.log('IR', e); });
robot.on('mode', function (e) { console.log('MODE', e);
});
robot.on('overcurrent', function (e) { console.log('OVERCURRENT', e); });
robot.on('virtualwall', function (e) { console.log('VIRTUALWALL', e); });
robot.on('wall', function (e) { console.log('WALL', e); });
robot.on('wheeldrop', function (e) { console.log('WHEELDROP', e); });
