export type Locale = "en" | "hi";

export const messages = {
  en: {
    dashboard: "Dashboard",
    students: "Students",
    admissions: "Admissions",
    attendance: "Attendance",
    fees: "Fees",
    hostel: "Hostel",
    settings: "Settings",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    students: "विद्यार्थी",
    admissions: "प्रवेश",
    attendance: "उपस्थिति",
    fees: "शुल्क",
    hostel: "छात्रावास",
    settings: "सेटिंग्स",
  },
} as const;

export function translate(key: keyof typeof messages.en, locale: Locale = "en") {
  return messages[locale][key];
}
