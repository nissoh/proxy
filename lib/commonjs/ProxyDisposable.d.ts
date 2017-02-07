import { Disposable, Sink } from 'most';
import { ProxySource } from './ProxySource';
export declare class ProxyDisposable<T> implements Disposable<T> {
    private source;
    private sink;
    private disposed;
    constructor(source: ProxySource<T>, sink: Sink<T>);
    dispose(): any;
}
