import AddressType from './AddressType'

type Address = {
  addressType: AddressType;
  name: string;
  surname: string;
  companyName: string;
  address: string;
  telephone: string;
  taxNumber: string;
  taxOffice: string;
  county: string;
  city: string;
  tckn: string;
  email: string;
};

export default Address;
