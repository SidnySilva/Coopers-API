import * as yup from "yup"

export const taskCreateSchema = yup.object().shape({
    description:yup.string().required("A description is required")
})

export const taskUpdateSchema = yup.object().shape({
    done:yup.boolean().notRequired(),
    description:yup.string().notRequired()
})