import type { LinguiConfig } from "@lingui/conf";
import { formatter } from "@lingui/format-json";

const config: LinguiConfig = {
  locales: ["en", "pl"],
  catalogs: [
    {
      path: "src/locales/{locale}/{locale}",
      include: ["src"],
    },
  ],
  format: formatter({ style: "minimal" }),
};

export default config;
