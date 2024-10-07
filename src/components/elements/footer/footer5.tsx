import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";

// components
import Logo from "../common/logo";
import { socialShare1 } from "@/components/tools/social";

type Props = {
  footerNav: {
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const Footer5 = ({ footerNav }: Props) => {
  const { site_info, footer_info, social } = siteConfig;
  const { copyright } = footer_info;
  const { description } = site_info;

  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer top section with navigation and logo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-y-0 gap-x-8 justify-between pt-10 pb-10">
          <div className="col-span-1 lg:col-span-2">
            <Logo light />
            <div className="mt-6">
              <p className="max-w-[400px] lg:max-w-[300px] text-white-2">
                {description}
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-1 lg:col-span-3 flex justify-between flex-wrap gap-y-10 gap-x-8">
            {footerNav &&
              footerNav.length &&
              footerNav.slice(0, 3).map((nav, i) => (
                <div key={`footer_nav-${i}`}>
                  <h2 className="text-[20px] xl:text-[24px] !text-white font-medium">
                    {nav.title}
                  </h2>
                  {nav.children && nav.children.length && (
                    <ul className="mt-4 space-y-2">
                      {nav.children.map((child, j) => (
                        <li
                          key={`child_nav-${i}${j}`}
                          className="text-[18px] text-white-2 leading-7"
                        >
                          <Link href={child.path} className="hover:text-white">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Social Links and Bottom Info */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            {social && social.length && (
              <ul className="flex space-x-6 justify-center">
                {social.map((item, i) => (
                  <li key={`social_share-${i}`}>
                    {socialShare1(
                      item,
                      "text-gray-400 hover:text-white transition-colors duration-200"
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Links to Privacy Policy & Terms */}
            <div className="flex space-x-4 text-gray-400 text-sm text-center">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Copyright Info */}
          {copyright && copyright.enable && (
            <div className="mt-4 text-sm text-gray-400 text-center py-5">
              {copyright.label}{" "}
              <Link href={copyright.link} className="text-white">
                {copyright.company}
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
