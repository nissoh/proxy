import { never, defaultScheduler } from 'most';
import { MulticastSource } from '@most/multicast';
import { ProxyDisposable } from './ProxyDisposable';
const neverSource = never().source;
export class ProxySource extends MulticastSource {
    constructor() {
        super(neverSource);
        // ProxySource specific
        this.attached = false;
        this.running = false;
        this.sinks = [];
    }
    run(sink, scheduler) {
        this.add(sink);
        if (this.attached && !this.running) {
            this.running = true;
            this._disposable = this.source.run(this, scheduler);
            return this._disposable;
        }
        return new ProxyDisposable(this, sink);
    }
    attach(source) {
        if (this.attached)
            throw new Error('Can only proxy 1 stream');
        this.attached = true;
        if (this.sinks.length)
            this._disposable = source.run(this, defaultScheduler);
        else
            this.source = source;
    }
    end(time, value) {
        this.attached = false;
        this.running = false;
        return super.end(time, value);
    }
}
//# sourceMappingURL=ProxySource.js.map