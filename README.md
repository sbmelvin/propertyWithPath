```javascript

Object.propertyWithPath
==================

A JS method to check for the existence of a property deep within a JS Object.
Paths are key values or array indicies separated by periods.

Returns: The value of the property if it exists, otherwise it returns undefined.

Example Usage:

var x = { 
	y: 5
};

x.propertyWithPath("y"); //Returns 5

x.propertyWithPath("y.z") //Returns undefined


var x = {
	y: ['moe', 'larry', 'curly', { z: 'shemp' } ]
};

x.propertyWithPath("y.0"); //Returns 'moe'
x.propertyWithPath("y.3.z"); //Returns 'shemp'
x.propertyWithPath("y.2.z"); //Returns undefined
