import { Mail, Phone } from "lucide-react";
import { COMPANY_CONFIG } from "../constants/config";

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img
          src="favicon.svg"
          alt="digitalist logo"
          className="logo"
          width={30}
          height={30}
        />
        <span>{COMPANY_CONFIG.name}</span>
      </div>
      <div className="header-contacts">
        <div className="contact-item">
          <Phone size={18} className="icon" />
          <span>{COMPANY_CONFIG.phone}</span>
        </div>
        <div className="contact-item">
          <Mail size={18} className="icon" />
          <span>{COMPANY_CONFIG.email}</span>
        </div>
      </div>{" "}
    </header>
  );
}
