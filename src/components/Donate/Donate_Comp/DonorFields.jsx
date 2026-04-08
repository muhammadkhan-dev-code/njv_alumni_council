export default function DonorFields ({ form, onFieldChange, errors }) {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <input
          type='text'
          name='fullName'
          value={form.fullName}
          onChange={onFieldChange}
          placeholder='Full name'
          className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
        />
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={onFieldChange}
          placeholder='Email address'
          className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
        />
        <input
          type='tel'
          name='phone'
          value={form.phone}
          onChange={onFieldChange}
          placeholder='Phone number'
          className='rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700'
        />
        <input
          type='text'
          name='batch'
          value={form.batch}
          onChange={onFieldChange}
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
    </>
  )
}
