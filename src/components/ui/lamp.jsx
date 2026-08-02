import { cn } from "../../lib/utils";

export function LampContainer({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden w-full rounded-none z-0 mb-16",
        className
      )}
      style={{ background: "var(--accent-color)" }}
    >
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
