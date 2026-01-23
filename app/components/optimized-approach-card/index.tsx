"use client";

import { FlagIcon } from "@/app/icons/flag";
import { HandIcon } from "@/app/icons/hand";
import { RookIcon } from "@/app/icons/rook";
import { SettingsIcon } from "@/app/icons/settings";
import { UmbrellaIcon } from "@/app/icons/umbrella";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Pie } from "./pie";
import Link from "next/link";

export enum SECTIONS {
  InvestmentManagement,
  FinancialPlanning,
  EstatePlanning,
  TaxStrategies,
  RiskManagement
}

interface SectionData {
  id: SECTIONS;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  howHelp: string[];
  learnMoreLink: { text: string; link: string };
}

const SECTIONS_DATA: SectionData[] = [
  {
    id: SECTIONS.InvestmentManagement,
    icon: FlagIcon,

    title: "Investment Management",
    description:
      "The goal of an investment portfolio is to generate a return that exceeds the risks taken. Our multi-disciplinary team of financial professionals has a deep understanding of investments, markets, and risk management strategies that help protect and grow client wealth over time, working to achieve positive outcomes while managing risk exposure appropriately.",
    howHelp: [
      "Thorough, tailored vetting and assembly of diverse investment opportunities",
      "Monitoring, reallocation, and trading to maximize gains and minimize risk",
      "Access to private offerings*"
    ],
    learnMoreLink: { text: "investment management strategies", link: "" }
  },
  {
    id: SECTIONS.FinancialPlanning,
    icon: SettingsIcon,
    title: "Financial Planning",
    description:
      "As a high-net-worth individual, we understand that your financial needs are unique. As such, we offer tailored solutions designed to help meet your individual objectives, mitigate risks, provide ongoing review and asset management, and track progress toward your goals.",
    howHelp: [
      "Tax-sensitive strategies",
      "Cross-team coordination with your existing attorneys, accountants, and advisors",
      "A fiduciary commitment to acting solely in your best financial interest"
    ],
    learnMoreLink: { text: "high-net-worth financial planning", link: "" }
  },
  {
    id: SECTIONS.EstatePlanning,
    icon: HandIcon,

    title: "Estate Planning",
    description:
      "High-net-worth estate planning is a critical component of financial security for individuals with significant assets. We help you take advantage of strategies such as trusts, asset protection, and charitable giving while staying on top of tax law changes in an effort to protect your hard-earned assets when transitioning them from one generation to the next.",
    howHelp: [
      "Reviewing wills, trusts, and other documents",
      "Confirming and coordinating beneficiaries",
      "Direct collaboration with your legal and accounting teams"
    ],
    learnMoreLink: { text: "estate planning solutions", link: "" }
  },
  {
    id: SECTIONS.TaxStrategies,
    icon: RookIcon,

    title: "Tax Strategies",
    description:
      "With the right tax strategies, high-earning individuals and business owners can significantly reduce their taxable income. Our team can help you make strategic investments, take advantage of applicable deductions and credits, and apply strategies that could minimize your overall tax liability.",
    howHelp: [
      "Developing IRA and Roth IRA funding strategies",
      "Tax-efficient retirement income planning",
      "Strategic reviews of current tax returns"
    ],
    learnMoreLink: { text: "high-net-worth tax planning", link: "" }
  },
  {
    id: SECTIONS.RiskManagement,
    icon: UmbrellaIcon,
    title: "Risk Management",
    description:
      "While risks are unavoidable, we can help you understand the risks associated with your financial plan and establish risk management strategies to mitigate them. We use state-of-the-art technology and a time-tested approach to stay abreast of market conditions and trends and take an active role in managing your financial risks.",
    howHelp: [
      "In-depth portfolio risk assessment and mitigation",
      "Cash flow analysis and strategy development",
      "Analyzing and optimizing your insurance coverage"
    ],
    learnMoreLink: { text: "risk management strategies", link: "" }
  }
];

export const OptimizedApproachCard = () => {
  const [selectedSection, setSelectedSection] = useState<SectionData>(
    SECTIONS_DATA[0]
  );

  return (
    <div className="overflow-visible bg-neutral-blue flex flex-col gap-16.75 py-25 px-[clamp(2rem,7vw,9.5rem)]  items-center w-full">
      <div className="flex flex-col gap-9 max-w-166.25">
        <h2 className="leading-[130%] tracking-[-0.04em] font-semibold text-[39px] text-center">
          Our Full-Circle Approach to Wealth Management
        </h2>
        <p className="leading-[130%] text-xl text-secondary-text text-center">
          At Avidian, we do more than manage your money, we provide a suite of
          wealth planning solutions throughout your financial life — all
          included with your basic fee.
        </p>
      </div>
      <div className="flex gap-25 justify-center max-w-43.5">
        {SECTIONS_DATA.map((section) => {
          return (
            <div
              key={section.id}
              onClick={() => setSelectedSection(section)}
              className={twMerge(
                "flex flex-col gap-2.5 items-center text-primary-text/50  cursor-pointer",
                selectedSection.id === section.id &&
                  "text-brand-green-300 font-bold"
              )}
            >
              <section.icon
                className={selectedSection === section ? "size-15" : "size-10"}
              />
              <p className="text-sm leading-[160%] text-center">
                {section.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between max-w-283.25 w-full">
        <Pie
          selectedSection={selectedSection.id}
          setSelectedSection={(id) => {
            const section = SECTIONS_DATA.find((s) => s.id === id);
            if (section) setSelectedSection(section);
          }}
        />
        <div className="flex flex-col w-107.75 gap-9">
          <h3 className="font-semibold leading-[130%] tracking-[-0.04em] text-[clamp(25px,2.25vw,35px)] wrap-break-word">
            {selectedSection.title}
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-left text-secondary-text">
              {selectedSection.description}
            </p>
            <div className="flex flex-col">
              <span className="leading-[140%] text-secondary-text">
                How we help:
              </span>
              {selectedSection.howHelp.map((e, idx) => {
                return (
                  <span
                    key={idx}
                    className="text-secondary-text leading-[140%]"
                  >
                    • {e}
                  </span>
                );
              })}
            </div>
            <span className="text-secondary-text">
              Learn more about{" "}
              <Link
                className="leading-[140%] text-link-secondary underline"
                href={selectedSection.learnMoreLink.link}
              >
                {selectedSection.learnMoreLink.text}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
