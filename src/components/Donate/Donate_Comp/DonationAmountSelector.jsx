export default function DonationAmountSelector ({
  presetAmounts,
  selectedAmount,
  customAmount,
  onSelectAmount,
  onCustomAmountChange,
  amountError
}) {
  return (
    <div>
      <p className='text-sm font-medium text-slate-700 mb-3'>
        Select Amount (PKR)
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {presetAmounts.map(amount => (
          <button
            key={amount}
            type='button'
            onClick={() => onSelectAmount(amount)}
            className={`rounded-xl border px-4 py-3 font-semibold transition ${
              selectedAmount === amount && !customAmount
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-slate-800 border-slate-300 hover:border-blue-600'
            }`}
          >
            {amount}
          </button>
        ))}
      </div>
      <input
        type='number'
        min='500'
        value={customAmount}
        onChange={event => onCustomAmountChange(event.target.value)}
        placeholder='Or enter custom amount'
        className='mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
      />
      {amountError && (
        <p className='text-red-600 text-sm mt-2'>{amountError}</p>
      )}
    </div>
  )
}
