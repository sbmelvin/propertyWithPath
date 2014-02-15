hasPropertyWithPathJS
==================

A JS method to check for the existence of a property deep within a JS Object.
Paths are key values or array indicies separated by periods.

Example Usage:

var x = { 
	y: 5
};

x.hasPropertyWithPath("y"); //Returns 5

x.hasPropertyWithPath("y.z") //Returns undefined


var x = {
	y: ['moe', 'larry', 'curly', { z: 'shemp' } ]
};

x.hasPropertyWithPath("y.0"); //Returns 'moe'
x.hasPropertyWithPath("y.3.z"); //Returns 'shemp'
x.hasPropertyWithPath("y.2.z"); //Returns undefined