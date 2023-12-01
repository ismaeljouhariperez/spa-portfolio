import React from 'react';
import { useTranslation } from "@/app/i18n";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import useTextRotation from '@/hooks/useTextRotation';
import TextTransition, { presets } from 'react-text-transition';
import { FaBehance, FaLinkedin, FaGhost, FaInstagram, FaSquarespace } from "react-icons/fa";
import useDeviceDetection from '@/hooks/useDeviceDetection';

type Contact = {
  name: string;
  url: string;
  icon: JSX.Element;
};

type ContactProps = {
  lng: string;
};

const ContactSection: React.FC<ContactProps> = ({ lng }) => {

  const iconClass = "w-7 h-7 mx-4";

  const contactList: Contact[] = [
    { name: 'Behance', url: 'https://www.behance.net/ismaeljouhari', icon: <FaBehance className={iconClass} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ismael-jhri/', icon: <FaLinkedin className={iconClass} /> },
    { name: 'Blog', url: 'https://twitter.com/hypsanda', icon: <FaGhost className={iconClass} /> },
    { name: 'Instagram', url: 'https://instagram.com/hypsanda', icon: <FaInstagram className={iconClass} /> },
    { name: 'Squarespace', url: 'https://ismael.photos', icon: <FaSquarespace className={iconClass} /> },
];
    const { t } = useTranslation(lng, 'translation');
    const title = t ? t('contact.title', lng) : '';
    const contactButton = t ? t('contact.btn', lng) : '';
    const cta = t ? t('contact.cta', { returnObjects: true }) : [];
    const ctaText = useTextRotation(cta as string[], 2000);
    const device = useDeviceDetection();

    const renderContactItem = (contact: Contact, index:number) => (
        device === 'mobile' ? (
            <li key={index}>
                <Link href={contact.url} passHref>
                    {contact.icon}
                </Link>
            </li>
        ) : (
            <li className="flex relative group" key={index}>
                <Link href={contact.url} className="flex items-center" passHref>
                    <h2 className="mx-5 text-2xl">{contact.name}</h2>
                    <ArrowUpRightIcon className="w-6 h-6 transition duration-700 transition ease-in-out "/>
                </Link>
            </li>
        )
    );

    return (
        <div className="container flex flex-col mx-auto h-80 lg:h-4/6 justify-between">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-2xl lg:text-5xl xl:text-6xl">
                        { title }&nbsp;
                        <TextTransition inline springConfig={presets.gentle}>
                            { ctaText }
                        </TextTransition>.
                    </h1>
                    <Link 
                        href="mailto:ismael.jouhari@gmail.com" 
                        className='inline-flex'
                    >
                    <button className="btn-fill-effect border rounded-full text-l lg:text-3xl xl:text-4xl px-6 py-2 my-2 lg:my-5">
                        { contactButton }
                    </button>
                    </Link>
                </div>
                <div className='lg:self-end'>
                    <ul className='flex justify-center lg:menu lg:grid lg:grid-cols-2'>
                        {contactList.map((contact, index) => renderContactItem(contact, index))}
                    </ul>
                </div>
            </div>
    )};

export default ContactSection;
