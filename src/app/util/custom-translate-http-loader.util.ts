import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { TranslateLoader } from "@ngx-translate/core";
import { Observable, forkJoin, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { all } from 'deepmerge';
import { AppConfig } from "../shared/app-config/app-config";
const v = new Date();
export interface ITranslationResource {
  endpointType: string;
  prefix: string;
  suffix: string;
}

@Injectable()
export class CustomTranslateHttpLoader implements TranslateLoader {
    private resources: ITranslationResource[] =  [
    	{endpointType:'local',prefix: "./assets/i18n/", suffix: ".json?t="+v.getTime()},
    	{endpointType:'remote',prefix: '/api/i18n/', suffix:".json?t="+v.getTime()},
	];
  constructor(
    private http: HttpClient,
	private appConfig: AppConfig
  ) {
  }

  public getTranslation(lang: string): Observable<any> {
    const requests = this.resources.map(resource => {
      var path = resource.prefix + lang.toLocaleLowerCase("en") + resource.suffix;
	  if(resource.endpointType ==='remote'){
		path = this.appConfig.getApiServerUrl() + resource.prefix + lang.toLocaleLowerCase("en") + resource.suffix;
	  }
      return this.http.get(path).pipe(
        map(value => this.flattenObject(value)),
        catchError(res => {
          return of({});
        }));
    });
    return forkJoin(requests).pipe(map(response => all(response)));
  }

  flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if ((typeof ob[i]) == 'object' && ob[i] !== null) {
        var flatObject = this.flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }
}
