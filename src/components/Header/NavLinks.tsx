import { useTranslation } from "@/app/i18n";
import React from "react";

interface NavLinkProps {
  lng: string;
  currentSection?: number;
  navigateToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinkProps> = ({
  lng,
  currentSection,
  navigateToSection,
}) => {
  const { t } = useTranslation(lng, "translation");

  if (!t) {
    return null;
  }

  const sections = [
    { id: "section-2", label: "nav.clients" },
    { id: "section-3", label: "nav.projects" },
    { id: "section-4", label: "nav.profile" },
    { id: "section-5", label: "nav.skills" },
    { id: "section-6", label: "nav.contact" },
  ];

  const handleClick =
    (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigateToSection(sectionId);
    };

  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="flex flex-row justify-between items-center">
          {sections.map(({ id, label }) => (
            <li key={id} className="mx-4 my-2 md:my-0">
              <a onClick={handleClick(id)} href={`#${id}`}>
                <button
                  className={`cta px-4 py-2 text-sm lg:text-md ${
                    currentSection === parseInt(id.split("-")[1])
                      ? "cta-active"
                      : "opacity-0"
                  }`}
                >
                  {t(label)}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
