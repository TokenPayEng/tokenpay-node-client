import InitThreeDsPaymentRequest from '../request/InitThreeDsPaymentRequest';
import {ClientCreationOptions} from '../lib/HttpClient';

import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CancelCrossBookingRequest from '../request/CancelCrossBookingRequest';
import CompleteThreeDSPaymentRequest from '../request/CompleteThreeDSPaymentRequest';
import CreatePaymentRequest from '../request/CreatePaymentRequest';
import CrossBookingRequest from '../request/CrossBookingRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import RefundPaymentTransactionRequest from '../request/RefundPaymentTransactionRequest';
import SearchCrossBookingsRequest from '../request/SearchCrossBookingsRequest';
import SearchPaymentsRequest from '../request/SearchPaymentsRequest';
import SearchPaymentTransactionRefundsRequest from '../request/SearchPaymentTransactionRefundsRequest';
import SearchStoredCardsRequest from '../request/SearchStoredCardsRequest';

import ApprovePaymentTransactionResponse from '../response/ApprovePaymentTransactionResponse';
import CrossBookingTransactionResponse from '../response/CrossBookingTransactionResponse';
import DataResponse from '../response/DataResponse';
import DisapprovePaymentTransactionResponse from '../response/DisapprovePaymentTransactionResponse';
import InitThreeDSPaymentResponse from '../response/InitThreeDSPaymentResponse';
import PaymentRefundResponse from '../response/PaymentRefundResponse';
import PaymentResponse from '../response/PaymentResponse';
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import SearchPaymentsResponse from '../response/SearchPaymentsResponse';
import StoredCardResponse from '../response/StoredCardResponse';

import BaseAdapter from './BaseAdapter';

export default class PaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createPayment(request: CreatePaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments', request);
  }

  async retrievePayment(id: number): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/card-payments/${id}`);
  }

  async searchPayments(request: SearchPaymentsRequest): Promise<DataResponse<SearchPaymentsResponse>> {
    return this._client.get('/payment-reporting/v1/payments', request);
  }

  async approvePaymentTransactions(request: ApprovePaymentTransactionsRequest): Promise<DataResponse<ApprovePaymentTransactionResponse>> {
    return this._client.post('/payment/v1/payment-transactions/approve', request);
  }

  async disapprovePaymentTransactions(request: DisapprovePaymentTransactionsRequest): Promise<DataResponse<DisapprovePaymentTransactionResponse>> {
    return this._client.post('/payment/v1/payment-transactions/disapprove', request);
  }

  async init3DSPayment(request: InitThreeDsPaymentRequest): Promise<InitThreeDSPaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-init', request);
  }

  async complete3DSPayment(request: CompleteThreeDSPaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-complete', request);
  }

  async refundPaymentTransaction(request: RefundPaymentTransactionRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }

  async retrievePaymentTransactionRefund(refundTxId: number): Promise<PaymentTransactionRefundResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${refundTxId}`);
  }

  async searchPaymentTransactionRefunds(request: SearchPaymentTransactionRefundsRequest): Promise<DataResponse<PaymentTransactionRefundResponse>> {
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
}
