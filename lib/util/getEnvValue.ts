export function getEnvValue(key: string) {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is not set`);
  }

  return process.env[key];
}
