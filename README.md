hasPropertyWithPathJS
==================

A JS method to check for the existence of a property deep within a JS Object.

Paths are key values or array indices separated by periods.

Example Usage:
```javascript
	var x = { 
		y: 5
	};
	
	// If the property exists, its value is returned.
	x.hasPropertyWithPath("y"); //Returns 5

	// If the property does not exist, undefined is returned.
	x.hasPropertyWithPath("y.z") //Returns undefined


	var x = {
		y: ['moe', 'larry', 'curly', { z: 'shemp' } ]
	};

	// Array indicies can also be used.
	x.hasPropertyWithPath("y.0"); //Returns 'moe'
	x.hasPropertyWithPath("y.3.z"); //Returns 'shemp'
	x.hasPropertyWithPath("y.2.z"); //Returns undefined
