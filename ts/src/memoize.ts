export const memoize = (fn: any) => {
    const cache: any = {};
    return function(...args: any){
        if(cache[args]){
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result;
        return result;
    };
};