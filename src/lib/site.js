export const siteUrl = "https://townsquaremohali.in";

export const siteName = "Mohali Town Square";
export const siteDescription =
  "Premium real estate in Mohali with commercial spaces, investment opportunities, and prime connectivity near Chandigarh.";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590424266901",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/townsquaremohali/",
  },
];

export const homeKeywords = [
  "Mohali Town Square",
  "Town Square Mohali",
  "real estate in Mohali",
  "commercial property in Mohali",
  "premium property in Mohali",
  "property for sale in Mohali",
  "commercial spaces in Mohali",
  "investment property Mohali",
  "business space Mohali",
  "office space in Mohali",
  "retail space Mohali",
  "shop for sale in Mohali",
  "showroom in Mohali",
  "prime location Mohali",
  "real estate near Chandigarh",
  "property near Chandigarh",
  "investment opportunities in Mohali",
  "best real estate project Mohali",
  "commercial project Mohali",
  "property deals Mohali",
  "Mohali business hub",
  "Punjab commercial property",
  "Haryana access property",
  "Himachal connectivity Mohali",
];

export const contactKeywords = [
  "Contact Mohali Town Square",
  "Mohali Town Square contact",
  "real estate enquiry Mohali",
  "site visit Mohali",
  "commercial project enquiry",
  "property consultation Mohali",
  "investment support Mohali",
  "office visit Mohali",
  "real estate advisor Mohali",
  "property booking Mohali",
  "Mohali real estate contact",
  "Chandigarh property enquiry",
];

export const galleryKeywords = [
  "Mohali Town Square gallery",
  "Town Square Mohali photos",
  "commercial project gallery",
  "real estate gallery Mohali",
  "property images Mohali",
  "interiors and exteriors",
  "amenities gallery",
  "site images Mohali",
  "project visuals Mohali",
  "commercial development photos",
  "Town Square visuals",
  "Mohali project photos",
];

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${siteUrl}/`).toString();
}
