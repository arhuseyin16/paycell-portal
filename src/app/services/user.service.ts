import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

// import { createRequestOption } from 'app/shared/util/request-util';
import {User} from '../models/user.model';
import {PfMain} from '../models/response/user-pf-transactions-summary/pf.main';
import {PfTransactionsSummary} from '../models/request/pf.transactions.summary';
import {PfTransactionsHistory} from '../models/request/pf.transactions.history';
import {PfTransactionReverse} from '../models/request/pf.transactions.reverse';
import {PfTransactionRefund} from '../models/request/pf.transactions.refund';
import {PfReverseRefundResponse} from '../models/response/user-pf-transactions-summary/reverse.refund.response';
import {DcbTransactionHistory} from '../models/request/dcb.transaction.history';
import {DcbCollectionHistory} from '../models/request/dcb.collection.history';
import {DcbTransactionHistoryResponse} from '../models/response/user-dcb-transaction-history/dcb.transaction.history.response';
import {Permission} from '../models/request/permission.model';
import {UserCreate} from '../models/request/user.create';
import {AppConfig} from '../shared/app-config/app-config';
import {DcbCollectionHistoryResponse} from '../models/response/user-dcb-collection-history/dcb.collection.history.response';
import {PfTransactionsHistoryResponse} from '../models/response/user-pf-transactions-history/pf.transactions.history.response';
import {DcbCollectionHistorySummary} from '../models/request/dcb.collection.history.summary';
import {DcbCollectionHistorySummaryResponse} from '../models/response/dcb-collection-history-summary/dcb.collection.history.summary.response';
import {DcbTransactionsSummary} from '../models/request/dcb.transactions.summary';
import {DcbMain} from '../models/response/dcb-transaction-summary/dcb.main';
import {DcbTransactionHistorySummary} from '../models/request/dcb.transaction.history.summary';
import {DcbTransactionHistorySummaryResponse} from '../models/response/dcb-transaction-history-summary/dcb.transaction.history.summary.response';
import {MailConfirmationResponse} from '../models/response/mail-confirmation.response';
import { VerifyMernisRequest } from 'app/models/request/verify.mernis.request';
import { VerifyMernisResponse } from 'app/models/response/verify.mernis.response';
import {DcbRefundModel} from '../models/request/dcb.refund.model';

const requestURL = '/api/user';
const updateURL = '/api/user';
const verifymernisURL = '/api/user/verifymernis';
const pfTransactionsSummaryUrl = '/api/pftransaction/summary'
const pfTransactionsHistoryUrl = '/api/pftransaction/history'
const pfTransactionsHistoryExportUrl = '/api/pftransaction/history-export'
const dcbTransactionHistoryExportUrl = '/api/dcbtransaction/transaction-history-export'
const dcbCollectionHistorySummaryExportUrl = '/api/dcbtransaction/collection-history-summary-export'
const dcbTransactionHistorySummaryExportUrl = '/api/dcbtransaction/transaction-history-summary-export'
const dcbCollectionHistoryExportUrl = '/api/dcbtransaction/collection-history-export'
const createUserUrl = '/api/user'
const pfTransactionRefundUrl = '/api/pftransaction/refund'
const pfTransactionReverseUrl = '/api/pftransaction/reverse'
const dcbTransactionURL = '/api/dcbtransaction/transaction-history'
const dcbTransactionSummaryUrl = '/api/dcbtransaction/transaction-history-summary'
const dcbCollectionURL = '/api/dcbtransaction/collection-history'
const dcbCollectionSummaryUrl = '/api/dcbtransaction/collection-history-summary'
const dcbTransactionsSummaryUrl = '/api/dcbtransaction/summary'


/*
*/
@Injectable({providedIn: 'root'})
export class UserService {

  readonly userMerchantUrl = '/api/merchant/user'
  readonly childUrl = '/api/merchant'
  readonly allUrl = '/api/merchant/user'
  readonly userMerchantUrl2 = '/api/merchant/user/childs'
  readonly userPermissionUrl = '/api/userpermission'
  readonly dcbTransactionsSummaryUrl = '/api/dcbtransaction/summary'
  readonly pfTransactionsSummaryUrl = '/api/pftransaction/summary'
  readonly mailValidationUrl = '/api/user/mail-validation'
  readonly retryMailValidationUrl = '/api/user/retry-mail-validation'
  readonly dcbRefund = '/api/dcbtransaction/refund'

  constructor(private http: HttpClient,
              private appConfig: AppConfig) {
  }

  query(req: any): Observable<HttpResponse<any[]>> {
    //const params: HttpParams = createRequestOption(req);
    const params = {};

    return this.http.get<any[]>(this.appConfig.formatPath(requestURL), {
      params,
      observe: 'response'
    });
  }

  update(userList: User[]): Observable<HttpResponse<User[]>> {
    return this.http.post<User[]>(this.appConfig.formatPath(updateURL), userList, {observe: 'response'});
  }

  verifyMernis(verifyMernisRequest: VerifyMernisRequest): Promise<VerifyMernisResponse> {
    return this.http.post<VerifyMernisResponse>(this.appConfig.formatPath(verifymernisURL), verifyMernisRequest).toPromise();
  }

  pfTransactionsSummary(pfTransactionsSummary: PfTransactionsSummary): Observable<HttpResponse<PfMain>> {
    return this.http.post<PfMain>(this.appConfig.formatPath(pfTransactionsSummaryUrl), pfTransactionsSummary, {observe: 'response'})
  }

  pfTransactionsHistory(pfTransactionsHistory: PfTransactionsHistory): Observable<PfTransactionsHistoryResponse> {
    return this.http.post<PfTransactionsHistoryResponse>(this.appConfig.formatPath(pfTransactionsHistoryUrl), pfTransactionsHistory)
  }

  pfTransactionsHistoryExport(pfTransactionsHistory: PfTransactionsHistory): Observable<Blob> {
    return this.http.post(this.appConfig.formatPath(pfTransactionsHistoryExportUrl), pfTransactionsHistory, {responseType: 'blob'})
  }

  pfTransactionReverse(pfTransactionReverse: PfTransactionReverse): Observable<HttpResponse<PfReverseRefundResponse>> {
    return this.http.post<PfReverseRefundResponse>(this.appConfig.formatPath(pfTransactionReverseUrl), pfTransactionReverse, {observe: 'response'})
  }

  pfTransactionRefund(pfTransactionRefund: PfTransactionRefund): Observable<HttpResponse<PfReverseRefundResponse>> {
    return this.http.post<PfReverseRefundResponse>(this.appConfig.formatPath(pfTransactionRefundUrl), pfTransactionRefund, {observe: 'response'})
  }

  dcbTransactionHistory(dcbTransactionHistory: DcbTransactionHistory): Observable<DcbTransactionHistoryResponse> {
    return this.http.post<DcbTransactionHistoryResponse>(this.appConfig.formatPath(dcbTransactionURL), dcbTransactionHistory)
  }

  dcbTransactionHistoryExport(dcbTransactionHistory: DcbTransactionHistory): Observable<Blob> {
    return this.http.post(this.appConfig.formatPath(dcbTransactionHistoryExportUrl), dcbTransactionHistory, {responseType: 'blob'})
  }

  dcbCollectionHistory(dcbCollectionHistory: DcbCollectionHistory): Observable<DcbCollectionHistoryResponse> {
    return this.http.post<DcbCollectionHistoryResponse>(this.appConfig.formatPath(dcbCollectionURL), dcbCollectionHistory)
  }

  dcbCollectionHistorySummary(dcbCollectionHistorySummary: DcbCollectionHistorySummary): Observable<DcbCollectionHistorySummaryResponse> {
    return this.http.post<DcbCollectionHistorySummaryResponse>(this.appConfig.formatPath(dcbCollectionSummaryUrl), dcbCollectionHistorySummary)
  }

  dcbCollectionHistorySummaryExport(dcbCollectionHistorySummary: DcbCollectionHistorySummary): Observable<Blob> {
    return this.http.post(this.appConfig.formatPath(dcbCollectionHistorySummaryExportUrl), dcbCollectionHistorySummary, {responseType: 'blob'})
  }

  dcbTransactionHistorySummary(dcbTransactionHistorySummary: DcbTransactionHistorySummary): Observable<DcbTransactionHistorySummaryResponse> {
    return this.http.post<DcbTransactionHistorySummaryResponse>(this.appConfig.formatPath(dcbTransactionSummaryUrl), dcbTransactionHistorySummary)
  }

  dcbTransactionHistorySummaryExport(dcbTransactionHistorySummary: DcbTransactionHistorySummary): Observable<Blob> {
    return this.http.post(this.appConfig.formatPath(dcbTransactionHistorySummaryExportUrl), dcbTransactionHistorySummary, {responseType: 'blob'})
  }

  dcbCollectionHistoryExport(dcbCollectionHistory: DcbCollectionHistory): Observable<Blob> {
    return this.http.post(this.appConfig.formatPath(dcbCollectionHistoryExportUrl), dcbCollectionHistory, {responseType: 'blob'})
  }

  dcbTransactionsSummary(dcbTransactionsSummary: DcbTransactionsSummary): Observable<HttpResponse<DcbMain>> {
    return this.http.post<DcbMain>(this.appConfig.formatPath(dcbTransactionsSummaryUrl), dcbTransactionsSummary, {observe: 'response'})
  }

  createUser(user: UserCreate): Observable<any | null> {

    return this.http.post<any>(this.appConfig.formatPath(createUserUrl), user);
  }

  userMerchant(userUid: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.appConfig.formatPath(this.userMerchantUrl) + '/' + userUid, {observe: 'response'});

  }

  allChilds(merchantId: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.appConfig.formatPath(this.childUrl) + '/' + merchantId + '/child', {observe: 'response'});

  }

  allUser(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.appConfig.formatPath(this.allUrl), {observe: 'response'});

  }

  allPermissions(): Observable<HttpResponse<Permission>> {
    return this.http.get<any>(this.appConfig.formatPath(this.userPermissionUrl), {observe: 'response'});
  }

  mailValidation(code: string): Observable<MailConfirmationResponse> {
    return this.http.post<any>(this.appConfig.formatPath(this.mailValidationUrl), {code});
  }

  retryMailValidation(code: string): Observable<MailConfirmationResponse> {
    return this.http.post<any>(this.appConfig.formatPath(this.retryMailValidationUrl), {code});
  }

  getRefund(refundRequest: DcbRefundModel): Observable<any> {
    return this.http.post<DcbRefundModel>(this.appConfig.formatPath(this.dcbRefund), refundRequest);
  }

}
