import { useMemo, useState } from 'react'

const presetAmounts = [1000, 2500, 5000, 10000]

const focusAreas = [
  'Scholarship Support',
  'Library and Learning Resources',
  'Sports and Student Wellness',
  'Campus Infrastructure',
  'Emergency Student Relief'
]

const bankDetails = {
  accountName: 'NJV Alumni Council',
  accountNumber: 'PK89MEEZ0901123456789012',
  iban: 'PK89MEEZ0901123456789012',
  branchCode: '0901',
  bankName: 'Meezan Bank Limited',
  easypaisa: '03XX-XXXXXXX',
  jazzCash: '03XX-XXXXXXX'
}

const paymentMethodLabels = {
  easypaisa: 'Easypaisa',
  jazzcash: 'JazzCash',
  card: 'Card',
  'bank-transfer': 'Bank Transfer'
}

export default function Donate () {
  const [selectedAmount, setSelectedAmount] = useState(2500)
  const [customAmount, setCustomAmount] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    batch: '',
    focusArea: focusAreas[0],
    paymentMethod: 'easypaisa',
    message: '',
    anonymous: false
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const finalAmount = useMemo(() => {
    const custom = Number(customAmount)
    if (Number.isFinite(custom) && custom > 0) return custom
    return selectedAmount
  }, [customAmount, selectedAmount])

  const handleField = event => {
    const { name, value, type, checked } = event.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.'
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!finalAmount || finalAmount < 500) {
      nextErrors.amount = 'Minimum donation amount is PKR 500.'
    }

    return nextErrors
  }

  const handleSubmit = event => {
    event.preventDefault()
    setStatus(null)

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const donationId = `NJV-${new Date().getFullYear()}-${Math.floor(
      100000 + Math.random() * 900000
    )}`

    const methodInstruction =
      form.paymentMethod === 'easypaisa'
        ? `Send PKR ${finalAmount} to our Easypaisa number ${bankDetails.easypaisa}.`
        : form.paymentMethod === 'jazzcash'
        ? `Send PKR ${finalAmount} to our JazzCash number ${bankDetails.jazzCash}.`
        : form.paymentMethod === 'bank-transfer'
        ? `Transfer PKR ${finalAmount} to ${bankDetails.bankName} (IBAN: ${bankDetails.iban}).`
        : `Use your debit or credit card to complete PKR ${finalAmount} and share the transaction receipt.`

    setStatus({
      type: 'success',
      title: 'Donation pledge recorded',
      detail: `Reference ${donationId}. ${methodInstruction} After payment, send receipt on WhatsApp to +92-300-0000000.`
    })
  }

  return (
    <div className='w-full bg-slate-50 py-12 px-4 sm:px-6'>
      <section className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='bg-white rounded-3xl shadow-md p-8 border border-slate-200'>
          <span className='inline-block bg-blue-100 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full mb-4'>
            Support NJV Today
          </span>
          <h1 className='text-4xl font-bold text-slate-900 mb-4 font-serif'>
            Donate to Shape the Next Generation
          </h1>
          <p className='text-slate-600 text-lg mb-8'>
            Your contribution in PKR supports scholarships, campus facilities,
            and alumni-led student opportunities at NJV.
          </p>

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Bank and UPI Details
            </h2>
            <div className='rounded-2xl border border-blue-200 bg-blue-50 p-5 space-y-2 text-slate-800'>
              <p>
                <strong>Account Name:</strong> {bankDetails.accountName}
              </p>
              <p>
                <strong>Account Number:</strong> {bankDetails.accountNumber}
              </p>
              <p>
                <strong>IBAN:</strong> {bankDetails.iban}
              </p>
              <p>
                <strong>Bank:</strong> {bankDetails.bankName}
              </p>
              <p>
                <strong>Branch Code:</strong> {bankDetails.branchCode}
              </p>
              <p>
                <strong>Easypaisa:</strong> {bankDetails.easypaisa}
              </p>
              <p>
                <strong>JazzCash:</strong> {bankDetails.jazzCash}
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-3xl shadow-md p-8 border border-slate-200 space-y-6'
        >
          <h2 className='text-2xl font-bold text-slate-900'>
            Complete Your Donation
          </h2>

          <div>
            <p className='text-sm font-medium text-slate-700 mb-3'>
              Select Amount (PKR)
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
              {presetAmounts.map(amount => (
                <button
                  key={amount}
                  type='button'
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
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
              onChange={e => setCustomAmount(e.target.value)}
              placeholder='Or enter custom amount'
              className='mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
            />
            {errors.amount && (
              <p className='text-red-600 text-sm mt-2'>{errors.amount}</p>
            )}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              type='text'
              name='fullName'
              value={form.fullName}
              onChange={handleField}
              placeholder='Full name'
              className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
            />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleField}
              placeholder='Email address'
              className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
            />
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleField}
              placeholder='Phone number'
              className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
            />
            <input
              type='text'
              name='batch'
              value={form.batch}
              onChange={handleField}
              placeholder='Passing year or batch'
              className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
            />
          </div>
          {errors.fullName && (
            <p className='text-red-600 text-sm -mt-3'>{errors.fullName}</p>
          )}
          {errors.email && (
            <p className='text-red-600 text-sm -mt-3'>{errors.email}</p>
          )}

          <select
            name='focusArea'
            value={form.focusArea}
            onChange={handleField}
            className='w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700'
          >
            {focusAreas.map(area => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          <div>
            <p className='text-sm font-medium text-slate-700 mb-3'>
              Payment method
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              {['easypaisa', 'jazzcash', 'bank-transfer', 'card'].map(
                method => (
                  <label
                    key={method}
                    className={`rounded-xl border px-4 py-3 cursor-pointer text-center font-medium transition ${
                      form.paymentMethod === method
                        ? 'bg-amber-100 border-amber-500 text-slate-900'
                        : 'border-slate-300 text-slate-700 hover:border-amber-500'
                    }`}
                  >
                    <input
                      type='radio'
                      name='paymentMethod'
                      value={method}
                      checked={form.paymentMethod === method}
                      onChange={handleField}
                      className='sr-only'
                    />
                    {paymentMethodLabels[method]}
                  </label>
                )
              )}
            </div>
          </div>

          <textarea
            name='message'
            rows='3'
            value={form.message}
            onChange={handleField}
            placeholder='Any note for the council (optional)'
            className='w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
          />

          <label className='flex items-center gap-2 text-sm text-slate-600'>
            <input
              type='checkbox'
              name='anonymous'
              checked={form.anonymous}
              onChange={handleField}
              className='rounded border-slate-300'
            />
            <span>
              Keep this donation anonymous in public acknowledgements.
            </span>
          </label>

          <button
            type='submit'
            className='w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition shadow-md'
          >
            Donate PKR {finalAmount}
          </button>

          {status && (
            <div
              className={`rounded-xl p-4 text-sm ${
                status.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
              }`}
            >
              <p className='font-semibold mb-1'>{status.title}</p>
              <p>{status.detail}</p>
            </div>
          )}
        </form>
      </section>
    </div>
  )
}
