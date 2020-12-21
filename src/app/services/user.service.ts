import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

//   users: User[] =
//   [
//    {
//        "nrousu": 61,
//        "usuario": "114",
//        "activo": true,
//        "clave": "ahlnhTczpihljbIn",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 62,
//        "usuario": "115",
//        "activo": false,
//        "clave": "ahlnhTczpihljbIn",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 63,
//        "usuario": "116",
//        "activo": true,
//        "clave": "ahlnhTczpihljbIn",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 64,
//        "usuario": "117",
//        "activo": false,
//        "clave": "ahlnhTczpihljbIn",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 18,
//        "usuario": "admdepo",
//        "activo": true,
//        "clave": "jjiGkilAalZSikKo",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 21,
//        "usuario": "admfactur",
//        "activo": true,
//        "clave": "laiaTRyXbhiicfjl",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 8,
//        "usuario": "alejandra",
//        "activo": true,
//        "clave": "JahaecYnGioalrpu",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
//    {
//        "nrousu": 13,
//        "usuario": "alejandro",
//        "activo": false,
//        "clave": "Ialcjndimklbbbbn",
//        "nombre": "",
//        "apellido": "",
//        "email": null,
//        "direccion": "",
//        "telefono": "",
//        "imagen64": null
//    },
// ]

  constructor( private http: HttpClient) { }

  getAllUsers(){
    // return this.users
    return this.http.put('http://190.210.222.36:8083//web/pdo/DemoWS/demo/obtenerUsuarios',{});
  }

  createUser(user:User){
    return this.http.post('http://190.210.222.36:8083//web/pdo/DemoWS/demo/gestionarUsuarios&&?paccion=create', user);
  }

  deleteUser(id:number){
    return this.http.post('http://190.210.222.36:8083//web/pdo/DemoWS/demo/gestionarUsuarios&&?paccion=delete', id);
  }
}
