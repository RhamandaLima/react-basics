export const getClassNames = (
  ...classes: (string | false | undefined)[]
): string => classes.filter(Boolean).join(" ");
