import * as yup from "yup"

export const messageCreateSchema = yup.object().shape({
    username:yup.string().notRequired().matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
    "Username: Minimun 3 characters. Can`t user special caracters."),
    email:yup.string().email("Insert a valid e-mail, ex: user@email.com").required("Email is necessary"),
    telephone:yup.string().required("Password is necessary").matches(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        "Telephone format: (xx)xxxxx-xxxx",
      ),
    message:yup.string().required("Insert your message").max(500)
})