import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { createRequestOption } from 'app/shared/util/request-util';
import { AppConfig } from "../shared/app-config/app-config";
import { I18n } from "../models/i18n.model";

const requestURL = '/api/i18n';
const updateURL =  '/api/i18n';

@Injectable({ providedIn: 'root' })
export class I18nMappingService {
  constructor(private http: HttpClient,
			  private appConfig: AppConfig) {}

  query(req: any): Observable<HttpResponse<any[]>> {
    // const params: HttpParams = createRequestOption(req);
const params ={};

    return this.http.get<any[]>(this.appConfig.formatPath(requestURL), {
      params,
      observe: 'response'
    });
  }

  getFile(req: string): Observable<HttpResponse<any>> {
    const params = {};
    const v = new Date();
    return this.http.get<any[]>(requestURL + '/'+ req + '.json?t='+v.getTime(), {
      params,
      observe: 'response'
    });
  }

  update(i18nList: I18n[]): Observable<HttpResponse<I18n[]>> {
    return this.http.post<I18n[]>(this.appConfig.formatPath(updateURL), i18nList, { observe: 'response' });
  }

}
