import { cn } from "../../utils/cn";
const MagicCard = ({ title, handleClick, className }) => {
  return (
    <button
      className="relative inline-flex h-[18%] w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <div
          className={cn(
            "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-transperant border border-transparent justify-between flex flex-col space-y-4",
            className
          )}
        >
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {title}
          </div>
        </div>
      </span>
    </button>
  );
};

export default MagicCard;
