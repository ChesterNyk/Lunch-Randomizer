import axios from "axios";

interface ApiResponse {
  result: string;
  data: any;
  errorCode: number;
  errorMessage: string;
}

interface ApiResponseSuccess {
  error: false;
  data: any;
}

interface ApiResponseError {
  error: true;
  data: {
    errorCode: number;
    errorMessage: string;
  };
}

const host: string = window.location.protocol + '//' + window.location.hostname + ':8080/';

const success = (
  response: ApiResponse,
  next: (data: ApiResponseSuccess | ApiResponseError) => void
) => {
  if (next) {
    if (response.result === "Success") {
      next({
        error: false,
        data: response.data,
      });
    } else {
      next({
        error: true,
        data: {
          errorCode: response.errorCode,
          errorMessage: response.errorMessage,
        },
      });
    }
  }
};

const fail = (
    err: any, // Changed 'response' to 'err'
    next: (data: ApiResponseSuccess | ApiResponseError) => void
  ) => {
    if (next) {
      next({
        error: true,
        data: {
          errorCode: err.response?.status || 500,
          errorMessage: err.message || 'An error occurred',
        },
      });
    }
  };


  export const getRequest = (path: string, next: any, param: any) => {
    const header = {
      'Content-Type': 'application/json',
    };
  
    axios
      .get(host + path, {
        params: param,
        headers: header,
        withCredentials: false,
      })
      .then((response) => {
        return success(response.data, next); // Pass 'response.data' to 'success' function
      })
      .catch((err) => {
        return fail(err, next);
      });
  };

  export const postRequest = (path: string, next: any, body: any) => {
    const header = {
      'Content-Type': 'application/json',
    };
  
    axios
      .post(host + path, body, {
        headers: header,
        withCredentials: false,
      })
      .then((response) => {
        return success(response.data, next); // Pass 'response.data' to 'success' function
      })
      .catch((err) => {
        return fail(err, next);
      });
  };