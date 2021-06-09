import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/test';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/admin/users";

  constructor(private httpClient: HttpClient) { }
  getUserList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, employee: any): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }


  getAllUser():Observable<any>{
    return this.httpClient.get<any>(`${AUTH_API}/getAllUser`);
  }
  getMessages(id:number):Observable<any>{
    return this.httpClient.get<any>(`${AUTH_API}/getMessagesByUserId/${id}`);
  }
  send(id:number,message:any):Observable<any>{
    return this.httpClient.post<any>(`${AUTH_API}/sendMessage/${id}`,message);
  }
  getUserByUserName(name:String):Observable<any>{
    return this.httpClient.get<any>(`${AUTH_API}/getUserByUserName/${name}`);
  }
  deleteUser(id:number):Observable<any>{
   return this.httpClient.delete(`${AUTH_API}/deleteUser/${id}`);
  }


}
