import Status from '../model/Status';
declare type CreateLinkRequest = {
    status: Status;
    price?: number;
    name: string;
    description?: string;
    enabledInstallments?: string;
    stock?: number;
    expireDate?: Date;
};
export default CreateLinkRequest;
