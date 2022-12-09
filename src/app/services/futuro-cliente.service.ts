import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCliente } from '../models/futuro-cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FuturoClienteService {
  
  constructor(private http: HttpClient) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/futurocliente`).pipe(
      catchError(error => {
        alert("Erro ao buscar futuro cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<FuturoCliente> {
    return this.http.delete<FuturoCliente>(`${API_CONFIG.baseUrl}/futurocliente/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir futuro cliente!");
        console.error(error);
        return EMPTY;
      })
    )
  }

}
