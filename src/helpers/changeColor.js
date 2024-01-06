export const getBgColor = (variant) => {
  switch (variant) {
    case "Available":
      return "#6FCF97";
    case "Busy":
      return "#F2994A";
    case "Unavailable":
      return "#EB5757";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};
