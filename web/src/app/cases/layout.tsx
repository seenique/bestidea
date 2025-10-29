import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы — bestidea",
  description: "Реальные примеры: лендинги, CRM/ERP, маркетплейсы и кастомные решения",
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

