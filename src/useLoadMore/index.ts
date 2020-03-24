<<<<<<< HEAD
import { DependencyList, RefObject, useEffect, useState, useCallback, useRef } from 'react';
import useUpdateEffect from '../useUpdateEffect';

=======
import { RefObject, useEffect, useState, useCallback, useRef, DependencyList } from 'react';
import useUpdateEffect from '../useUpdateEffect';

const noop: () => void = () => {};
type noop = () => void;
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
export interface ReturnValue<Item> {
  loading: boolean;
  loadingMore: boolean;
  data: Item[];
<<<<<<< HEAD
  reload: () => void;
  loadMore: () => void;
  noMore: boolean;
  total: number | undefined;
}

export interface Options<Result, Item> {
  initPageSize?: number;
  incrementSize?: number;
=======
  reload: noop;
  loadMore: noop;
  noMore: boolean;
  total: number | undefined;
}
export interface Options<Result, Item> {
  initPageSize?: number;
  peerPageSize?: number;
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  itemKey?: string | ((record: Item, index: number) => string);
  formatResult?: (
    x: Result,
  ) => {
    total: number;
    data: Item[];
  };
  ref?: RefObject<HTMLElement>;
  threshold?: number;
}
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
export interface FnParams {
  page: number;
  pageSize: number;
  offset: number;
  id?: any;
  startTime?: number;
}

export default function useLoadMore<Result = any, Item = any>(
  fn: (params: FnParams) => Promise<Result>,
  deps: DependencyList = [],
  options: Options<Result, Item>,
): ReturnValue<Item> {
<<<<<<< HEAD
  /* 初始化值 */
  const { itemKey, initPageSize = 10, formatResult, ref, threshold = 100 } = options;
  let { incrementSize } = options;

  if (!incrementSize) {
    incrementSize = initPageSize;
  }
=======
  //初始化值
  const { itemKey, initPageSize = 10, formatResult, ref, threshold = 100 } = options;
  let { peerPageSize } = options;
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>();
  const [data, setData] = useState<Item[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

<<<<<<< HEAD
  /* 控制重新执行 */
  const [count, setCount] = useState<number>(0);

  /* 控制异步请求时序 */
  const runCount = useRef(0);

  /* 开始的时间戳 */
  const startTime = useRef(new Date().getTime());

  /* id 模式下读取 Key */
=======
  // 控制重新执行
  const [count, setCount] = useState<number>(0);

  // 控制异步请求时序
  const runCount = useRef(0);

  // 开始的时间戳
  const startTime = useRef(new Date().getTime());

>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  const getItemKey = useCallback(
    (item: Item, index: number) => {
      const key =
        typeof itemKey === 'function' ? itemKey(item, index) : (item as any)[itemKey as any];
      return key === undefined ? index : key;
    },
    [itemKey],
  );

  const run = useCallback(() => {
    runCount.current += 1;
    const currentCount = runCount.current;
    setLoading(true);

    const params: FnParams = {
      page,
<<<<<<< HEAD
      pageSize: (page === 1 ? initPageSize : incrementSize) as number,
=======
      pageSize: (page === 1 ? initPageSize : peerPageSize) as number,
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      offset: data.length,
      startTime: startTime.current,
    };

<<<<<<< HEAD
    /* id 模式需要增加最后一个 id */
    if (itemKey) {
      params.id = data.length > 0 ? getItemKey(data[data.length - 1], data.length - 1) : undefined;
    }

=======
    //
    if (itemKey) {
      params.id = data.length > 0 ? getItemKey(data[data.length - 1], data.length - 1) : undefined;
    }
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    fn(params).then((result: Result) => {
      if (currentCount !== runCount.current) {
        return;
      }
      setLoading(false);
<<<<<<< HEAD
      /* 格式化 result */
=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      const { total: currentTotal, data: currentData } = (formatResult
        ? formatResult(result)
        : result) as any;
      setData(data.concat(currentData));
      setTotal(currentTotal);
    });
<<<<<<< HEAD
  }, [page, initPageSize, incrementSize, data]);

=======
  }, [page, initPageSize, peerPageSize, data]);

  const reload = useCallback(() => {
    setPage(1);
    setData([]);
    startTime.current = new Date().getTime();
    setCount(count + 1);
  }, [count]);
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  const loadMore = useCallback(() => {
    if (total && data.length >= total) {
      return;
    }
    setPage(page + 1);
    setCount(count + 1);
  }, [page, count, data, total]);

<<<<<<< HEAD
  const reload = useCallback(() => {
    setPage(1);
    setData([]);
    startTime.current = new Date().getTime();
    setCount(count + 1);
  }, [count]);

  /* 上拉加载的方法 */
=======
  // 上拉加载的方法
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  const scrollMethod = useCallback(() => {
    if (loading || !ref || !ref.current) {
      return;
    }
    if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
      loadMore();
    }
  }, [loading, ref, loadMore]);

<<<<<<< HEAD
  /* 如果有 ref，则会上拉加载更多 */
=======
  // 如果有ref, 则会上拉加载更多
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  useEffect(() => {
    if (!ref || !ref.current) {
      return () => {};
    }
    ref.current.addEventListener('scroll', scrollMethod);
    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', scrollMethod);
      }
    };
  }, [scrollMethod]);

<<<<<<< HEAD
  /* 只有初始化，或者 count 变化时，才会执行 run */
=======
  // 只有初始化 或者count变化的时候才会执行run
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  useEffect(() => {
    run();
    return () => {
      runCount.current += 1;
    };
  }, [count]);

<<<<<<< HEAD
  /* deps 变化后，重新 reload */
=======
  // deps变化后，重新reload
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  useUpdateEffect(() => {
    reload();
  }, deps);

  return {
    data,
    loading: loading && page === 1,
    loadingMore: loading && page > 1,
    reload,
    loadMore,
    total,
    noMore: !!total && data.length >= total,
  };
}
