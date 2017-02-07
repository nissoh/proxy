import { Stream } from 'most';
export interface Proxy<T> {
    attach(stream: Stream<T>): Stream<T>;
    stream: Stream<T>;
}
export declare function proxy(): Proxy<any>;
export declare function proxy<T>(): Proxy<T>;
