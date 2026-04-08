import AlumniCard from './Directory_Comp/AlumniCard'
import { dummyAlumni } from './alumni_data'

export default function AlumniDirectory () {
  const filteredAlumni = dummyAlumni
  const totalAlumni = filteredAlumni.length
  const universityCount = new Set(
    filteredAlumni.map(alumni => alumni.university)
  ).size
  const latestPassoutYear = filteredAlumni.reduce((latestYear, alumni) => {
    const year = Number(alumni.passoutYear)
    return Number.isFinite(year) && year > latestYear ? year : latestYear
  }, 0)

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <section className='relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] mb-10'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.10),_transparent_32%)]' />
          <div className='relative grid gap-8 lg:grid-cols-[1.35fr_0.85fr] p-8 md:p-12'>
            <div className='space-y-5'>
              <span className='inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold tracking-wide text-blue-800'>
                NJV Alumni Network
              </span>
              <div className='space-y-4'>
                <h1 className='max-w-2xl text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 font-serif leading-tight'>
                  Meet alumni who are building their future at universities
                  around the world.
                </h1>
                <p className='max-w-2xl text-base md:text-lg leading-8 text-slate-600'>
                  Explore passout year, current study year, and university
                  details in one clean directory designed to help alumni stay
                  connected, discover common paths, and support one another.
                </p>
              </div>
            </div>

            <div className='grid gap-4 self-end sm:grid-cols-3 lg:grid-cols-1'>
              <div className='rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm'>
                <p className='text-sm font-medium text-blue-700'>
                  Total Alumni
                </p>
                <p className='mt-2 text-3xl font-bold text-slate-950'>
                  {totalAlumni}
                </p>
              </div>
              <div className='rounded-2xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm'>
                <p className='text-sm font-medium text-amber-700'>
                  Universities
                </p>
                <p className='mt-2 text-3xl font-bold text-slate-950'>
                  {universityCount}
                </p>
              </div>
              <div className='rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm'>
                <p className='text-sm font-medium text-emerald-700'>
                  Latest Passout
                </p>
                <p className='mt-2 text-3xl font-bold text-slate-950'>
                  {latestPassoutYear || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white/90 backdrop-blur rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 mb-10'>
          <div className='mx-auto max-w-4xl text-center'>
            <h3 className='text-2xl md:text-3xl font-bold text-slate-950 font-serif mb-3'>
              Why This Directory Helps
            </h3>
            <p className='text-slate-600 leading-relaxed md:text-lg'>
              Stay connected with NJV alumni as they continue their studies at
              universities across the world. Discover passout year, current
              study year, and university details in one place to support
              mentorship, collaboration, and lasting community bonds.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        {filteredAlumni.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8'>
            {filteredAlumni.map(alumni => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
        ) : (
          <div className='text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100'>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>
              No Alumni Found
            </h3>
            <p className='text-slate-500'>
              Alumni data is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
