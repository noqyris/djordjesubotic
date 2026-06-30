// The "facts a recruiter needs" panel. Values marked CONFIRM are sensible
// defaults — replace them with your real answers (see the README / handoff note).

export type Fact = {
  icon: "clock" | "pin" | "languages" | "briefcase" | "calendar" | "education";
  label: string;
  value: string;
};

export const facts: Fact[] = [
  { icon: "clock", label: "Experience", value: "5+ years · full-time since 2021" }, // CONFIRM years + start
  { icon: "education", label: "Education", value: "Graduate Engineer in Computer Science" },
  { icon: "pin", label: "Location", value: "Serbia · works remotely · CET/CEST (UTC+1/+2)" },
  { icon: "languages", label: "English", value: "Professional working proficiency" }, // CONFIRM real level
  { icon: "briefcase", label: "Work type", value: "Full-time or B2B contract" }, // CONFIRM preference
  { icon: "calendar", label: "Availability", value: "Open to new roles · flexible start" }, // CONFIRM notice
];

export type Language = { language: string; level: string };

// German intentionally omitted — add it only if you actually speak it
// (GrEco is a German-speaking group, so it's plausible, but not assumed).
export const languages: Language[] = [
  { language: "Serbian", level: "Native" },
  { language: "English", level: "Professional working proficiency" }, // CONFIRM
];
