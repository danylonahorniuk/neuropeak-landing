type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:border-slate-400",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}