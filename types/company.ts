export interface CompanyAddress {
  street: string;
  municipality: string;
  city: string;
  country: string;
  mapEmbedUrl?: string;
  directionsUrl?: string;
}

export interface EuropeanPartner {
  name: string;
  website: string;
  partnershipRole: string;
  countries: string[];
  tagline: string;
  description: string;
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
  europeanPartner: EuropeanPartner;
  trustStatement: string;
}
