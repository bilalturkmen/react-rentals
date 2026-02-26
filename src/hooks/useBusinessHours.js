import { useState, useEffect } from "react";

export function useBusinessHours(openHour, closeHour) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      const isWeekday = day >= 1 && day <= 5;
      setIsOpen(isWeekday && hour >= openHour && hour < closeHour);
    };

    checkStatus(); // Initial check

    const timer = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(timer); // Cleanup on unmount
  }, [openHour, closeHour]);

  return isOpen;
}
