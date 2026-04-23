import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an AI SOC platform?",
      answer:
        "An AI SOC platform leverages artificial intelligence to automate and enhance security operations, including threat detection, incident response, and security monitoring.",
    },
    {
      question: "What is the difference between SOAR and an AI SOC?",
      answer:
        "SOAR (Security Orchestration, Automation, and Response) focuses on automating repetitive tasks, whereas an AI SOC integrates AI to predict, detect, and respond to threats intelligently.",
    },
    {
      question: "What is Attack Path Discovery?",
      answer:
        "Attack Path Discovery maps lateral movement, privilege escalation, and potential attack vectors across an organization’s network, helping analysts understand the full blast radius of an attack.",
    },
    {
      question: "What are self-healing integrations?",
      answer:
        "Self-healing integrations automatically detect and correct issues within your security infrastructure, reducing the need for manual intervention and improving system uptime.",
    },
    {
      question: "Can CYBER-HAT533 INC. replace our SOAR?",
      answer:
        "Yes, CYBER-HAT533 INC. can replace traditional SOAR solutions, offering advanced AI-driven incident response, automated remediation, and self-healing capabilities.",
    },
    {
      question: "Is CYBER-HAT533 INC. suitable for MSSPs?",
      answer:
        "CYBER-HAT533 INC. is highly suitable for Managed Security Service Providers (MSSPs), offering multi-tenant capabilities and scalable security automation for diverse client environments.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400 sm:text-sm">
          FAQS
        </p>

        <h2 className="mx-auto mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
          Common Questions
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
          Everything SOC teams and CISOs ask before an Autonomous AI SOC demo. If you don’t see your question here, we’ll answer it live.
        </p>

        {/* FAQ Accordion Section */}
        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <div
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <span className="text-lg text-white">{openIndex === index ? "-" : "+"}</span>
              </div>

              {/* Expanded Answer Section */}
              {openIndex === index && (
                <div className="p-3 text-white/80 text-left text-sm transition-all duration-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}