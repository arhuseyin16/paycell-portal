import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AppConfig } from '../shared/app-config/app-config';
import { Observable } from 'rxjs';
import { SectorInfoResponse } from 'app/models/response/sector-info-response';
import { ParentSectorInfoResponse } from '../models/response/parent-sector-info-response';
import { CheckIbanRequest } from 'app/models/request/check.iban.request';
import { CheckIbanResponse } from 'app/models/response/check.iban.response';
import { GetActiveContractTemplateRequest } from 'app/models/request/get.active.contract.template.request';
import { GetActiveContractTemplateResponse } from 'app/models/response/get.active.contract.template.response';
import { CommissionRateResponse } from 'app/models/response/commission-rate-response';
import { GetAllListResponse } from 'app/models/response/user-pf-get-all-list/get-all-list-response';
import { PmpServiceRequest } from 'app/models/request/pmp.service.request';
import { RequestMethod } from 'app/models/request/request.type.enum';

const baseUrl = '/api/pmp/'
const getParentSectorInfosUrl = 'get-parent-sector-infos'
const getAllSectorInfosUrl = 'get-all-sector-infos'
const getAllCommissionRatesUrl = 'get-all-commission-rates'
const pfAddressUrl = '/api/pfaddress/'
const getAllListUrl = 'get-all-list'
const getActiveContractTemplateUrl = 'get-active-contract-template'
const checkIbanUrl = 'check-iban'

@Injectable({ providedIn: 'root' })
export class PwlService {

    constructor(private http: HttpClient, private appConfig: AppConfig) {
    }

    request(requestMethod: RequestMethod, requestUrl: string, input: any): Observable<HttpResponse<any>> {
        const merchant = JSON.parse(localStorage.getItem('merchantName'));
        const account = JSON.parse(localStorage.getItem('account'));
        const pmpServiceRequest = new PmpServiceRequest(merchant?.merchantId, account?.userId, requestMethod, requestUrl, input)
        return this.http.post<any>(this.appConfig.formatPath(baseUrl), pmpServiceRequest, { observe: 'response' })
    }

    getParentSectorInfos(): Observable<HttpResponse<ParentSectorInfoResponse[]>> {
        return this.http.get<ParentSectorInfoResponse[]>(this.appConfig.formatPath(baseUrl + getParentSectorInfosUrl), { observe: 'response' });
    }

    getAllSectorInfos(): Observable<HttpResponse<SectorInfoResponse[]>> {
        return this.http.get<SectorInfoResponse[]>(this.appConfig.formatPath(baseUrl + getAllSectorInfosUrl), { observe: 'response' });
    }

    getAllCommissionRates(): Observable<HttpResponse<CommissionRateResponse[]>> {
        return this.http.get<CommissionRateResponse[]>(this.appConfig.formatPath(baseUrl + getAllCommissionRatesUrl), { observe: 'response' });
    }

    getActiveContractTemplate(getActiveContractTemplateRequest: GetActiveContractTemplateRequest): Promise<HttpResponse<GetActiveContractTemplateResponse>> {
        return this.http.post<GetActiveContractTemplateResponse>(this.appConfig.formatPath(baseUrl + getActiveContractTemplateUrl), getActiveContractTemplateRequest, { observe: 'response' }).toPromise()
    }

    checkIban(checkIbanRequest: CheckIbanRequest): Observable<HttpResponse<CheckIbanResponse>> {
        return this.http.post<CheckIbanResponse>(this.appConfig.formatPath(baseUrl + checkIbanUrl), checkIbanRequest, { observe: 'response' })
    }

    getAllList() : Observable<HttpResponse<GetAllListResponse>> {
        return this.http.get<GetAllListResponse>(this.appConfig.formatPath(pfAddressUrl + getAllListUrl), { observe: 'response' });
    }
}
