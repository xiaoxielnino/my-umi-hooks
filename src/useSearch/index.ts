import { DependencyList, useState, useMemo, useRef } from 'react';
import useUpdateEffect from '../useUpdateEffect';
import useAsync from '../useAsync';

export interface ReturnValue<T> {
  loading: boolean;
  data?: T;
  value: any;
  onChange: (value: any) => void;
}
export interface Options {
  wait?: number;
}

function useSearch<Result>(
  fn: (value: any) => Promise<Result>,
  deps: DependencyList = [],
  options: Options = {},
): ReturnValue<Result> {
  const [value, setValue] = useState<any>(0);

  const timer = useRef<number>();

  const { loading, data, run } = useAsync<Result>(fn, [value, ...deps], {
    manual: true,
  });

  const wait: number = useMemo(() => (options.wait === undefined ? 300 : options.wait), [
    options.wait,
  ]);

  useUpdateEffect(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      run(value);
    }, wait);
    return () => {
      window.clearTimeout(timer.current);
    };
  }, [value]);
  useUpdateEffect(() => {
    run(value);
  }, deps);

  return {
    data,
    loading,
    value,
    onChange: setValue,
  };
}

export default useSearch;
