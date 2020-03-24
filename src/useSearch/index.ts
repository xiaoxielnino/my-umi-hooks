import { DependencyList, useState, useMemo, useRef } from 'react';
import useUpdateEffect from '../useUpdateEffect';
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
import useAsync from '../useAsync';

export interface ReturnValue<T> {
  loading: boolean;
  data?: T;
  value: any;
  onChange: (value: any) => void;
}
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
export interface Options {
  wait?: number;
}

<<<<<<< HEAD
export default function useAntdSearch<Result>(
=======
function useSearch<Result>(
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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

<<<<<<< HEAD
  /* value 变化时，需要防抖 */
=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  useUpdateEffect(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
<<<<<<< HEAD

    timer.current = window.setTimeout(() => {
      run(value);
    }, wait);

=======
    timer.current = window.setTimeout(() => {
      run(value);
    }, wait);
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    return () => {
      window.clearTimeout(timer.current);
    };
  }, [value]);
<<<<<<< HEAD

  /* 依赖变化时，需要立即重新请求 */
=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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
<<<<<<< HEAD
=======

export default useSearch;
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
