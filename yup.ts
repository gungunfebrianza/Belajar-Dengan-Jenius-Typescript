import * as yup from "yup";

const personSchema = yup.object({
  firstName: yup.string(),
  nickName: yup.string().nullable(),
  email: yup.string().nullable().notRequired().email(),
  birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
});

type Person = yup.InferType<typeof personSchema>;

const person: Person = {
  firstName: "Gun",
  nickName: "Gun Febrianza",
  email: "gun@daddy.bitcoin",
  birthDate: new Date(1992, 7, 24),
};

console.log(personSchema.isValidSync(person));
