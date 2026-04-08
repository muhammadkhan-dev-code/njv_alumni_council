export default function PaymentMethodSelector ({
  selectedMethod,
  paymentMethodLabels,
  onFieldChange
}) {
  return (
    <div>
      <p className='text-sm font-medium text-slate-700 mb-3'>Payment method</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
        {['easypaisa', 'jazzcash', 'bank-transfer', 'card'].map(method => (
          <label
            key={method}
            className={`rounded-xl border px-4 py-3 cursor-pointer text-center font-medium transition ${
              selectedMethod === method
                ? 'bg-amber-100 border-amber-500 text-slate-900'
                : 'border-slate-300 text-slate-700 hover:border-amber-500'
            }`}
          >
            <input
              type='radio'
              name='paymentMethod'
              value={method}
              checked={selectedMethod === method}
              onChange={onFieldChange}
              className='sr-only'
            />
            {paymentMethodLabels[method]}
          </label>
        ))}
      </div>
    </div>
  )
}
