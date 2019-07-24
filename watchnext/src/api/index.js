import axios from "axios";
import { API_URL } from "../constants/api";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: `Bearer ${token}`
    };
  }
  return {};
};

const removeEmptyFormObject = obj => {
  const tempObj = { ...obj };
  Object.keys(tempObj).forEach(key => {
    if (tempObj[key] === "") {
      delete tempObj[key];
    }
  });

  return tempObj;
};

const createApiRequest = async ({
  method,
  data = {},
  url,
  errorHandler,
  afterSuccess
}) => {
  try {
    const headers = getHeaders();
    const dataSendType = method === "get" ? "params" : "data";
    const params = {
      method,
      headers,
      url: `${API_URL}${url}`,
      [dataSendType]: removeEmptyFormObject(data)
    };

    const response = await axios(params);
    if (afterSuccess) {
      afterSuccess(response);
    }

    return response;
  } catch (err) {
    if (errorHandler) {
      errorHandler(err);
    }

    return err;
  }
};

export default createApiRequest;
