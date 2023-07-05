"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const memoize = (fn) => {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
};
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map