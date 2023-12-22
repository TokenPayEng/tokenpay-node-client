import Status from '../model/Status';
declare type LinkResponse = {
    id: number;
    status: Status;
    expireDate?: Date;
    price?: number;
    name: string;
    description?: string;
    stock?: number;
    soldCount?: number;
    token: string;
    url: string;
    qrCodeUrl: string;
    enabledInstallments?: string;
};
export default LinkResponse;
