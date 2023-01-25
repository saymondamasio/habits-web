import * as Progress from "@radix-ui/react-progress";

type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  const progressStyles = {
    width: `${progress}%`,
  };

  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
      value={progress}
    >
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={progressStyles}
        aria-label="Progresso de hábitos completados nesse dia"
      />
    </Progress.Root>
  );
}
