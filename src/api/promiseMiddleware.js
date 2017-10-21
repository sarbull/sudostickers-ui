import _ from 'lodash';

export function reportError(error) {
  try {
    throw error;
  } catch (e) {
    console.log(e);
  }
}

export const ERROR_REPORT='ERROR_REPORT';
export function errorReport(payload) {
  return {
    type: ERROR_REPORT,
    value: payload
  };
}

export function promiseMiddleware(store) {
  return next => action => {
    const { promise, type, ...rest } = action;

    if(!promise) {
      return next(action);
    }

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({...rest, type: REQUEST});

    return promise
      .then(request => {
        next({ ...rest, request, type: SUCCESS });

        return _.get(request, 'data');
      })
      .catch(error => {
        store.dispatch(errorReport({
          data: error.data,
          status: error.status || '',
          text: error.statusText || error.toString(),
          statusUrl: error.config ? error.config.url : ''
        }));

        next({ ...rest, error, type: FAILURE });

        reportError(error);

        return error;
      });

  };
}