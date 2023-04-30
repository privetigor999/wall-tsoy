import * as yup from "yup";

export const messageSchema = yup.object().shape({
  message: yup
    .string()
    .trim()
    .required("Сообщение не должно быть пустым")
    .max(1000, "Максимум 1000 символов"),
});
