import NumberFormat from 'react-number-format';

export function InputCurrency() {
  return (
    <NumberFormat
      className="w-full-content font-bold text-3xl text-gray-8 outline-none"
      decimalScale={2}
      decimalSeparator=","
      defaultValue={'0,00'}
      prefix=""
      thousandSeparator="."
    />
  );
}
