export const formatDate = (date) => {
  const dateString = new Intl.DateTimeFormat("ES", {
    // dateStyle: "long",
    timeStyle: "medium",
    hour12: true,
  }).format(date);

  return dateString;
};
