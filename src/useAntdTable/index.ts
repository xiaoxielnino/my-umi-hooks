<<<<<<< HEAD
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { PaginationConfig } from 'antd/lib/pagination';
import { DependencyList, useEffect, useReducer, useRef } from 'react';
=======
import { DependencyList, useEffect, useRef, useReducer } from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { PaginationConfig } from 'antd/lib/pagination';
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
import useUpdateEffect from '../useUpdateEffect';

interface UseTableFormUtils extends WrappedFormUtils {
  getFieldInstance?: (name: string) => {};
}
<<<<<<< HEAD
=======

>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
export interface ReturnValue {
  data: unknown;
  loading: boolean;
  current: number;
  pageSize: number;
  changeTable: (e: PaginationConfig) => void;
  refresh: () => void;
  form?: {
    searchType: 'simple' | 'advance';
    changeSearchType: () => void;
    search: () => void;
  };
}

export interface Options {
  defaultPageSize?: number;
  id?: string;
  form?: UseTableFormUtils;
}

export interface FnParams {
  current: number;
  pageSize: number;
  [key: string]: any;
}

interface IHistoryData {
  [key: string]: unknown;
}
class UseTableInitState {
  // 搜索类型，简单、高级
  searchType: 'simple' | 'advance' = 'simple';

  // 数据加载状态
  loading: boolean = false;

  // 当前页码
  current: number = 1;

  // 分页大小
  pageSize: number = 10;

  // 表单数据
  formData: { simple: IHistoryData; advance: IHistoryData } = { simple: {}, advance: {} };

  // 服务端返回的数据
  data: unknown = null;

  // 计数器
  count: number = 0;
}

<<<<<<< HEAD
// 初始值
const initState = new UseTableInitState();

// 缓存
=======
const initState = new UseTableInitState();

>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
const cacheData: { [key: string]: UseTableInitState } = {};

const reducer = (state = initState, action: { type: string; payload?: {} }) => {
  switch (action.type) {
    case 'updateState':
      return { ...state, ...action.payload };
    case 'updateFormData':
<<<<<<< HEAD
      return { ...state, formData: { ...state.formData, ...action.payload } };
=======
      return { ...state, historyFieldData: { ...state.formData, ...action.payload } };
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    default:
      throw new Error();
  }
};
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
export default function useAntdTable(
  fn: (params: FnParams) => Promise<any>,
  deps: DependencyList = [],
  options: Options = {},
): ReturnValue {
  const { defaultPageSize = 10, id, form } = options;
<<<<<<< HEAD
  const [state, dispatch] = useReducer(reducer, { ...initState, pageSize: defaultPageSize });
  const stateRef = useRef<UseTableInitState>(({} as unknown) as UseTableInitState);

  /* 控制异步请求时序 */
  const runCount = useRef(0);

=======
  const [state, dispatch] = useReducer(reducer, initState);
  const stateRef = useRef<UseTableInitState>(({} as unknown) as UseTableInitState);

  // 控制异步请求时序
  const runCount = useRef(0);
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  stateRef.current = state;

  const reload = () => {
    dispatch({
      type: 'updateState',
      payload: {
        current: 1,
        count: state.count + 1,
      },
    });
  };

  useEffect(() => {
<<<<<<< HEAD
    /* 有缓存，恢复 */
=======
    // 有缓存， 恢复
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    if (id) {
      if (cacheData[id]) {
        const cache = cacheData[id];
        dispatch({
          type: 'updateState',
          payload: {
<<<<<<< HEAD
            // 改变 current、pageSize 会重新加载数据
=======
            //
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
            current: cache.current,
            pageSize: cache.pageSize,
            searchType: cache.searchType,
            formData: cache.formData,
<<<<<<< HEAD
            // 恢复 cache 后 强制刷新
            count: state.count + 1,
          },
        });
        /* 如果有 form ,还原 form 数据 */
=======
            // 恢复cache后强制刷新
            count: state.count + 1,
          },
        });
        // 如果有form，还原form数据
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
        if (form) {
          const cacheFormData = cache.formData[cache.searchType];
          form.setFieldsValue(cacheFormData);
        }
      } else {
        dispatch({
          type: 'updateState',
<<<<<<< HEAD
          payload: { count: state.count + 1 },
        });
      }

      /* 如果有 id，在销毁时缓存数据 */
=======
          payload: {
            count: state.count + 1,
          },
        });
      }
      // 如果有id， 在销毁是缓存数据
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      return () => {
        cacheData[id] = stateRef.current;
      };
    }
<<<<<<< HEAD

    /* 没有缓存，请求数据 */
    dispatch({
      type: 'updateState',
      payload: { count: state.count + 1 },
=======
    // 没有缓存，请求数据
    dispatch({
      type: 'updateState',
      payload: {
        count: state.count + 1,
      },
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    });
    return () => {};
  }, []);

<<<<<<< HEAD
  /* deps 变化后，重置表格 */
=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  useUpdateEffect(() => {
    reload();
  }, deps);

  useUpdateEffect(() => {
    runCount.current += 1;
    const currentCount = runCount.current;
<<<<<<< HEAD

    dispatch({
      type: 'updateState',
      payload: { loading: true },
    });

=======
    dispatch({
      type: 'updateState',
      payload: {
        loading: true,
      },
    });
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    const queryParams = form ? state.formData[state.searchType] : {};

    fn({
      current: state.current,
      pageSize: state.pageSize,
      ...queryParams,
    }).then(res => {
      if (currentCount !== runCount.current) {
        return;
      }
      dispatch({
        type: 'updateState',
<<<<<<< HEAD
        payload: { loading: false, data: res },
=======
        payload: {
          loading: false,
          data: res,
        },
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      });
    });
  }, [state.current, state.pageSize, state.count]);

<<<<<<< HEAD
  // 表格翻页
=======
  /**
   * 表格翻页
   * current 页码
   * focusUpdate 是否使用查询条件刷新当前页
   */
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  const changeTable = (e: PaginationConfig) => {
    dispatch({
      type: 'updateState',
      payload: {
        current: e.current,
        pageSize: e.pageSize,
      },
    });
  };

  // 表单搜索
  const search = (
<<<<<<< HEAD
    e?: string | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,
=======
    e: string | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  ) => {
    if (!form) {
      return;
    }

    if (e && (e as React.MouseEvent<HTMLElement>).preventDefault) {
      (e as React.MouseEvent<HTMLElement>).preventDefault();
    }
<<<<<<< HEAD
    const filedlsValue = form.getFieldsValue();
    const filterFiledsValue: IHistoryData = {};
    Object.keys(filedlsValue).forEach((key: string) => {
      if (form.getFieldInstance && form.getFieldInstance(key)) {
        filterFiledsValue[key] = filedlsValue[key];
=======
    const fieldsValue = form.getFieldsValue();
    const filterFieldsValue: IHistoryData = {};
    Object.keys(fieldsValue).forEach((key: string) => {
      if (form.getFieldInstance && form.getFieldInstance(key)) {
        filterFieldsValue[key] = fieldsValue[key];
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
      }
    });

    // 保存当前表单的用户输入数据
    dispatch({
      type: 'updateFormData',
      payload: {
<<<<<<< HEAD
        [state.searchType]: filterFiledsValue,
      },
    });

    reload();
  };

=======
        [state.searchType]: filterFieldsValue,
      },
    });
    reload();
  };
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  // 切换搜索类型
  const changeSearchType = () => {
    if (!form) {
      return;
    }
    form.resetFields();
    const targetSearchType = state.searchType === 'simple' ? 'advance' : 'simple';
<<<<<<< HEAD
=======

>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
    dispatch({
      type: 'updateState',
      payload: {
        searchType: targetSearchType,
      },
    });
    const currentFormData = state.formData[targetSearchType];
    form.setFieldsValue(currentFormData);
    reload();
  };

  const refresh = () => {
    dispatch({
      type: 'updateState',
      payload: {
        count: state.count + 1,
      },
    });
  };

  const result: ReturnValue = {
    changeTable,
    data: state.data,
    current: state.current,
    pageSize: state.pageSize,
    loading: state.loading,
    refresh,
  };
  if (form) {
    result.form = {
      search,
      searchType: state.searchType,
      changeSearchType,
    };
  }
<<<<<<< HEAD

=======
>>>>>>> 00dabf5cc44c8cc9f228c5eb881939ccb6ef2d17
  return result;
}
