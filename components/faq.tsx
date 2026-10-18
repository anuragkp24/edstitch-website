const QUESTIONS = [
  {
    q: "Does my school need to approve it?",
    a: "Yes. Your school's IT team approves Parent Connector first. After that, any family at the school can connect, and teachers don't need to do anything.",
  },
  {
    q: "What can I see?",
    a: "For each child: their classes, assignments, and due dates, and whether work is turned in, missing, or late. You'll also see scores teachers have returned, each class's teacher, and the latest class announcement.",
  },
  {
    q: "Is it free?",
    a: "Yes. Parent Connector is free for families.",
  },
  {
    q: "Can I disconnect?",
    a: "Yes, anytime, from Settings. Disconnecting a child removes their connection and saved sign-in from Parent Connector.",
  },
  {
    q: "Can teachers see that I'm using it?",
    a: "Parent Connector doesn't notify teachers or post anything in class. Your school's IT team can see which apps are approved, and your child can see the connection in their school account settings.",
  },
];

export function Faq() {
  return (
    <div className="divide-y divide-border-warm border-y border-border-warm">
      {QUESTIONS.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="text-2xl font-normal text-subtle-warm transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-warm">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
