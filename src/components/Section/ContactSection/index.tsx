import React from 'react';
import { useTranslation } from "@/app/i18n";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import useTextRotation from '@/hooks/useTextRotation';
import TextTransition, { presets } from 'react-text-transition';

type ContactProps = {
    lng: string;
};

const ContactSection: React.FC<ContactProps> = ({ lng }) => {

    const contactList = [
        { name: 'Behance', url: 'https://www.behance.net/ismaeljouhari' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ismael-jhri/' },
        { name: 'Twitter', url: 'https://twitter.com/hypsanda' },
        { name: 'Instagram', url: 'https://instagram.com/hypsanda' },
        { name: 'Blog', url: 'https://ismael.photos' },
    ];

    const { t } = useTranslation(lng, 'translation');
    const title = t ? t('contact.title', lng) : '';
    const btn = t ? t('contact.btn', lng) : '';
    const cta = t ? t('contact.cta', { returnObjects: true }) : [];
    const ctaText = useTextRotation(cta, 2000);

    return (
        <div className="container flex flex-col mx-auto h-4/6 justify-between">
            <div className="flex flex-col items-start">
                <h1 className="text-6xl">
                    { title }&nbsp;
                    <TextTransition inline springConfig={presets.gentle}>
                        { ctaText }
                    </TextTransition>.
                </h1>
                <button className="btn-fill-effect border rounded-full text-4xl px-6 py-4 my-5">
                    { btn }
                </button>
            </div>
            <div className='flex self-end'>
                <ul className='menu grid grid-cols-2'>
                {contactList.map((contact, index) => (
                    <li className="flex relative group" key={index}>
                        <Link href={contact.url} className="flex items-center" passHref>
                            <h2 className="mx-5 text-3xl">{contact.name}</h2>
                            <ArrowUpRightIcon className=" w-6 h-6 transition duration-700 transition ease-in-out "/>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactSection;
