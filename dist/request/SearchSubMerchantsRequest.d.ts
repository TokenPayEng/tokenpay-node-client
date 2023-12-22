import SubMerchantType from '../model/SubMerchantType';
declare type SearchSubMerchantsRequest = {
    name?: string;
    subMerchantIds?: number[];
    subMerchantExternalId?: string;
    subMerchantType?: SubMerchantType;
    page?: number;
    size?: number;
};
export default SearchSubMerchantsRequest;
