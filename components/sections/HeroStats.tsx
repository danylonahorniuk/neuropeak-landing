import Container from "@/components/ui/Container";

const stats = [
  {
    value: "98%",
    label: "Задоволені клієнти",
    color: "text-emerald-600",
  },
  {
    value: "30 хв",
    label: "До ефекту",
    color: "text-blue-600",
  },
  {
    value: "5000+",
    label: "Користувачів",
    color: "text-amber-600",
  },
];

export default function HeroStats() {
  return (
    <section className="bg-slate-50 pb-12 sm:pb-16">
      <Container>
        <div className="border-t border-slate-200 pt-8">
          <div className="grid gap-6 md:grid-cols-3 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-6 text-center ${
                  index !== stats.length - 1 ? "md:border-r md:border-slate-200" : ""
                }`}
              >
                <div className={`text-3xl font-bold tracking-tight sm:text-4xl ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="mt-2 text-base text-slate-600 sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}