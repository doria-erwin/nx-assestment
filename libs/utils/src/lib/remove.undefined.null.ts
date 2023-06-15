export const removeUndefinedOrNullFromObject = <T extends object> (data: T): T => {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(data).filter(([_, value]) => value !== undefined && value !== null)
  ) as T
};



