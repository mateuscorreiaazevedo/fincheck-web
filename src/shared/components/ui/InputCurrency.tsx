import NumberFormat from 'react-number-format';
import { numberKeys, regexConstants } from '@/shared/constants';
import { defaultStringsConstants } from '@/shared/constants/defaultStrings';
import { cn } from '@/shared/utils';
import { FieldError } from './FieldError';

interface InputCurrencyProps {
  onChange?(value: string): void;
  value?: string;
  error?: string;
}

export function InputCurrency({ onChange, value, error }: InputCurrencyProps) {
  const currencyFormat = (valueStr: string) => {
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

    if (onChange) {
      onChange(currencyValue);
    }

    return currencyValue;
  };

  return (
    <div className="relative">
      <NumberFormat
        className={cn(
          'w-full-content font-bold text-3xl text-gray-8 outline-none placeholder:text-gray-8'
        )}
        decimalScale={2}
        decimalSeparator=","
        format={currencyFormat}
        placeholder={defaultStringsConstants.currencyEmpty}
        thousandSeparator="."
        value={value}
      />
      {!!error && <FieldError className="-left-8 absolute" error={error} />}
    </div>
  );
}
