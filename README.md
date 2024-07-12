# use-currency-symbol

A React hook for mapping currency codes to their respective symbols. This package provides an easy way to display currency symbols in your React applications based on currency codes.

## Installation

To install the package, use npm or yarn:

```bash
npm install use-currency-symbol
```

or

```bash
yarn add use-currency-symbol
```

## Usage

Import the useCurrencySymbol hook into your React component and use it to get the symbol for a given currency code.

### Example

```javascript
import React from "react";
import useCurrencySymbol from "use-currency-symbol";

const CurrencyDisplay = ({ currencyCode }) => {
  const symbol = useCurrencySymbol(currencyCode);

  return (
    <div>
      <p>
        The symbol for {currencyCode} is {symbol}
      </p>
    </div>
  );
};

export default CurrencyDisplay;
```

### Another Example

```javascript
import React, { useState } from "react";
import useCurrencySymbol from "use-currency-symbol";

const App = () => {
  const [currencyCode, setCurrencyCode] = useState("USD");
  const symbol = useCurrencySymbol(currencyCode);

  return (
    <div>
      <h1>Currency Symbol Finder</h1>
      <input
        type="text"
        value={currencyCode}
        onChange={(e) => setCurrencyCode(e.target.value.toUpperCase())}
        placeholder="Enter currency code (e.g., USD, EUR)"
      />
      <p>
        The symbol for {currencyCode} is {symbol}
      </p>
    </div>
  );
};

export default App;
```

## Supported Currencies

The use-currency-symbol package supports a wide range of global currencies. Here are some examples:

| Currency Code | Symbol |
| ------------- | ------ |
| USD           | $      |
| EUR           | €      |
| JPY           | ¥      |
| GBP           | £      |
| AUD           | A$     |
| CAD           | C$     |
| CHF           | CHF    |
| CNY           | ¥      |
| SEK           | kr     |
| NZD           | NZ$    |
| ...           | ...    |

## API

`useCurrencySymbol(currencyCode)`

`currencyCode` (string): The ISO 4217 currency code.

Returns: (string) The symbol corresponding to the currency code.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Fork the repository.

1. Create your feature branch (`git checkout -b feature/your-feature`).
2. Commit your changes (`git commit -m 'Add some feature'`).
3. Push to the branch (`git push origin feature/your-feature`).
   Open a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

[ChrisGuy](https://github.com/ChrisGuy)
