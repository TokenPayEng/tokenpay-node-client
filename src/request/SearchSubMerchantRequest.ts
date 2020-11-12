import SubMerchantType from '../model/SubMerchantType';

type UpdateSubMerchantRequest = {
  name?: string;
  subMerchantIds?: number[];
  subMerchantExternalId?: string;
  subMerchantType?: SubMerchantType;
  page?: number;
  size?: number;
};

export default UpdateSubMerchantRequest;
