import axios from "axios";

export default class HttpHelper {
  static get(obj) {
    let config = { params: obj.data };
    if (obj.token) {
      config.headers = { Authorization: obj.token };
    }
    return axios
      .get(obj.url, config)
      .then(response => {
        return response.data;
      })
      .catch(err => this.validateResponse(err));
  }

  static post(obj) {
    let config = {};
    if (obj.headers) {
      config.headers = {
        ...obj.headers
      };
    }

    return axios
      .post(obj.url, obj.data, config)
      .then(response => {
        return response.data;
      })
      .catch(err => this.validateResponse(err));
  }

  static validateResponse(err) {
    console.log(err);

    return Promise.reject("Something went wrong.");
  }
}
