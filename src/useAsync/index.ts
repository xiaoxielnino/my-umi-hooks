<<<<<<< HEAD
import { DependencyList, useCallback, useState, useRef, useEffect } from 'react';

class Timer {
  private remaining: number = 0;

  private delay: number = 0;

  private cb: (() => void) | null = null;

  private start: number = 0;

  private timerId: number = 0;

  constructor(cb: () => void, delay: number) {
=======
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
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    this.remaining = delay;
    this.delay = delay;
    this.start = delay;
    this.timerId = delay;
    this.cb = cb;
  }
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  stop = () => {
    window.clearTimeout(this.timerId);
    this.timerId = 0;
    this.remaining = this.delay;
  };
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  pause = () => {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  };
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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

<<<<<<< HEAD
type noop = (...args: any[]) => void;
const noop: noop = () => {};

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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

<<<<<<< HEAD
export default function useAsync<Result = any>(
=======
function useAsync<Result = any>(
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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

<<<<<<< HEAD
  const stop = useCallback(() => {
    count.current += 1;
    // 清除计时器
    if (timer.current) {
      timer.current.stop();
    }
    set(s => ({ ...s, error: new Error('stopped'), loading: false }));
  }, []);

  const pause = useCallback(() => {
    count.current += 1;
    // 暂停计时器
    if (timer.current) {
      timer.current.pause();
    }
    set(s => ({ ...s, error: new Error('paused'), loading: false }));
  }, []);

  const resume = useCallback(() => {
    // 恢复计时器
    if (timer.current) {
      timer.current.resume();
    }
  }, []);

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  const run = useCallback((...args: any[]) => {
    // 确保不会返回被取消的结果
    const runCount = count.current;
    set(s => ({ ...s, loading: true }));
<<<<<<< HEAD
=======

>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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
<<<<<<< HEAD
        // 只初始化定时器，不开始计时
        timer.current = new Timer(() => intervalAsync(...args), options.pollingInterval as number);

        // 如果设置了 manual，则默认不开始计时
        if (init.current && options.manual) {
          init.current = false;
        } else {
          // 开始计时
=======
        timer.current = new Timer(() => intervalAsync(...args), options.pollingInterval as number);

        //
        if (init.current && options.manual) {
          init.current = false;
        } else {
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
          timer.current.resume();
        }
      }
    },
    [options.pollingInterval, options.manual, run],
  );

  const reload = useCallback(
    (...args) => {
<<<<<<< HEAD
      // 防止上次数据返回
      count.current += 1;
      if (options.pollingInterval) {
        if (!options.manual) {
          // 如果有 polling，清理上次的计时器
=======
      count.current += 1;
      if (options.pollingInterval) {
        if (!options.manual) {
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
          stop();
        }
        intervalAsync(...args);
      } else {
<<<<<<< HEAD
        // 直接运行
=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
        run(...(args || []));
      }
    },
    [run, options.pollingInterval],
  );
<<<<<<< HEAD

  const cancel = useCallback(() => {
    count.current += 1;
    // throw an error
    set(s => ({ ...s, error: new Error('canceled'), loading: false }));
  }, []);
=======
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
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17

  useEffect(
    (...args: any[]) => {
      if (options.pollingInterval) {
        intervalAsync();
<<<<<<< HEAD
      } else if (!options.manual) {
        // 直接值行
        run(...(args || []));
      }

=======
      } else if (options.manual) {
        run(...(args || []));
      }
      // 清理定时器
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      return () => {
        count.current += 1;
        stop();
      };
    },
<<<<<<< HEAD
    [options.manual, options.pollingInterval, run, intervalAsync],
=======
    [options.manual, options.pollingInterval, run],
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
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
<<<<<<< HEAD
=======

export default useAsync;
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
