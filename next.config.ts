import type { NextConfig } from "next";

export default (
  _phase: unknown,
  { defaultConfig }: { defaultConfig: NextConfig },
): NextConfig => {
  return {
    ...defaultConfig,
    experimental: {
      useTypeScriptCli: true,
    },
  };
};
