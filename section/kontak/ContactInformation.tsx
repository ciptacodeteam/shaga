'use client';

import { useState } from 'react';

import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { LuClock3, LuPhone } from 'react-icons/lu';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
// Link not needed here (form uses native submit button)
const people = [
  {
    id: 1,
    name: 'Wade Cooper',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
  },
];

export default function ContactInformation() {
  const t = useTranslations('contactPage.contactInformationSection');

  const [selected, setSelected] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section id='contact-form'>
        <div className='max-w-7xl mx-auto mb-20 lg:mb-30 px-4 lg:px-0'>
          <div className='flex items-center gap-2 mb-3'>
            <span className='relative flex'>
              <span className='absolute inline-flex size-3 animate-ping rounded-full bg-secondary opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
            </span>
            <p className='text-sm font-medium text-primary uppercase font-manrope'>
              {t('heading')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            <div>
              <div className='mb-6 md:mb-8'>
                <p
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('title'),
                  }}
                ></p>
              </div>

              <div>
                <p className='font-manrope text-primary mb-6 md:mb-10'>
                  {t('description')}
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='border border-[#E0E6F3] p-4 md:p-6 rounded-xl flex flex-col justify-between h-full'>
                  <div className='flex items-center gap-3 lg:gap-4'>
                    <div className='bg-[#E0E6F3] rounded-full p-2 md:p-3 flex-shrink-0 flex items-center justify-center'>
                      <LuPhone className='text-primary w-5 h-5 md:w-6 md:h-6' />
                    </div>

                    <div>
                      <h1 className='font-manrope font-medium text-[#556996]'>
                        {t('phoneLabel')}
                      </h1>
                    </div>
                  </div>
                  <h1 className='font-manrope font-medium text-primary mt-3 md:mt-4 text-base md:text-lg'>
                    +62 811 6383 887
                  </h1>
                </div>

                <div className='border border-[#E0E6F3] p-4 md:p-6 rounded-xl flex flex-col justify-between h-full'>
                  <div className='flex items-center gap-3 md:gap-4'>
                    <div className='bg-[#E0E6F3] rounded-full p-2 md:p-3 flex-shrink-0 flex items-center justify-center'>
                      <HiOutlineMail className='text-primary size-5 md:size-6' />
                    </div>

                    <div>
                      <h1 className='font-manrope font-medium text-[#556996]'>
                        {t('emailLabel')}
                      </h1>
                    </div>
                  </div>
                  <h1 className='font-manrope font-medium text-primary mt-3 md:mt-4 text-base md:text-lg'>
                    shaga3729@gmail.com
                  </h1>
                </div>

                <div className='col-span-1 sm:col-span-2 border border-[#E0E6F3] p-4 md:p-6 rounded-xl flex flex-col justify-between h-full'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-[#E0E6F3] rounded-full p-2 md:p-3 flex-shrink-0 flex items-center justify-center'>
                      <HiOutlineLocationMarker className='text-primary w-5 h-5 md:w-6 md:h-6' />
                    </div>

                    <div>
                      <h1 className='font-manrope font-medium text-[#556996]'>
                        {t('addressLabel')}
                      </h1>
                    </div>
                  </div>
                  <h1 className='font-manrope font-medium text-primary mt-3 md:mt-4 text-base md:text-lg'>
                    Jl. Mengkara No.2, Petisah Tengah, Kec. Medan Petisah, Kota
                    Medan, Sumatera Utara 20111
                  </h1>
                </div>

                <div className='col-span-1 sm:col-span-2 border border-[#E0E6F3] p-4 md:p-6 rounded-xl flex flex-col justify-between h-full'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-[#E0E6F3] rounded-full p-2 md:p-3 flex-shrink-0 flex items-center justify-center'>
                      <LuClock3 className='text-primary w-5 h-5 md:w-6 md:h-6' />
                    </div>

                    <div>
                      <h1 className='font-manrope font-medium text-[#556996]'>
                        {t('operationalLabel')}
                      </h1>
                    </div>
                  </div>
                  <h1 className='font-manrope font-medium text-primary mt-3 md:mt-4 text-base md:text-lg'>
                    {t('operationalHours')}
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <div className='border border-[#E0E6F3] p-6 md:p-8 rounded-xl flex flex-col justify-between h-full'>
                <p className='font-manrope text-[#556996] text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4'>
                  {t('formTitle')}
                </p>

                <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                        {t('formFirstName.label')}
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        placeholder={t('formFirstName.placeholder')}
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                        {t('formLastName.label')}
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        placeholder={t('formLastName.placeholder')}
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope'
                      />
                    </div>
                  </div>

                  {/* Grid untuk email & phone */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                        {t('formEmail.label')}
                      </label>
                      <input
                        type='email'
                        name='email'
                        placeholder={t('formEmail.placeholder')}
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                        {t('formPhone.label')}
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        placeholder={t('formPhone.placeholder')}
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope'
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Listbox value={selected} onChange={setSelected}>
                      <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                        {t('formService.label')}
                      </label>
                      <div className='relative'>
                        <ListboxButton className='grid w-full grid-cols-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'>
                          <span className='col-start-1 row-start-1 flex items-center gap-3 pr-6'>
                            <span
                              className={`block font-manrope ${
                                !selected ? 'text-gray-400' : 'text-black'
                              }`}
                            >
                              {selected
                                ? selected.name
                                : t('formService.placeholder')}
                            </span>
                          </span>
                          <ChevronUpDownIcon
                            aria-hidden='true'
                            className='col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4'
                          />
                        </ListboxButton>

                        <ListboxOptions
                          transition
                          className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#E0E6F3] py-1 text-base outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm'
                        >
                          {people.map((person) => (
                            <ListboxOption
                              key={person.id}
                              value={person}
                              className='group relative cursor-default py-2 pr-9 pl-3 text-primary select-none data-focus:bg-primary data-focus:outline-hidden font-manrope'
                            >
                              <div className='flex items-center'>
                                <span className='ml-3 block truncate font-normal group-data-selected:font-semibold font-manrope group-data-focus:text-white'>
                                  {person.name}
                                </span>
                              </div>

                              <span className='absolute inset-y-0 right-0 flex items-center pr-4 group-not-data-selected:hidden group-data-focus:text-white'>
                                <CheckIcon
                                  aria-hidden='true'
                                  className='size-5'
                                />
                              </span>
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div>

                  {/* Message */}
                  <div>
                    <label className='block text-sm font-medium text-primary font-manrope mb-2'>
                      {t('formMessage.label')}
                    </label>
                    <textarea
                      name='message'
                      placeholder={t('formMessage.placeholder')}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope resize-none'
                    />
                  </div>

                  {/* Tombol Submit */}
                  <div>
                    <button
                      type='submit'
                      className='w-full bg-primary text-white py-3 rounded-full transition font-manrope cursor-pointer text-sm md:text-base lg:text-lg font-medium'
                    >
                      {t('formSubmitText')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
