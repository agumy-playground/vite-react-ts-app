import { useCallback, useState } from "react";

type Goal = {
  title: string;
  totalPages: number;
};

export const useGoal = () => {
  const [goal, setGoal] = useState<Goal | null>(null);

  const addGoal = useCallback(
    (title: string, totalPages: number) => {
      setGoal({ title, totalPages });
    },
    [setGoal]
  );

  return [goal, addGoal] as const;
};
