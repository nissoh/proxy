"use strict";
var most_1 = require("most");
var ProxySource_1 = require("./ProxySource");
function proxy() {
    var source = new ProxySource_1.ProxySource();
    var stream = new most_1.Stream(source);
    function attach(original) {
        source.attach(original.source);
        return original;
    }
    return { attach: attach, stream: stream };
}
exports.proxy = proxy;
//# sourceMappingURL=index.js.map