Object.prototype.hasPropertyWithPath = function (path) {
    var keys = path.split('.');
    var parent = this;
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