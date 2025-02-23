import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/Usuarios';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = `${base_url}/usuarios`;
  private listaCambio=new Subject<Usuarios[]>();
  constructor(private http:HttpClient) { }
  
  list(){
    return this.http.get<Usuarios[]>(this.url);
  }

  insert(us:Usuarios){
    return this.http.post(this.url,us);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Usuarios[]){
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }

  update(us: Usuarios) {
    return this.http.put(this.url,us);
  }
}
