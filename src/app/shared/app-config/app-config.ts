import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ALLOWED_ENDPOINT = '/security/allowed-endpoints';

interface Config {
  apiServerUrl: string;
}

@Injectable()
export class AppConfig {
  public apiServerUrl: string;
  public allowedEndpoints: string[];
  constructor(private readonly http: HttpClient) {}
  public load(): Promise<void> {
    return this.http
      .get<Config>('/config/api.json')
      .toPromise()
      .then(config => {
        this.apiServerUrl = config.apiServerUrl;
		this.http.get<string[]>(this.apiServerUrl + ALLOWED_ENDPOINT).toPromise()
		.then(res => {
			this.allowedEndpoints = res;
		})
      });
  }

  public formatPath(path): string {
	return this.apiServerUrl + path;
  }

  public getApiServerUrl(): string{
	return this.apiServerUrl;
  }

  public isApiAllowed(path): boolean{
	for(let i = 0; i<this.allowedEndpoints.length; i++){
		if(path === this.allowedEndpoints[i]){
			return true;
		}
	}
	return false;
  }


}
export function initConfig(config: AppConfig): () => Promise<void> {
  return () => config.load();
}
