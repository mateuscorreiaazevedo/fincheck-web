import NumberFormat, {
  type FormatInputValueFunction,
} from 'react-number-format';
import { numberKeys, regexConstants } from '@/shared/constants';
import { defaultStringsConstants } from '@/shared/constants/defaultStrings';

interface InputCurrencyProps {
  changeValue?(value: string): void;
  value?: string;
}

export function InputCurrency({ changeValue, value }: InputCurrencyProps) {
  const currencyFormat: FormatInputValueFunction = (valueStr: string) => {
    if (!valueStr) {
      return '';
    }
    const centsValue = Number.parseInt(valueStr, 10);

    const floatValue = (centsValue / numberKeys.CENTS_DIVISION).toFixed(2);

    const [integerPart, decimalPart] = floatValue.split('.');

    const formattedIntegerPart = integerPart.replace(
      regexConstants.CURRENCY_REGEX,
      '.'
    );

    const currencyFormatted = `${formattedIntegerPart},${decimalPart}`;

    const currencyValue =
      currencyFormatted === defaultStringsConstants.currencyEmpty
        ? ''
        : currencyFormatted;

    if (changeValue) {
      changeValue(currencyValue);
    }

    return currencyValue;
  };

  return (
    <NumberFormat
      className="w-full-content font-bold text-3xl text-gray-8 outline-none placeholder:text-gray-8"
      decimalScale={2}
      decimalSeparator=","
      format={currencyFormat}
      placeholder={defaultStringsConstants.currencyEmpty}
      thousandSeparator="."
      value={value}
    />
  );
}
