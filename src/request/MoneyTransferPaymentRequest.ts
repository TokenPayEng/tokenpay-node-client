type MoneyTransferPaymentRequest ={
    amount: number,
    currencyCode: string,
    senderId: string,
    description: string,
    bankCode: string,
    receiverIban: string,
    transactionId: string,
    merchantId: string,
    senderName: string,
 
};
 
export default  MoneyTransferPaymentRequest;