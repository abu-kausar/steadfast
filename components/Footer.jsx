import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerDetails, footerLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className='flex flex-col bg-[#0F172A] text-white'>
            <div className='w-[1280px] mx-auto flex max-md:flex-col flex-wrap justify-between gap-5 py-10'>
                <div className='w-1/4 flex flex-col justify-start items-start'>
                    <div className='flex items-center gap-3'>
                        <Image
                            src="/footer/logo.png"
                            alt="logo"
                            width={48}
                            height={48}
                            className='object-contain'
                        />
                        <p className='text-[48px] font-bold text-white'>
                            {footerDetails.title}
                        </p>
                    </div>
                    <p className='text-sm text-white font-normal leading-[20px]'>{footerDetails.details}</p>
                    <div className='pt-3 flex flex-col gap-3'>
                        <span className='flex items-center gap-2'>
                            <Image
                                src="/footer/location.png"
                                alt="location"
                                width={32}
                                height={32}
                                className='object-contain'
                            />
                            <p>{footerDetails.location}</p>
                        </span>

                        <span className='flex items-center gap-2'>
                            <Image
                                src="/footer/phone.png"
                                alt="phone"
                                width={32}
                                height={32}
                                className='object-contain'
                            />
                            <p>{footerDetails.phone}</p>
                        </span>

                        <span className='flex items-center gap-2'>
                            <Image
                                src="/footer/mail.png"
                                alt="email"
                                width={32}
                                height={32}
                                className='object-contain'
                            />
                            <p>{footerDetails.email}</p>
                        </span>
                    </div>
                </div>

                <div className="w-2/4 flex flex-wrap mt-3 ml-15">
                    {footerLinks.map((link) => (
                        <div
                        key={link.title}
                        className="w-1/2 flex flex-col gap-3 mb-6"
                        >
                        <h3 className="text-[#94A3B8] text-lg font-semibold mb-2">
                            {link.title}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {link.links.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className="text-white text-base hover:text-[#38BDF8] transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] text-[#94A3B8] font-medium'>Need Support?</p>
                        <div className='flex items-center justify-center gap-2 rounded-sm border border-[#F1F5F9] px-4 py-2'>
                            <Image
                                src="/footer/helpline.png"
                                alt="support"
                                width={24}
                                height={24}
                                className='object-contain'
                            />

                            <p className='text-base text-white'>10724-7814XX</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] text-[#94A3B8] font-medium'>Download App</p>
                            <Image
                                src="/footer/googlePlay.png"
                                alt="play-store"
                                width={180}
                                height={54}
                                className='object-contain'
                            />

                            <Image
                                src="/footer/appStore.png"
                                alt="app-store"
                                width={180}
                                height={54}
                                className='object-contain'
                            />
                    </div>
                </div>
            </div>

            <div className='w-[1280px] mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <p>Follow us on</p>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/fb.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/instagram.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/x.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className='object-contain'
                        />
                    </a>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#94A3B8] text-lg font-medium pr-5'>PAYMENT ACCEPTED</p>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/visa.png"
                            alt="visa"
                            width={68}
                            height={44}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/mastercard.png"
                            alt="mastercard"
                            width={68}
                            height={44}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/amex.png"
                            alt="amex"
                            width={68}
                            height={44}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/bkash.png"
                            alt="bkash"
                            width={68}
                            height={44}
                            className='object-contain'
                        />
                    </a>
                    <a
                        href="#"
                        className="text-white text-base"
                    >
                        <Image
                            src="/footer/nagad.png"
                            alt="nagad"
                            width={68}
                            height={44}
                            className='object-contain'
                        />
                    </a>
                </div>
            </div>

            <div className='flex justify-center items-center flex-wrap mt-10 border-t border-[#FFFFFF30] sm:px-16 px-6 py-10'>
                <h1>Falcon ©2025. Design by xyz</h1>
            </div>
        </footer>
    )
}

export default Footer