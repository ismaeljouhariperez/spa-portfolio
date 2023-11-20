import React from "react";
import { useTranslation } from "@/app/i18n";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import ReactTextTransition, { presets } from "react-text-transition";
import useRandomTextIndex from "@/hooks/useRandomTextIndex";

type ContactProps = {
    lng: string;
  };

const ContactSection: React.FC<ContactProps> = ({ lng }) => {

    const contactList = [
        { name: 'Behance', url: '/' },
        { name: 'LinkedIn', url: '/webagency' },
        { name: 'Twitter', url: '/ville_ireki' },
        { name: 'Instagram', url: '/bikeluxembourg' },
        { name: 'Blog', url: '/jeanforteroche' },
    ];

    const { t } = useTranslation(lng, 'translation');
    const title = t ? t('contact.title', lng) : '';
    const btn = t ? t('contact.btn', lng) : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cta = t ? t('contact.cta', { returnObjects: true }) : [];
    const ctaIndex = useRandomTextIndex(cta.length); 

    return (
        <div className="container flex flex-col mx-auto h-4/6 justify-between">
            <div className="flex flex-col items-start">
                <h1 className="text-6xl">
                    {title}
                    <ReactTextTransition
                        springConfig={presets.slow}
                        className=""
                        inline
                        >&nbsp;{cta[ctaIndex]}
                    </ReactTextTransition>.
                </h1>
                <button className=" border rounded-full hover:bg-white hover:text-black text-4xl px-6 py-4 my-5 transition duration-700">
                    { btn }
                </button>
            </div>
            <div className='flex self-end'>
                <ul className='grid grid-cols-2'>
                {contactList.map((contact, index) => (
                    <li className="group transition flex justify-between items-center px-2" key={index}>
                        <Link href={contact.url} passHref>
                            <span className="hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white duration-500 transition-bg relative inline-block">
                            <h2 className="px-4 relative text-3xl hover:text-black transition">{contact.name}</h2>
                            </span>
                        </Link>
                        <Link href={contact.url} passHref>
                            <ArrowUpRightIcon className="w-6 h-6 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:-translate-z-1 transition motion-reduce:hover:translate-y-0 duration-700 transition ease-in-out "/>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactSection;
