import axios from "axios";
import http from "../http-common";

class RegistrasiAll {
  getAll() {
    return axios.get("/registrasi");
  }

  createData(data) {
    return axios.post(http + "/registrasi", data);
  }
}

export default new RegistrasiAll();
