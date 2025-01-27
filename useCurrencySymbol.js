import { useState, useEffect } from "react";

const currencySymbols = {
  USD: { symbol: "$", locale: "en-US" },
  EUR: { symbol: "€", locale: "de-DE" },
  JPY: { symbol: "¥", locale: "ja-JP" },
  GBP: { symbol: "£", locale: "en-GB" },
  AUD: { symbol: "A$", locale: "en-AU" },
  CAD: { symbol: "C$", locale: "en-CA" },
  CHF: { symbol: "CHF", locale: "de-CH" },
  CNY: { symbol: "¥", locale: "zh-CN" },
  SEK: { symbol: "kr", locale: "sv-SE" },
  NZD: { symbol: "NZ$", locale: "en-NZ" },
  MXN: { symbol: "$", locale: "es-MX" },
  SGD: { symbol: "S$", locale: "en-SG" },
  HKD: { symbol: "HK$", locale: "zh-HK" },
  NOK: { symbol: "kr", locale: "nb-NO" },
  KRW: { symbol: "₩", locale: "ko-KR" },
  TRY: { symbol: "₺", locale: "tr-TR" },
  RUB: { symbol: "₽", locale: "ru-RU" },
  INR: { symbol: "₹", locale: "hi-IN" },
  BRL: { symbol: "R$", locale: "pt-BR" },
  ZAR: { symbol: "R", locale: "en-ZA" },
  PLN: { symbol: "zł", locale: "pl-PL" },
  PHP: { symbol: "₱", locale: "en-PH" },
  CZK: { symbol: "Kč", locale: "cs-CZ" },
  IDR: { symbol: "Rp", locale: "id-ID" },
  HUF: { symbol: "Ft", locale: "hu-HU" },
  MYR: { symbol: "RM", locale: "ms-MY" },
  THB: { symbol: "฿", locale: "th-TH" },
  ILS: { symbol: "₪", locale: "he-IL" },
  CLP: { symbol: "$", locale: "es-CL" },
  PKR: { symbol: "₨", locale: "ur-PK" },
  BDT: { symbol: "৳", locale: "bn-BD" },
  VND: { symbol: "₫", locale: "vi-VN" },
  NGN: { symbol: "₦", locale: "en-NG" },
  KZT: { symbol: "₸", locale: "kk-KZ" },
  AED: { symbol: "د.إ", locale: "ar-AE" },
  SAR: { symbol: "﷼", locale: "ar-SA" },
  EGP: { symbol: "£", locale: "ar-EG" },
  DZD: { symbol: "د.ج", locale: "ar-DZ" },
  MAD: { symbol: "د.م.", locale: "ar-MA" },
  UAH: { symbol: "₴", locale: "uk-UA" },
  KES: { symbol: "KSh", locale: "en-KE" },
  ARS: { symbol: "$", locale: "es-AR" },
  COP: { symbol: "$", locale: "es-CO" },
  PEN: { symbol: "S/.", locale: "es-PE" },
  LKR: { symbol: "Rs", locale: "si-LK" },
  RON: { symbol: "lei", locale: "ro-RO" },
  BGN: { symbol: "лв", locale: "bg-BG" },
  HRK: { symbol: "kn", locale: "hr-HR" },
  BHD: { symbol: ".د.ب", locale: "ar-BH" },
  OMR: { symbol: "﷼", locale: "ar-OM" },
  QAR: { symbol: "﷼", locale: "ar-QA" },
  KWD: { symbol: "د.ك", locale: "ar-KW" },
  JOD: { symbol: "د.ا", locale: "ar-JO" },
  LBP: { symbol: "ل.ل", locale: "ar-LB" },
  BAM: { symbol: "KM", locale: "bs-BA" },
  MKD: { symbol: "ден", locale: "mk-MK" },
  GEL: { symbol: "₾", locale: "ka-GE" },
  TND: { symbol: "د.ت", locale: "ar-TN" },
  XAF: { symbol: "FCFA", locale: "fr-CM" },
  XOF: { symbol: "CFA", locale: "fr-SN" },
  MUR: { symbol: "₨", locale: "mfe-MU" },
  MGA: { symbol: "Ar", locale: "mg-MG" },
  TZS: { symbol: "TSh", locale: "sw-TZ" },
  UGX: { symbol: "USh", locale: "en-UG" },
  GHS: { symbol: "₵", locale: "en-GH" },
  RSD: { symbol: "дин", locale: "sr-RS" },
  ISK: { symbol: "kr", locale: "is-IS" },
  MOP: { symbol: "MOP$", locale: "zh-MO" },
  NPR: { symbol: "₨", locale: "ne-NP" },
  NAD: { symbol: "$", locale: "en-NA" },
  BWP: { symbol: "P", locale: "en-BW" },
  ZMW: { symbol: "ZK", locale: "en-ZM" },
  BYN: { symbol: "Br", locale: "be-BY" },
  AZN: { symbol: "₼", locale: "az-AZ" },
  IQD: { symbol: "ع.د", locale: "ar-IQ" },
  AFN: { symbol: "؋", locale: "fa-AF" },
  KGS: { symbol: "с", locale: "ky-KG" },
  UZS: { symbol: "сўм", locale: "uz-UZ" },
  MMK: { symbol: "K", locale: "my-MM" },
  MNT: { symbol: "₮", locale: "mn-MN" },
  LAK: { symbol: "₭", locale: "lo-LA" },
  KPW: { symbol: "₩", locale: "ko-KP" },
  IRR: { symbol: "﷼", locale: "fa-IR" },
  SYP: { symbol: "£", locale: "ar-SY" },
  ETB: { symbol: "Br", locale: "am-ET" },
  DJF: { symbol: "Fdj", locale: "fr-DJ" },
  SOS: { symbol: "Sh", locale: "so-SO" },
  GNF: { symbol: "FG", locale: "fr-GN" },
  CDF: { symbol: "FC", locale: "fr-CD" },
  AOA: { symbol: "Kz", locale: "pt-AO" },
  SDG: { symbol: "ج.س.", locale: "ar-SD" },
  BZD: { symbol: "BZ$", locale: "en-BZ" },
  HTG: { symbol: "G", locale: "ht-HT" },
  JMD: { symbol: "J$", locale: "en-JM" },
  TTD: { symbol: "TT$", locale: "en-TT" },
  BBD: { symbol: "$", locale: "en-BB" },
  XCD: { symbol: "$", locale: "en-001" },
  ANG: { symbol: "ƒ", locale: "nl-AW" },
  AWG: { symbol: "ƒ", locale: "nl-AW" },
  SRD: { symbol: "$", locale: "nl-SR" },
  SZL: { symbol: "E", locale: "en-SZ" },
  LSL: { symbol: "L", locale: "st-LS" },
  MWK: { symbol: "MK", locale: "ny-MW" },
  SLL: { symbol: "Le", locale: "en-SL" },
  ZWL: { symbol: "$", locale: "en-ZW" },
  BIF: { symbol: "FBu", locale: "fr-BI" },
  RWF: { symbol: "FRw", locale: "rw-RW" },
  SCR: { symbol: "₨", locale: "fr-SC" },
  MVR: { symbol: "Rf", locale: "dv-MV" },
  MZN: { symbol: "MT", locale: "pt-MZ" },
  PGK: { symbol: "K", locale: "en-PG" },
  SBD: { symbol: "$", locale: "en-SB" },
  TOP: { symbol: "T$", locale: "to-TO" },
  VUV: { symbol: "Vt", locale: "bi-VU" },
  FJD: { symbol: "$", locale: "en-FJ" },
  WST: { symbol: "T", locale: "sm-WS" },
  KID: { symbol: "$", locale: "en-KI" },
  TVD: { symbol: "$", locale: "en-TV" },
};

const useCurrencySymbol = (currencyCode) => {
  const [currencyData, setCurrencyData] = useState({
    symbol: "",
    locale: "",
    error: "",
  });

  useEffect(() => {
    if (currencyCode && currencySymbols[currencyCode]) {
      const { symbol, locale } = currencySymbols[currencyCode];
      setCurrencyData({ symbol, locale, error: "" });
    } else {
      setCurrencyData({
        symbol: "",
        locale: "",
        error: `No Symbol with the code "${currencyCode}"`,
      });
    }
  }, [currencyCode]);

  return currencyData;
};

export default useCurrencySymbol;
