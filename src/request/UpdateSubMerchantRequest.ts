type UpdateSubMerchantRequest = {
  id: number;
  name: string;
  address: string;
  email: string;
  iban: string;
  gsmNumber: string;
  taxOffice: string;
  taxNumber: string;
  contactName: string;
  contactSurname: string;
  identityNumber: string;
  legalCompanyTitle: string;
};

export default UpdateSubMerchantRequest;
