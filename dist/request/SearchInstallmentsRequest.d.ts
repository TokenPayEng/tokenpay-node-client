import Currency from '../model/Currency';
declare type SearchInstallmentsRequest = {
    binNumber?: string;
    price: number;
    currency: Currency;
};
export default SearchInstallmentsRequest;
