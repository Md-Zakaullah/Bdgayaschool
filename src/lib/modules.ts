export type ModuleKey =
  | "dashboard" | "admissions" | "students" | "attendance" | "fees"
  | "exams" | "staff" | "hostel" | "parentPortal" | "reports" | "settings";

export const moduleRegistry: { key: ModuleKey; label: string; enabledByDefault: boolean }[] = [
  { key: "dashboard", label: "Dashboard", enabledByDefault: true },
  { key: "admissions", label: "Admissions", enabledByDefault: true },
  { key: "students", label: "Students", enabledByDefault: true },
  { key: "attendance", label: "Attendance", enabledByDefault: true },
  { key: "fees", label: "Fees", enabledByDefault: true },
  { key: "exams", label: "Exams & Results", enabledByDefault: true },
  { key: "staff", label: "Teachers & Staff", enabledByDefault: true },
  { key: "hostel", label: "Hostel", enabledByDefault: true },
  { key: "parentPortal", label: "Parent Portal", enabledByDefault: false },
  { key: "reports", label: "Reports", enabledByDefault: true },
  { key: "settings", label: "Settings", enabledByDefault: true },
];
