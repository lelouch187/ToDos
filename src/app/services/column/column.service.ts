import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ColumnResponse} from "./column.types";

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  baseUrl=environment.apiUrl;
  http = inject(HttpClient);

  getColumns():Observable<ColumnResponse>{
    return this.http.get<ColumnResponse>(`${this.baseUrl}/columns`)
  }
}
