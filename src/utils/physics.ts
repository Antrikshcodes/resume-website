export const springDamp = (
  current: number,
  target: number,
  stiffness: number,
  damping: number,
  delta: number
): number => {
  const diff = target - current;
  const factor = 1 - Math.exp(-stiffness * delta * 0.001);
  return current + diff * factor * (1 - damping * 0.1);
};

export const clamp = (val: number, min: number, max: number): number => {
  return Math.min(Math.max(val, min), max);
};
