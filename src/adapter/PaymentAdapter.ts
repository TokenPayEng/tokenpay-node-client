import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import CreatePaymentRequest from '../request/CreatePaymentRequest';
import SearchPaymentRequest from '../request/SearchPaymentRequest';
import ApprovePaymentTransactionRequest from '../request/ApprovePaymentTransactionRequest';
import DisapprovePaymentTransactionRequest from '../request/DisapprovePaymentTransactionRequest';
import Complete3DSPaymentRequest from '../request/Complete3DSPaymentRequest';
import CreateRefundTxRequest from '../request/CreateRefundTxRequest';
import SearchRefundTransactionsRequest from '../request/SearchRefundTransactionsRequest';
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import CrossBookingRequest from '../request/CrossBookingRequest';
import CancelCrossBookingRequest from '../request/CancelCrossBookingRequest';
import SearchCrossBookingsRequest from '../request/SearchCrossBookingsRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import SearchStoredCardRequest from '../request/SearchStoredCardRequest';

import CardPaymentResponse from '../response/CardPaymentResponse';
import SearchPaymentResponse from '../response/SearchPaymentResponse';
import ApprovePaymentTransactionResponse from '../response/ApprovePaymentTransactionResponse';
import DisapprovePaymentTransactionResponse from '../response/DisapprovePaymentTransactionResponse';
import ThreeDSInitResponse from '../response/ThreeDSInitResponse';
import DataResponse from '../response/DataResponse';
import RefundTxResponse from '../response/RefundTxResponse';
import RefundPaymentResponse from '../response/RefundPaymentResponse';
import CrossBookingTxResponse from '../response/CrossBookingTxResponse';
import StoredCardResponse from '../response/StoredCardResponse';

export default class PaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createPayment(request: CreatePaymentRequest): Promise<CardPaymentResponse> {
    return this._client.post('/payment/v1/card-payments', request);
  }

  async retrieve(id: number): Promise<CardPaymentResponse> {
    return this._client.get(`/payment/v1/card-payments/${id}`);
  }

  async search(request: SearchPaymentRequest): Promise<DataResponse<SearchPaymentResponse>> {
    return this._client.get('/payment-reporting/v1/payments', request);
  }

  async approvePaymentTransaction(request: ApprovePaymentTransactionRequest): Promise<DataResponse<ApprovePaymentTransactionResponse>> {
    return this._client.post('/payment/v1/payment-transactions/approve', request);
  }

  async disapprovePaymentTransaction(request: DisapprovePaymentTransactionRequest): Promise<DataResponse<DisapprovePaymentTransactionResponse>> {
    return this._client.post('/payment/v1/payment-transactions/disapprove', request);
  }

  async init3DSPayment(request: CreatePaymentRequest): Promise<ThreeDSInitResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-init', request);
  }

  async complete3DSPayment(request: Complete3DSPaymentRequest): Promise<CardPaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-complete', request);
  }

  async refundPaymentTransaction(request: CreateRefundTxRequest): Promise<RefundTxResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }

  async retrieveRefundTransaction(refundTxId: number): Promise<RefundTxResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${refundTxId}`);
  }

  async searchRefundTransactions(request: SearchRefundTransactionsRequest): Promise<DataResponse<RefundTxResponse>> {
    return this._client.get('/payment/v1/refund-transactions', request);
  }

  async refundPayment(request: RefundPaymentRequest): Promise<RefundPaymentResponse> {
    return this._client.post('/payment/v1/refunds', request);
  }

  async retrieveRefund(refundId: number): Promise<RefundPaymentResponse> {
    return this._client.get(`/payment/v1/refunds/${refundId}`);
  }

  async receiveMoney(request: CrossBookingRequest): Promise<CrossBookingTxResponse> {
    return this._client.post('/payment/v1/cross-bookings/receive', request);
  }

  async sendMoney(request: CrossBookingRequest): Promise<CrossBookingTxResponse> {
    return this._client.post('/payment/v1/cross-bookings/send', request);
  }

  async cancelCrossBooking(request: CancelCrossBookingRequest): Promise<CrossBookingTxResponse> {
    return this._client.post('/payment/v1/cross-bookings/cancel', request);
  }

  async searchCrossBookings(request: SearchCrossBookingsRequest): Promise<DataResponse<CrossBookingTxResponse>> {
    return this._client.get('/payment/v1/cross-bookings', request);
  }

  async deleteStoredCard(request: DeleteStoredCardRequest): Promise<void> {
    await this._client.delete('/payment/v1/cards', request);
  }

  async searchStoredCards(request: SearchStoredCardRequest): Promise<DataResponse<StoredCardResponse>> {
    return this._client.get('/payment/v1/cards', request);
  }
}
