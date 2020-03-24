import { useCallback, useState, useRef, useEffect, DependencyList } from 'react';

const noop: () => void = () => {};
type noop = () => void;
class Timer {
  private remaining: number = 0;
  private delay: number = 0;
  private cb: noop | null = null;
  private start: number = 0;
  private timerId: number = 0;

  constructor(cb: noop, delay: number) {
    this.remaining = delay;
    this.delay = delay;
    this.start = delay;
    this.timerId = delay;
    this.cb = cb;
  }
  stop = () => {
    window.clearTimeout(this.timerId);
    this.timerId = 0;
    this.remaining = this.delay;
  };
  pause = () => {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  };
  resume = () => {
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    if (this.cb) {
      this.timerId = window.setTimeout(this.cb, this.remaining);
    }
  };
}

export interface Options {
  manual?: boolean; // 是否初始化执行
  pollingInterval?: number; // 轮询的间隔毫秒
}

export interface ReturnValue<T> {
  loading: boolean;
  error?: Error;
  data?: T;
  cancel: noop;
  run: noop;
  timer: {
    stop: noop;
    resume: noop;
    pause: noop;
  };
}

function useAsync<Result = any>(
  fn: (...args: any[]) => Promise<Result>,
  deps: DependencyList = [],
  options: Options = {},
): ReturnValue<Result> {
  const [state, set] = useState<ReturnValue<Result>>({
    loading: false,
    cancel: noop,
    run: noop,
    timer: {
      stop: noop,
      resume: noop,
      pause: noop,
    },
  });
  const timer = useRef<Timer | undefined>(undefined);
  const count = useRef(0);
  const init = useRef(true);

  useEffect(() => {
    count.current += 1;
    init.current = true;
    return () => {
      count.current += 1;
    };
  }, deps);

  const run = useCallback((...args: any[]) => {
    // 确保不会返回被取消的结果
    const runCount = count.current;
    set(s => ({ ...s, loading: true }));

    return fn(...args)
      .then(data => {
        if (runCount === count.current) {
          set(s => ({ ...s, data, loading: false }));
        }
        return data;
      })
      .catch(error => {
        if (runCount === count.current) {
          set(s => ({ ...s, error, loading: false }));
        }
        return error;
      });
  }, deps);

  const intervalAsync = useCallback(
    async (...args) => {
      const runCount = count.current;
      if (!options.manual || !init.current) {
        await run(...(args || []));
      }
      if (count.current === runCount) {
        timer.current = new Timer(() => intervalAsync(...args), options.pollingInterval as number);

        //
        if (init.current && options.manual) {
          init.current = false;
        } else {
          timer.current.resume();
        }
      }
    },
    [options.pollingInterval, options.manual, run],
  );

  const reload = useCallback(
    (...args) => {
      count.current += 1;
      if (options.pollingInterval) {
        if (!options.manual) {
          stop();
        }
        intervalAsync(...args);
      } else {
        run(...(args || []));
      }
    },
    [run, options.pollingInterval],
  );
  const cancel = useCallback(() => {
    count.current += 1;
    //
    set(s => ({ ...s, error: new Error('canceled'), loading: false }));
  }, []);
  const stop = useCallback(() => {
    count.current += 1;
    // 清除计时器
    if (timer.current) {
      timer.current.stop();
    }
    set(s => ({ ...s, error: new Error('stopped'), loading: false }));
  }, []);
  const resume = useCallback(() => {
    // 回复计时器
    if (timer.current) {
      timer.current.resume();
    }
  }, []);
  const pause = useCallback(() => {
    count.current += 1;
    // 暂停计时器
    if (timer.current) {
      timer.current.pause();
    }
    set(s => ({ ...s, error: new Error('paused'), loading: false }));
  }, []);

  useEffect(
    (...args: any[]) => {
      if (options.pollingInterval) {
        intervalAsync();
      } else if (options.manual) {
        run(...(args || []));
      }
      // 清理定时器
      return () => {
        count.current += 1;
        stop();
      };
    },
    [options.manual, options.pollingInterval, run],
  );

  return {
    loading: state.loading,
    error: state.error,
    data: state.data,
    cancel,
    run: options.manual && options.pollingInterval ? resume : reload,
    timer: {
      stop,
      resume,
      pause,
    },
  };
}

export default useAsync;
