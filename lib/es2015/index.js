import { Stream } from 'most';
import { ProxySource } from './ProxySource';
export function proxy() {
    const source = new ProxySource();
    const stream = new Stream(source);
    function attach(original) {
        source.attach(original.source);
        return original;
    }
    return { attach, stream };
}
//# sourceMappingURL=index.js.map