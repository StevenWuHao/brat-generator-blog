import type { LucideIcon } from "lucide-react";

interface FAQItem {
  icon: LucideIcon;
  question: string;
  answer: string;
}

interface FAQ04Props {
  heading: string;
  description: string;
  faq: FAQItem[];
}

const FAQ04 = ({ heading, description, faq }: FAQ04Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-screen-lg">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          {heading}
        </h2>
        <p className="mt-3 text-lg text-center text-muted-foreground">
          {description}
        </p>

        <div className="mt-12 grid md:grid-cols-2 rounded-xl gap-4">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 rounded-xl">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon />
              </div>
              <div className="mt-5 mb-2 flex items-start gap-2 text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ04;
