import fetch from "isomorphic-unfetch";
import { API_URI } from "@/utils/uri";

type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface HTTPRequest {
  body?: string;
  method: RequestMethod;
  headers: { [key: string]: string };
}

interface HTTPResponse<T> {
  status?: "success" | "fail" | "error";
  message?: string;
  data?: T;
}

interface RequestBody {
  [key: string]: string | number | boolean | null | Date;
}

interface RequestOptions {
  body?: RequestBody;
}

const wrappedFetch = (endpoint: string, request: HTTPRequest) => fetch(`${API_URI}${endpoint}`, request);

class RequestError extends Error {
  constructor(
    public response: globalThis.Response,
    message?: string,
  ) {
    super(message);
  }
}

const buildRequest = (method: RequestMethod, body: RequestBody): HTTPRequest => {
  const request: HTTPRequest = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method !== "GET") {
    request.body = JSON.stringify(body);
  }

  return request;
};

const requests = {
  get: async <T>(endpoint: string): Promise<HTTPResponse<T>> => {
    const request = buildRequest("GET", {});

    const response = await wrappedFetch(endpoint, request);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new RequestError(response, json.data?.reason);
  },
  post: async <T>(endpoint: string, options?: RequestOptions): Promise<HTTPResponse<T>> => {
    const request = buildRequest("POST", options?.body || {});
    const response = await wrappedFetch(endpoint, request);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new RequestError(response, json.message ?? json.data?.reason ?? "Something went wrong");
  },
  patch: async <T>(endpoint: string, options?: RequestOptions): Promise<HTTPResponse<T>> => {
    const request = buildRequest("PATCH", options?.body || {});
    const response = await wrappedFetch(endpoint, request);
    const json = await response.json();

    if (response.status !== 200) {
      throw new RequestError(response, json.message ?? json.data?.reason ?? "Something went wrong");
    }

    return json;
  },
  put: async <T>(endpoint: string, options?: RequestOptions): Promise<HTTPResponse<T>> => {
    const request = buildRequest("PUT", options?.body || {});
    const response = await wrappedFetch(endpoint, request);
    const json = await response.json();

    if (response.status !== 200) {
      throw new RequestError(response, json.message ?? json.data?.reason ?? "Something went wrong");
    }

    return json;
  },
};

export default requests;
export { RequestError, type HTTPResponse, type RequestBody };
