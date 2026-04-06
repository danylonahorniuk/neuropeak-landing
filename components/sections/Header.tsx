import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            NeuroPeak
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#benefits"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              Переваги
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              Як працює
            </a>
            <a
              href="#reviews"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              Відгуки
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              Ціни
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:block">
            <Button>Спробувати</Button>
          </div>

          <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 md:hidden">
            Меню
          </button>
        </div>
      </Container>
    </header>
  );
}