function propertyWithPath(obj, path) {
    var keys = path.split('.');
    var parent = obj;
    var child;
    
    for (var i = 0; i < keys.length; i++) {
        child = keys[i];
        
        if (parent[child] === undefined) {
            return undefined;
        }
        parent = parent[child];
    }
    return parent;
};
