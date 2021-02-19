import http from '../http-common';

class RegistrasiAll {
    getAll(){
        return http.get("/registrasi");
    }

    createData(data){
        return http.post("/registrasi", data);
    }
}

export default new RegistrasiAll();