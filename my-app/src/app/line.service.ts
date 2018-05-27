import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class LineService {
  constructor(private _http: Http) {
    this._http.get("https://api-ratp.pierre-grimaud.fr/v3").subscribe(data => {
      let json_data = data.json();
    });
  }
}
