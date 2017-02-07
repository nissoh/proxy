import { Source, Sink, Disposable, Scheduler } from 'most';
import { MulticastSource } from '@most/multicast';
import { ProxyDisposable } from './ProxyDisposable';
export declare class ProxySource<T> extends MulticastSource<T> implements Source<T>, Sink<T> {
    private attached;
    private running;
    private source;
    private sinks;
    private _disposable;
    constructor();
    run(sink: Sink<T>, scheduler: Scheduler): Disposable<T> | ProxyDisposable<T>;
    attach(source: Source<T>): void;
    end(time: number, value: T): void;
}
