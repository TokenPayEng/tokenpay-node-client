import {ClientCreationOptions} from '../lib/HttpClient';
 
import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CancelCrossBookingRequest from '../request/CancelCrossBookingRequest';
import CompleteThreeDSPaymentRequest from '../request/CompleteThreeDSPaymentRequest';
import CreatePaymentRequest from '../request/CreatePaymentRequest';
import CrossBookingRequest from '../request/CrossBookingRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import InitCheckoutPaymentRequest from '../request/InitCheckoutPaymentRequest';
import InitCreditPaymentRequest from '../request/InitCreditPaymentRequest';
import InitThreeDsPaymentRequest from '../request/InitThreeDsPaymentRequest';
import MoneyTransferPaymentRequest from '../request/MoneyTransferPaymentRequest';
 
import PostAuthPaymentRequest from '../request/PostAuthPaymentRequest';
 
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import RefundPaymentTransactionRequest from '../request/RefundPaymentTransactionRequest';
import SearchCrossBookingsRequest from '../request/SearchCrossBookingsRequest';
import SearchPaymentsRequest from '../request/SearchPaymentsRequest';
import SearchPaymentTransactionRefundsRequest from '../request/SearchPaymentTransactionRefundsRequest';
import SearchStoredCardsRequest from '../request/SearchStoredCardsRequest';
import UpdatePaymentTransactionRequest from '../request/UpdatePaymentTransactionRequest';
 
import CrossBookingTransactionResponse from '../response/CrossBookingTransactionResponse';
import DataResponse from '../response/DataResponse';
import InitCheckoutPaymentResponse from '../response/InitCheckoutPaymentResponse';
import InitThreeDSPaymentResponse from '../response/InitThreeDSPaymentResponse';
import InitCreditPaymentResponse from '../response/InitCreditPaymentResponse';
 
import MultiCardPostAuthPaymentRequest from '../request/MultiCardPostAuthPaymentRequest';
import MoneyTransferPaymentResult from '../response/MoneyTransferPaymentResult';
import PaymentDetailResponse from '../response/PaymentDetailResponse';
import PaymentRefundResponse from '../response/PaymentRefundResponse';
import PaymentResponse from '../response/PaymentResponse';
import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTransactionRefundListResponse from '../response/PaymentTransactionRefundListResponse';
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import PaymentTransactionResponse from '../response/PaymentTransactionResponse';
import StoredCardResponse from '../response/StoredCardResponse';
 
import BaseAdapter from './BaseAdapter';
import PreviewCreditPaymentRequest from '../request/PreviewCreditPaymentRequest';
import PreviewCreditPaymentResponse from '../response/PreviewCreditPaymentResponse';
 
export default class PaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }
 
  async createPayment(request: CreatePaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments', request);
  }
 
  async retrievePayment(id: number): Promise<PaymentDetailResponse> {
    return this._client.get(`/payment-reporting/v1/payments/${id}`);
  }
 
  async searchPayments(request: SearchPaymentsRequest): Promise<DataResponse<PaymentDetailResponse>> {
    return this._client.get('/payment-reporting/v1/payments', request);
  }
 
  async approvePaymentTransactions(request: ApprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/approve', request);
  }
 
  async disapprovePaymentTransactions(request: DisapprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/disapprove', request);
  }
 
  async updatePaymentTransaction(id: number, request: UpdatePaymentTransactionRequest): Promise<PaymentTransactionResponse> {
    return this._client.put(`/payment/v1/payment-transactions/${id}`, request);
  }
 
  async init3DSPayment(request: InitThreeDsPaymentRequest): Promise<InitThreeDSPaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-init', request);
  }
 
  async complete3DSPayment(request: CompleteThreeDSPaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-complete', request);
  }
 
  async initCheckoutPayment(request: InitCheckoutPaymentRequest): Promise<InitCheckoutPaymentResponse> {
    return this._client.post('/payment/v1/checkout-payments/init', request);
  }
 
  async initCreditPayment(request: InitCreditPaymentRequest): Promise<InitCreditPaymentResponse> {
    return this._client.post('/payment/v1/credit-payments/init', request);
  }
 
  async previewCreditPayment(request: PreviewCreditPaymentRequest): Promise<PreviewCreditPaymentResponse> {
    return this._client.post('/payment/v1/credit-payments/preview', request);
  }
 
  async retrieveCheckoutPayment(token: string): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/checkout-payments/${token}`);
  }
 
  async refundPaymentTransaction(request: RefundPaymentTransactionRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }
 
  async retrievePaymentTransactionRefund(refundTxId: number): Promise<PaymentTransactionRefundResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${refundTxId}`);
  }
 
  async searchPaymentTransactionRefunds(request: SearchPaymentTransactionRefundsRequest): Promise<PaymentTransactionRefundListResponse> {
    return this._client.get('/payment/v1/refund-transactions', request);
  }
 
  async refundPayment(request: RefundPaymentRequest): Promise<PaymentRefundResponse> {
    return this._client.post('/payment/v1/refunds', request);
  }
 
  async retrievePaymentRefund(refundId: number): Promise<PaymentRefundResponse> {
    return this._client.get(`/payment/v1/refunds/${refundId}`);
  }
 
  async receiveMoney(request: CrossBookingRequest): Promise<CrossBookingTransactionResponse> {
    return this._client.post('/payment/v1/cross-bookings/receive', request);
  }
 
  async sendMoney(request: CrossBookingRequest): Promise<CrossBookingTransactionResponse> {
    return this._client.post('/payment/v1/cross-bookings/send', request);
  }
 
  async cancelCrossBooking(request: CancelCrossBookingRequest): Promise<CrossBookingTransactionResponse> {
    return this._client.post('/payment/v1/cross-bookings/cancel', request);
  }
 
  async searchCrossBookings(request: SearchCrossBookingsRequest): Promise<DataResponse<CrossBookingTransactionResponse>> {
    return this._client.get('/payment/v1/cross-bookings', request);
  }
 
  async deleteStoredCard(request: DeleteStoredCardRequest): Promise<void> {
    await this._client.delete('/payment/v1/cards', request);
  }
 
  async searchStoredCards(request: SearchStoredCardsRequest): Promise<DataResponse<StoredCardResponse>> {
    return this._client.get('/payment/v1/cards', request);
  }
 
  async postAuthPayment(paymentId: number, request: PostAuthPaymentRequest): Promise<PaymentResponse> {
    return this._client.post(`/payment/v1/card-payments/${paymentId}/post-auth`, request);
  }
 
  async multiCardPostAuthPayment(conversationId: number, request: MultiCardPostAuthPaymentRequest): Promise<PaymentResponse> {
    return this._client.post(`/payment/v1/card-payments/${conversationId}/multi_post-auth`, request);
  }
  async moneyTransferPayment( request: MoneyTransferPaymentRequest): Promise<MoneyTransferPaymentResult> {
    return this._client.post(`/payment/v1/money-transfers/code`, request);
  }
}