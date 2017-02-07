"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var most_1 = require("most");
var multicast_1 = require("@most/multicast");
var ProxyDisposable_1 = require("./ProxyDisposable");
var neverSource = most_1.never().source;
var ProxySource = (function (_super) {
    __extends(ProxySource, _super);
    function ProxySource() {
        var _this = _super.call(this, neverSource) || this;
        // ProxySource specific
        _this.attached = false;
        _this.running = false;
        _this.sinks = [];
        return _this;
    }
    ProxySource.prototype.run = function (sink, scheduler) {
        this.add(sink);
        if (this.attached && !this.running) {
            this.running = true;
            this._disposable = this.source.run(this, scheduler);
            return this._disposable;
        }
        return new ProxyDisposable_1.ProxyDisposable(this, sink);
    };
    ProxySource.prototype.attach = function (source) {
        if (this.attached)
            throw new Error('Can only proxy 1 stream');
        this.attached = true;
        if (this.sinks.length)
            this._disposable = source.run(this, most_1.defaultScheduler);
        else
            this.source = source;
    };
    ProxySource.prototype.end = function (time, value) {
        this.attached = false;
        this.running = false;
        return _super.prototype.end.call(this, time, value);
    };
    return ProxySource;
}(multicast_1.MulticastSource));
exports.ProxySource = ProxySource;
//# sourceMappingURL=ProxySource.js.map