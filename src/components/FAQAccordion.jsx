import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border border-[#E5EAF0] rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-200 ${
              isOpen ? 'shadow-md border-primary/30' : 'hover:border-[#c1c6d6]'
            }`}
          >
            <button
              type="button"
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="font-headline-sub text-body-large text-on-surface font-semibold">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-primary text-on-primary' : 'bg-surface-container text-outline'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-on-surface-variant font-body-default leading-relaxed border-t border-[#E5EAF0]/50 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

