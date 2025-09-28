export function range(
  start: number,
  end: number | undefined,
  step: number | undefined
) {
  if (end === undefined && step === undefined) {
    step = Math.sign(start) * 1;
    end = start;
    start = 0;
  } else if (step === undefined) {
    step = 1;
  }

  const totalSteps =
    step === 0
      ? Math.abs(end!) - Math.abs(start)
      : Math.floor((end! - start) / step);
  const result = [];
  for (let i = 0; i < totalSteps; i++) {
    result.push(start + i * step);
  }
  return result;
}
