export default function BankDetailsCard ({ bankDetails }) {
  return (
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
  )
}
