import { BookOpen, Users, Wallet, BedDouble, CalendarCheck, GraduationCap } from "lucide-react";

const stats = [
  { label: "Total Students", value: "428", note: "Across all classes", icon: Users },
  { label: "Fee Collection", value: "₹4.8L", note: "This month", icon: Wallet },
  { label: "Hostel Residents", value: "96", note: "Boys & girls hostel", icon: BedDouble },
  { label: "Today's Attendance", value: "94.2%", note: "Student attendance", icon: CalendarCheck },
];

const modules = [
  ["Admissions", "New enquiries and admission approvals", BookOpen],
  ["Students", "Student profiles and records", Users],
  ["Attendance", "Daily attendance and reports", CalendarCheck],
  ["Fees", "Fee plans, dues and receipts", Wallet],
  ["Exams & Results", "Assessments, marks and report cards", GraduationCap],
  ["Hostel", "Rooms, beds and resident records", BedDouble],
] as const;

export default function Dashboard() {
  return (
    <main className="min-h-screen p-5 md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-sm font-semibold tracking-wide text-indigo-600">SCHOOL MANAGEMENT</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Dashboard</h1><p className="mt-1 text-sm text-slate-500">Welcome back · स्कूल प्रबंधन डैशबोर्ड</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm"><span className="font-semibold">School Admin</span><span className="ml-2 text-slate-500">Preview mode</span></div>
        </header>
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, note, icon: Icon }) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">{label}</p><Icon className="h-5 w-5 text-indigo-600" /></div><p className="mt-4 text-3xl font-bold">{value}</p><p className="mt-1 text-xs text-slate-400">{note}</p></article>)}
        </section>
        <section className="mt-9"><div className="mb-4"><h2 className="text-xl font-bold">Management modules</h2><p className="mt-1 text-sm text-slate-500">Enable the modules your school needs.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{modules.map(([name, desc, Icon]) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Icon className="h-5 w-5" /></div><h3 className="font-semibold">{name}</h3><p className="mt-1 text-sm text-slate-500">{desc}</p><p className="mt-4 text-xs font-semibold text-indigo-600">OPEN MODULE →</p></article>)}</div></section>
        <p className="mt-10 text-center text-xs text-slate-400">Initial dashboard preview · Demo figures only · Not connected to live student data</p>
      </div>
    </main>
  );
}
