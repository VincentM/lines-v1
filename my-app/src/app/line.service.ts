import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class LineService {
  private _lines = []
  constructor(private _http: Http) {
    this._http.get("https://api-ratp.pierre-grimaud.fr/v3/lines").subscribe(data => {
      let json_data = data.json();
      this._lines = json_data.result.metros;
    });
  }

  getLines() {
    return this._lines;
  }
}
