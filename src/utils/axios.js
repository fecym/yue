import axios from 'axios';
import { Dialog, Toast } from 'vant';

// loading 提示
let loading = {};
let timer = null;
// loading 接口不 loading 白名单
const notLoadingWhiteList = ['file/upload'];

const _axios = axios.create({
  baseURL: process.env.VUE_APP_API_PATH,
});

const setHeaderToken = () => {
  _axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
};

_axios.interceptors.request.use(
  config => {
    const { url } = config;
    const isLoading = notLoadingWhiteList.some(whiteUrl => url.includes(whiteUrl));
    if (!isLoading) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        loading = Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 0,
        });
      }, 300);
    }
    return config;
  },
  error => {
    clearTimeout(timer);
    loading.clear && loading.clear();
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    clearTimeout(timer);
    loading.clear && loading.clear();
    if ('' + response.data.code === '0') {
      return response.data.data;
    } else if (
      '' + response.data.code === '20004' ||
      '' + response.data.code === '20005' ||
      '' + response.data.code === '20006'
    ) {
      //token失效的情况
      localStorage.clear();
      location.reload();
    } else {
      let isJson, msg;
      try {
        msg = JSON.parse(response.data.msg);
        isJson = true;
      } catch (e) {
        msg = response.data.msg;
        isJson = false;
      }

      Toast(isJson ? msg[Object.keys(msg)[0]] : msg);
      return Promise.reject(response.data);
    }
  },
  function(error) {
    clearTimeout(timer);
    loading.clear && loading.clear();
    if (!error.response) {
      Toast('网络异常，请检查网络后重试！');
      return Promise.reject(error);
    }
    let msg;
    switch (error.response.status) {
      case 401:
        localStorage.clear();
        // location.reload();
        msg = '未授权';
        break;
      case 403:
        msg = '请求被屏蔽';
        break;
      case 404:
        msg = '请求未找到';
        break;
      case 405:
        msg = '请求不被允许';
        break;
      case 500:
        msg = '服务器错误';
        break;
      default:
        msg = '请求出错';
        break;
    }
    Toast(msg);
    return Promise.reject(error.response);
  }
);
export default _axios;
export { setHeaderToken };
