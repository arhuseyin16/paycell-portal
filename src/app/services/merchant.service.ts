import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchant} from "../models/merchant";
import {AppConfig} from "../shared/app-config/app-config";
import {UserMerchantChild} from "../models/request/user.merchant.child";
import {MerchantRoleModel} from '../models/request/merchant-role.model';
import {MerchantRoleResponse} from '../models/response/merchant-role.response';
import {CheckMerchantDto} from '../models/request/check-merchant-dto';
import {CheckMerchantResultDto} from '../models/response/check-merchant-result-dto';
import { GibRequest } from 'app/models/request/gib.request';
import { GibResponse } from 'app/models/response/gib.response';

const allMerchantsURL = '/api/merchant/all';
const childURL = '/api/merchant/child';
const userMerchantsURL = '/api/merchant/user';
const merchantFilterURL = '/api/merchant/filter';
const merchantUserUrl = '/api/merchant/user/permissions'
const checkMerchantUrl = '/api/merchant/check-merchant';
const gibQueryUrl = '/api/merchant/gib/query';

@Injectable({providedIn: 'root'})
export class MerchantService {

  constructor(private http: HttpClient, private appConfig: AppConfig) {
  }

  masterMerchantList(): Observable<HttpResponse<Merchant[]>> {
    return this.http.get<Merchant[]>(this.appConfig.formatPath(allMerchantsURL), {observe: 'response'});
  }

  childMerchantList(merchantId: UserMerchantChild): Observable<HttpResponse<Merchant[]>> {
    return this.http.post<Merchant[]>(this.appConfig.formatPath(childURL),{merchantId}, {observe: 'response'});
  }
  allUser(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.appConfig.formatPath(userMerchantsURL));
  }
  userMerchantList(): Observable<HttpResponse<Merchant[]>> {
    return this.http.get<Merchant[]>(this.appConfig.formatPath(userMerchantsURL) , {observe: 'response'});
  }

  merchantFilter(): Observable<HttpResponse<Merchant[]>> {
    return this.http.get<Merchant[]>(this.appConfig.formatPath(merchantFilterURL), {observe: 'response'});
  }

  getMerchantPermissionList(model: MerchantRoleModel): Observable<MerchantRoleResponse> {
    return this.http.post<MerchantRoleResponse>(this.appConfig.formatPath(merchantUserUrl), model);
  }

  checkMerchant(checkMerchantRequest: CheckMerchantDto): Observable<CheckMerchantResultDto> {
    return this.http.post<CheckMerchantResultDto>(this.appConfig.formatPath(checkMerchantUrl), checkMerchantRequest);
  }

  gibQuery(gibRequest: GibRequest): Promise<HttpResponse<GibResponse>> {
    return this.http.post<GibResponse>(this.appConfig.formatPath(gibQueryUrl), gibRequest, {observe: 'response'}).toPromise()
  }
}
