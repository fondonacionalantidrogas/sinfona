import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import jwt_decode from "jwt-decode";


export interface IAPICore {
  id?: string
  concurrencia?: boolean
  ruta?: string
  funcion?: string
  parametros?: string
  protocolo?: string
  retorna?: boolean
  migrar?: false
  modulo?: string
  relacional?: boolean
  valores?: any
  coleccion?: string
  version?: string
  http?: number
  https?: number
  consumidores?: string
  puertohttp?: number
  puertohttps?: number
  driver?: string
  query?: string
  metodo?: string
  tipo?: string
  prioridad?: string
  logs?: boolean
  descripcion?: string
  entorno?: string
  cache?: number
  estatus?: boolean
  categoria?: string
  entradas?: string
  salidas?: string
  funcionalidad?: string
}

export interface ObjectoGenerico {
  idw: number,
  nomb: string,
  obse: string
}

export interface DocumentoAdjunto {
	archivo	 ?:	string //CodeEncrypt
	usuario	 ?:	string
	documento	 ?:	string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //Dirección Get para servicios en la página WEB
  URL = environment.API;

  hash = ':c521f27fb1b3311d686d511b668e5bd4'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  };

  constructor(private router: Router, private http: HttpClient) {

  }

  Guardar(xAPI: IAPICore, sApi: string): Observable<any> {

    var url = this.URL + sApi + this.hash;
    return this.http.post<any>(url, xAPI, this.httpOptions);
  }

  
  Listar(): Observable<any> {
    var url = this.URL + 'listar';
    return this.http.get<any>(url, this.httpOptions);
  }

  //Ejecutar Api generales
  Ejecutar(xAPI: IAPICore): Observable<any> {
    var url = this.URL + "crud" + this.hash;
    // if( xAPI.valores  != undefined ){
    //     xAPI.valores = JSON.parse(xAPI.parametros);
    // } 
    return this.http.post<any>(url, xAPI, this.httpOptions);
  }

  //ListarModulos
  ListarModulos(): Observable<any> {
    var url = this.URL + "lmodulos";
    return this.http.get<any>(url, this.httpOptions)
  }

  DecodeJWT(){
    var token = sessionStorage.getItem('token');
    var decodedHeader = jwt_decode(token);
    return decodedHeader
  }

     //EnviarArchivos generales
     EnviarArchivos(frm : FormData ) : Observable<any>{
      var httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + sessionStorage.getItem('token') 
        })
      };
      return this.http.post<any>(this.URL + "subirarchivos", frm, httpOptions);
    }

  //ListarArchivos
  ListarArchivos(id: string): Observable<any> {
    var url = this.URL + "larchivos/" + id;
    return this.http.get<any>(url, this.httpOptions)
  }

  //ListarArchivos
  ProcesarArchivos(obj: any): Observable<any> {
    var url = this.URL + "phtml";
    return this.http.post<any>(url, obj, this.httpOptions)
  }


  GenerarCodigo(Entradas: string, funcion: string, ruta: string): string {
    const json = JSON.parse(Entradas)
    var strI = '/*!\n'
    strI += '* Code Epic Technologies v1.0.1 (https://dev.code-epic.com)\n'
    strI += '* Copyright 2020-2022 CodeEpicTechnologies <http://code-epic.com>\n'
    strI += '* Licensed under MIT (https://code-epic.github.io)\n'
    strI += '*/\n'
    strI += 'export interface ' + funcion + ' {\n'
    json.forEach(value => {
      value.entradas.forEach(e => {
        strI += '\t' + e.alias + '\t ?:\t' + this.seleccionarTipo(e.tipo) + '\n'
      });
    });

    strI += '}\n'
    strI += 'this.xAPI.funcion = \'' + funcion + '\'\n'
    strI += 'this.xAPI.parametros = \'\'\n'
    strI += 'this.xAPI.valores = JSON.stringify(' + funcion + ')\n'
    strI += 'const url = \'' + ruta + '\'\n'
    strI += 'const api = http.post<any>(url, this.xAPI, httpOptions)\n'
    strI += 'api.subcribe(\n'
    strI += '\t(data) => {\n'
    strI += '\t\tconsole.info(data)\n'
    strI += '\t},\n'
    strI += '\t(error) => {\n'
    strI += '\t\tconsole.error(error)\n'
    strI += '\t}\n'
    strI += ')\n'
    return strI
  }

  seleccionarTipo(tipo : string):string {
    var c = ''
    switch (tipo) {
      case 'int':
        c = 'number'
        break;
      case 'sql':
        c = 'string'
        break;
      default:
        c = tipo
        break;
    }
    return c
  }
}
