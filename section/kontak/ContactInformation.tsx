"use client"

import { useState } from "react";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"
import { LuClock3, LuPhone } from "react-icons/lu"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
const people = [
    {
        id: 1,
        name: 'Wade Cooper',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
    },
]

export default function ContactInformation() {
    const [selected, setSelected] = useState<any>(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                        </span>
                        <p className="text-sm font-medium text-primary uppercase font-manrope">
                            informasi kontak
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <div className="mb-8">
                                <p className="font-manrope text-5xl leading-tight text-primary">
                                    <span className="text-secondary">Terhubunglah</span> dengan kami hari ini dan kami akan <span className="text-secondary">membantu bisnis Anda</span>
                                </p>
                            </div>

                            <div>
                                <p className="font-manrope text-primary mb-10">
                                    Siap membawa logistik Anda ke level selanjutnya? Hubungi kami hari ini untuk mengetahui bagaimana solusi khusus dan keahlian kami dapat mentransformasi rantai pasok Anda.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <LuPhone className="text-primary w-6 h-6" />
                                        </div>

                                        <div>
                                            <h1 className="font-manrope font-medium text-[#556996]">Telepon</h1>
                                        </div>
                                    </div>
                                    <h1 className="font-manrope font-medium text-primary mt-4 text-lg">
                                        <p>+62 811 6383 887</p>
                                    </h1>
                                </div>

                                <div className="border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <HiOutlineMail className="text-primary w-6 h-6" />
                                        </div>

                                        <div>
                                            <h1 className="font-manrope font-medium text-[#556996]">E-mail</h1>
                                        </div>
                                    </div>
                                    <h1 className="font-manrope font-medium text-primary mt-4 text-lg">
                                        <p>shaga3729@gmail.com</p>
                                    </h1>
                                </div>

                                <div className="col-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <HiOutlineLocationMarker className="text-primary w-6 h-6" />
                                        </div>

                                        <div>
                                            <h1 className="font-manrope font-medium text-[#556996]">Alamat</h1>
                                        </div>
                                    </div>
                                    <h1 className="font-manrope font-medium text-primary mt-4 text-lg">
                                        <p>Jl. Mengkara No.2, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111</p>
                                    </h1>
                                </div>

                                <div className="col-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <LuClock3 className="text-primary w-6 h-6" />
                                        </div>

                                        <div>
                                            <h1 className="font-manrope font-medium text-[#556996]">Jam Operasional</h1>
                                        </div>
                                    </div>
                                    <h1 className="font-manrope font-medium text-primary mt-4 text-lg">
                                        <p>Senin - Sabtu, 8:30 - 17:00 WIB</p>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="border border-[#E0E6F3] p-8 rounded-xl flex flex-col justify-between h-full">
                                <p className="font-manrope text-[#556996] text-4xl leading-tight mb-4">Silakan isi formulir di bawah ini, dan tim kami akan segera menghubungi Anda.</p>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-primary font-manrope mb-2">Nama Depan</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Masukkan nama depan"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-primary font-manrope mb-2">Nama Belakang</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Masukkan nama belakang"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope"
                                            />
                                        </div>
                                    </div>

                                    {/* Grid untuk email & phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-primary font-manrope mb-2">Alamat Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Masukkan email kamu"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-primary font-manrope mb-2">Nomor Telepon</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Masukkan nomor kamu"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <Listbox value={selected} onChange={setSelected}>
                                            <label className="block text-sm font-medium text-primary font-manrope mb-2">Layanan Shaga</label>
                                            <div className="relative">
                                                <ListboxButton className="grid w-full grid-cols-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                                        <span
                                                            className={`block font-manrope ${!selected ? "text-gray-400" : "text-black"
                                                                }`}
                                                        >
                                                            {selected ? selected.name : "Pilih layanan"}
                                                        </span>
                                                    </span>
                                                    <ChevronUpDownIcon
                                                        aria-hidden="true"
                                                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                                    />
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#E0E6F3] py-1 text-base outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                                >
                                                    {people.map((person) => (
                                                        <ListboxOption
                                                            key={person.id}
                                                            value={person}
                                                            className="group relative cursor-default py-2 pr-9 pl-3 text-primary select-none data-focus:bg-primary data-focus:outline-hidden font-manrope"
                                                        >
                                                            <div className="flex items-center">
                                                                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold font-manrope group-data-focus:text-white">{person.name}</span>
                                                            </div>

                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 group-not-data-selected:hidden group-data-focus:text-white">
                                                                <CheckIcon aria-hidden="true" className="size-5" />
                                                            </span>
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-primary font-manrope mb-2">Pesan</label>
                                        <textarea
                                            name="message"
                                            placeholder="Masukkan pesan kamu"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400 placeholder:font-manrope font-manrope resize-none"
                                        />
                                    </div>

                                    {/* Tombol Submit */}
                                    <Link
                                        href={""}
                                    >
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white text-lg font-medium py-3 rounded-full transition font-manrope cursor-pointer"
                                        >
                                            Hubungi Kami
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}