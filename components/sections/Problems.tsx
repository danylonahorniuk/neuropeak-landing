import Container from "@/components/ui/Container";
import { Brain, Zap, Clock } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Думки розбігаються. Фокус зникає.",
    description1:
      "Ви сідаєте за роботу з найкращими намірами. Але через 15 хвилин ловите себе на тому, що переключились між десятками вкладок, перевірили пошту тричі і так і не почали головне завдання.",
    description2:
      "Постійні відволікання та перемикання контексту знижують вашу продуктивність. Наш мозок просто не створений для такого режиму роботи.",
    statValue: "73%",
    statText:
      "професіоналів відчувають труднощі з концентрацією більше 3-4 годин на день",
    accent: "red",
  },
  {
    icon: Zap,
    title: "Енергія закінчується. Втома наростає.",
    description1:
      "Ранок починається непогано. Але вже після обіду відчуваєте, як енергія тане. Кава допомагає на 20 хвилин, потім стає ще гірше.",
    description2:
      "Хронічна втома — це не лише фізична проблема. Вона впливає на якість рішень, креативність та мотивацію. Ви працюєте вдвічі довше, щоб зробити те саме.",
    statValue: "2:00 PM",
    statText:
      "Час, коли більшість людей відчувають різкий спад енергії та продуктивності",
    accent: "orange",
  },
  {
    icon: Clock,
    title: "Почати — найважче. Завершити — неможливо.",
    description1:
      "Ви знаєте, що треба зробити. Розумієте пріоритети. Але рутинні завдання відкладаються знову і знову. Внутрішній опір настільки сильний, що легше зайнятись чим завгодно, але не роботою.",
    description2:
      "Прокрастинація — це не лінь. Це реакція мозку на когнітивне перевантаження та брак нейромедіаторів, відповідальних за мотивацію та ініціативу.",
    statValue: "3 год",
    statText:
      "втрачається щодня через прокрастинацію та важкий старт роботи",
    accent: "violet",
  },
];

const accentClasses = {
  red: {
    iconBg: "bg-red-500",
    cardBg: "bg-red-50",
    border: "border-red-400",
    value: "text-red-600",
  },
  orange: {
    iconBg: "bg-orange-500",
    cardBg: "bg-orange-50",
    border: "border-orange-400",
    value: "text-orange-600",
  },
  violet: {
    iconBg: "bg-violet-500",
    cardBg: "bg-violet-50",
    border: "border-violet-400",
    value: "text-violet-600",
  },
};

export default function Problems() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            Реальність сучасного професіонала
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Ви втрачаєте{" "}
            <span className="text-slate-400">до 40%</span>
            <br />
            продуктивності щодня
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            І це не ваша вина. Сучасний ритм життя, інформаційне перевантаження
            та постійний стрес роблять фокус та концентрацію справжнім викликом.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {problems.map((item, index) => {
            const accent = accentClasses[item.accent as keyof typeof accentClasses];
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <div
                  className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
                    index % 2 !== 0
                      ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                      : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${accent.iconBg}`}
                        >
                        <Icon className="h-6 w-6" />
                        </div>

                      <div>
                        <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 sm:pl-[4.5rem]">
                      <p className="text-base leading-8 text-slate-600">
                        {item.description1}
                      </p>
                      <p className="text-base leading-8 text-slate-600">
                        {item.description2}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full items-center">
                    <div
                      className={`w-full rounded-[1.75rem] border-l-4 ${accent.border} ${accent.cardBg} p-8 shadow-sm`}
                    >
                      <div className={`text-4xl font-bold tracking-tight sm:text-5xl ${accent.value}`}>
                        {item.statValue}
                      </div>
                      <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
                        {item.statText}
                      </p>
                    </div>
                  </div>
                </div>

                {index !== problems.length - 1 && (
                  <div className="mt-12 flex items-center gap-6">
                    <div className="h-px flex-1 bg-slate-200" />
                    <div className="h-2 w-2 rounded-full bg-slate-300" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[1.75rem] border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-2xl text-white shadow-md">
              i
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Ці проблеми мають науково обґрунтоване рішення
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                NeuroPeak працює з біохімією вашого мозку, підтримуючи оптимальний
                рівень нейромедіаторів для фокусу, енергії та мотивації.
                Природно. Ефективно. Без побічних ефектів.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}