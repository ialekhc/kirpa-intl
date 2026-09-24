export interface CompanyAddress {
  street: string;
  municipality: string;
  city: string;
  country: string;
  mapEmbedUrl?: string;
  directionsUrl?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  licenseNumber: string;
  address: CompanyAddress;
  phone: string;
  phoneRaw: string;
  mobile: string;
  mobileRaw: string;
  email: string;
  website: string;
  trustStatement: string;
}
