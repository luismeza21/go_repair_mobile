import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  public api: string = 'http://localhost:8086/api/v1/go/repair';

  constructor(public http: HttpClient) {
    console.log('Iniciando provider para api');
  }


  getClientIsMechanic() {
    return new Promise(resolve => {
      this.http.get(this.api + '/get/mechanics')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  



}
