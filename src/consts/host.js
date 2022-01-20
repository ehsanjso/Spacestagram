export const host =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "//api.nasa.gov"
    : "//api.nasa.gov";
