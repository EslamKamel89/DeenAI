import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
export const authSchema = toTypedSchema(
  z.object({
    username: z
      .string()

      .min(2, "Username is too short")
      .max(50, "Username is too long"),
  }),
);
