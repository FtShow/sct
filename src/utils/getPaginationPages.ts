export function getPaginationPages(
  current: number,
  total: number
): (number | string)[] {
  const pages: (number | string)[] = [];
  const left = 3;
  const right = 3;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  for (let i = 1; i <= left; i++) pages.push(i);

  if (current > left + 1) pages.push('...');

  const start = Math.max(current - 1, left + 1);
  const end = Math.min(current + 1, total - right);

  for (let i = start; i <= end; i++) {
    if (!pages.includes(i)) pages.push(i);
  }

  if (current < total - right - 1) pages.push('...');

  for (let i = total - right + 1; i <= total; i++) pages.push(i);

  return pages;
}
