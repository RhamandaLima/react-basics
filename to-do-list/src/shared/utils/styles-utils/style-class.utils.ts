export const getClassNames = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");
