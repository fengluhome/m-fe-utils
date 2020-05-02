export * from './util';
export * from './boolean';
export * from './type';
export * from './cast';
export * from './number';
export * from './comp';
export * from './union';
export * from './object';
export * from './array';
export * from './tuple';
export * from './function';
export * from './ramda';

export type DeepPartial<T> = {
  [key in keyof T]?: DeepPartial<T[key]>;
};

export type Type<T> = new (...args: unknown[]) => T;
