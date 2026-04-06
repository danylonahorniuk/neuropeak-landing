import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-300/30 via-sky-300/30 to-yellow-200/30 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              Природна продуктивність
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Максимум фокусу.{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                Без втоми.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              NeuroPeak — це природний спосіб підвищити концентрацію, ментальну ясність та продуктивність без шкоди для здоров&apos;я.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Спробувати NeuroPeak</Button>
              <Button variant="secondary">Дізнатись більше</Button>
            </div>

            <div className="mt-10 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                100% натуральний склад
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                Без побічних ефектів
              </div>
            </div>
          </div>

          {/* RIGHT */}
<div className="relative">
  <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-200/35 via-sky-200/25 to-yellow-100/20 blur-3xl" />

  <div className="relative flex items-center justify-center rounded-[2rem] border border-white/70 bg-white/60 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl">
    <div className="relative h-[420px] w-full max-w-[420px]">
      <Image
        src="/images/Neuro-Peak.png"
        alt="Препарат NeuroPeak"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}