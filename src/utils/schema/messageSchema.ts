import i18next from "i18next";
import * as yup from "yup";

const t = i18next.t.bind(i18next);

export const messageSchema = yup.object().shape({
  message: yup
    .string()
    .required(t("validation.message.required") as string)
    .max(300, t("validation.message.max") as string),
});
