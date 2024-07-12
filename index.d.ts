declare module "currency-code-to-symbol" {
  type CurrencySymbols = {
    symbol: string;
    locale: string;
  };

  /**
   * A React hook that takes an ISO-4217 currency code and returns the symbol and locale.
   *
   * @param currencyCode - The ISO-4217 currency code (e.g., 'USD', 'EUR').
   * @returns An object with `symbol` and `locale` properties.
   */
  function useCurrencySymbol(currencyCode: string): CurrencySymbols;

  export default useCurrencySymbol;
}
