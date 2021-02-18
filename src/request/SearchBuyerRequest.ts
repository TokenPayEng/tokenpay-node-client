type SearchBuyerRequest = {
  page?: number;
  size?: number;
  status?: string;
  email?: string;
  identityNumber?: string;
  name?: string;
  surname?: string;
  gsmNumber?: string;
  buyerExternalId?: string;
};

export default SearchBuyerRequest;
