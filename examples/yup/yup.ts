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

//Another Example
let schemaEmail = yup.object().shape({
  email: yup.string().email("Not a proper email"), // pass your error message string
});

// check validity
schemaEmail
  .validate({
    email: "not.a.valid.email",
  })
  .catch((err) => {
    console.log(err.name); // ValidationError
    console.log(err.errors); // ['Not a proper email']
  });
