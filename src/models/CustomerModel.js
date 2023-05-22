import axios from "axios";

class CustomerModel {
    constructor(){
        this.api_url = 'http://127.0.0.1:8000/api/auth/register';
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    find(id){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url+'/'+id)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    register(data){
        return new Promise( (resolve, reject) => {
            axios
            .post(this.api_url,data )
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    
 
  
}
export default new CustomerModel();