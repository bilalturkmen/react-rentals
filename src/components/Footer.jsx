import { Clock } from "lucide-react";
import { useBusinessHours } from "../hooks/useBusinessHours";
import { COMPANY_CONFIG } from "../constants/config";
import FooteAttrribution from "./FooterAttribution";

export default function Footer() {
  const { open, close } = COMPANY_CONFIG.hours;
  const isOpen = useBusinessHours(open, close);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <footer className="footer">
      <div className="status-container">
        <span className={`status-text ${isOpen ? "open" : "closed"}`}>
          <Clock size={18} />
          {isOpen ? "Office is Open" : "Office is Closed"}
        </span>
      </div>
      <p className="footer-subtext">
        {isOpen
          ? `Instant Support: ${COMPANY_CONFIG.phone}`
          : `Our Working Hours: Monday to Friday, ${formatTime(open)}:00 – ${formatTime(close)}:00`}
      </p>

      <FooteAttrribution />
    </footer>
  );
}
