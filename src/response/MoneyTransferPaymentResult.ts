type MoneyTransferPaymentResult ={
    callbackUrl: string,
    paymentId: number,
    conversationId: string,
    token: string,
    isSuccess: boolean,
    errorCode: string,
    errorMessage: string,
};
 
export default MoneyTransferPaymentResult;