const run_vars = window.APP_CONFIG || {};

export const host =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "//api.nasa.gov"
    : "//localhost:8000";
