export const formDate = (date: string | undefined) =>
  date === undefined ? null : new Date(date).toISOString().split("T")[0];
