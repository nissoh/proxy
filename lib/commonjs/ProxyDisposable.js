"use strict";
var ProxyDisposable = (function () {
    function ProxyDisposable(source, sink) {
        this.source = source;
        this.sink = sink;
        this.disposed = false;
    }
    ProxyDisposable.prototype.dispose = function () {
        if (this.disposed)
            return;
        this.disposed = true;
        var remaining = this.source.remove(this.sink);
        return remaining === 0 && this.source._dispose();
    };
    return ProxyDisposable;
}());
exports.ProxyDisposable = ProxyDisposable;
//# sourceMappingURL=ProxyDisposable.js.map