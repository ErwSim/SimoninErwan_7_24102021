/**
 * Intended to be copied with Object.assign()
 * @param {{value: string, error: boolean, helperText: string}} [inputProps] - Default entries for inputProps
 * @return {{value: string, error: boolean, helperText: string}}
 * @example Object.assign({}, inputPropsHelper)
 */
export const inputPropsHelper = (inputProps = {}) => ({
  value: inputProps.value ?? "",
  error: inputProps.error ?? null,
  helperText: inputProps.helperText ?? "",
});
