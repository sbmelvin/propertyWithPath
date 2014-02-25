propertyWithPath
==================

A JS method to check for the existence of a property deep within a JS Object.
Paths are key values or array indicies separated by periods.

Returns: The value of the property if it exists, otherwise it returns undefined.

Example Usage:

```javascript
var x = { 
	y: 5
};

propertyWithPath(x, "y"); //Returns 5

propertyWithPath(x, "y.z") //Returns undefined


var x = {
	y: ['moe', 'larry', 'curly', { z: 'shemp' } ]
};

propertyWithPath(x, "y.0"); //Returns 'moe'
propertyWithPath(x, "y.3.z"); //Returns 'shemp'
propertyWithPath(x, "y.2.z"); //Returns undefined
