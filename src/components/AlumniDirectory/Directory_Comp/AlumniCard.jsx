import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

export default function AlumniCard ({ alumni }) {
  return (
    <div className='group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-30px_rgba(15,23,42,0.55)]'>
      <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600 via-sky-500 to-amber-400 opacity-90' />
      <div className='relative flex h-full flex-col p-6 pt-7 text-center'>
        <div className='mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg ring-4 ring-blue-50'>
          <img
            src={
              alumni.image ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                alumni.name
              )}&background=random`
            }
            alt={alumni.name}
            className='h-full w-full object-cover'
            onError={e => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                alumni.name
              )}&background=random`
            }}
          />
        </div>

        <h3 className='text-xl font-bold text-slate-900 mb-1 font-serif'>
          {alumni.name}
        </h3>
        <p className='mx-auto mb-5 max-w-[14rem] text-sm text-slate-500'>
          {alumni.university}
        </p>

        <div className='mb-5 inline-flex w-fit items-center self-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700'>
          <AcademicCapIcon className='mr-1.5 h-4 w-4' />
          Passout {alumni.passoutYear}
        </div>

        <div className='mb-6 grid gap-3 text-left text-sm text-slate-600'>
          <div className='flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3'>
            <CalendarDaysIcon className='mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500' />
            <div>
              <p className='font-medium text-slate-900'>Current Study Year</p>
              <p className='mt-0.5'>{alumni.currentStudyYear}</p>
            </div>
          </div>
          <div className='flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3'>
            <BuildingLibraryIcon className='mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500' />
            <div>
              <p className='font-medium text-slate-900'>University</p>
              <p className='mt-0.5 line-clamp-2'>{alumni.university}</p>
            </div>
          </div>
        </div>

        <button className='mt-auto w-full rounded-xl border border-blue-200 bg-blue-50 py-2.5 font-semibold text-blue-700 transition duration-300 hover:border-blue-300 hover:bg-blue-100'>
          View Profile
        </button>
      </div>
    </div>
  )
}
