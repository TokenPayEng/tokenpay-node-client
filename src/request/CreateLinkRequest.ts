type CreateLinkRequest = {
  price?: number;
  name: string;
  description?: string;
  enabledInstallments?: string;
  stock?: number;
  expireDate?: Date;
};

export default CreateLinkRequest;
