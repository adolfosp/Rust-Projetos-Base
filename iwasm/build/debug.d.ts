/** Exported memory */
export declare const memory: WebAssembly.Memory;
// Exported runtime interface
export declare function __new(size: number, id: number): number;
export declare function __pin(ptr: number): number;
export declare function __unpin(ptr: number): void;
export declare function __collect(): void;
export declare const __rtti_base: number;
/**
 * assembly/index/minusOne
 * @param n `i32`
 * @returns `i32`
 */
export declare function minusOne(n: number): number;
/**
 * assembly/index/fizzbuzz
 * @param n `i32`
 * @returns `~lib/string/String | null`
 */
export declare function fizzbuzz(n: number): string | null;
