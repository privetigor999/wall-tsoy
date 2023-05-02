import * as yup from "yup";

export const messageSchema = yup.object().shape({
  message: yup
    .string()
    .required("Сообщение не должно быть пустым")
    .max(300, "Максимум 300 символов"),
});
