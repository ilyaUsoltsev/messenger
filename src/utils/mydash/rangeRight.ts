// rangeRight(4); // => [3, 2, 1, 0]
// rangeRight(-4); // => [-3, -2, -1, 0]
// rangeRight(1, 5); // => [4, 3, 2, 1]
// rangeRight(0, 20, 5); // => [15, 10, 5, 0]
// rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
// rangeRight(1, 4, 0); // => [1, 1, 1]
// rangeRight(0); // => []

export function rangeRight(
  start: number,
  end: number | undefined,
  step: number | undefined
) {
  return range(start, end, step, true);
}

function range(
  start: number,
  end: number | undefined,
  step: number | undefined,
  isRight: boolean | undefined
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
  return isRight ? result.reverse() : result;
}
