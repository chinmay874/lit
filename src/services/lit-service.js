import http from "../http-common";

export default function LitDataService(){
//   getAll() {
//     return http.get("/tutorials");
//   }

  // get(id) {
  //   return http.get(`/login/${id}`);
  // }

  const create=(data)=>{
    return http.post("/register", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}