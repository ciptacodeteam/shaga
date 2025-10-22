import { transformMessages } from '@/i18n/messages';
import { useMessages } from 'next-intl';

export default function NumberSection() {
  const messages = useMessages();
  const statList = transformMessages(messages.aboutPage.numberSection.stats);

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-20 md:mb-32'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 px-4 md:px-0'>
            {statList.map(
              (
                stat: { id: string; value: string; label: string },
                i: number
              ) => (
                <div className='border border-[#E0E6F3] p-8 rounded-xl' key={i}>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary  text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                      {stat.value}
                    </h1>
                    <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                      {stat.label}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
