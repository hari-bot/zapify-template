import Link from "next/link";

// icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaReddit,
} from "react-icons/fa6";

// lib
import { cn } from "@/lib/utils";

type SocialType = {
  name: string;
  link: string;
  value?: string;
};

export const socialShare1 = (item: SocialType, className: string) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaFacebookF />
        </Link>
      );
    case "X":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaXTwitter />
        </Link>
      );
    case "In":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaInstagram />
        </Link>
      );
    case "Yt":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaYoutube />
        </Link>
      );
    case "Li":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaLinkedin />
        </Link>
      );
    case "Rd":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaReddit />
        </Link>
      );
  }
};
