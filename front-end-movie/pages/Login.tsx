import fondo from "../src/assets/golden_-_48569(1080p).mp4"
import FormComponent from "../components/form/form"
import InputComponent from "../components/form/input"
import ButtomComponent from "../components/form/buttom"
import { useFormik } from 'formik'
import * as Yup from "yup"
import { User } from "../types/user"

const Login = () => {

  const initialValues: User = {
    email: "",
    username: "",
    password: ""
  }

  const validateSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    username: Yup.string().required(),
  })

  const formik = useFormik<User>({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: (async (values) => {
      console.log(values)
    })
  })

  const { handleChange, handleSubmit, values, touched, errors } = formik

  return (
    <section className="h-screen flex items-center justify-center">
      <video className='h-screen absolute bg-cover top-0 left-0' autoPlay muted loop>
        <source src={fondo} type="video/mp4" />
      </video>
      <section
        className='absolute top-0 left-0 w-full h-full bg-black opacity-30'
      ></section>
      <section className=' w-[700px] h-[500px] z-30 bg-gradient-to-r from-black via-yellow-700 to-black rounded-2xl  relative '>
        <FormComponent handleSubmit={handleSubmit}>
          <InputComponent
            type="text"
            value={values.email}
            handleChange={handleChange}
            name="email"
            errors={errors.email || ""}
            touched={touched.email || false}
            placeholder="test@test.com"
          />
          <InputComponent
            type="text"
            value={values.username}
            handleChange={handleChange}
            name="username"
            errors={errors.username || ""}
            touched={touched.username || false}
            placeholder="pedro12"
          />
          <InputComponent
            type="text"
            value={values.password}
            handleChange={handleChange}
            name="password"
            errors={errors.password || ""}
            touched={touched.password || false}
            placeholder="123456"
          />
          <ButtomComponent name='Login'/>
        </FormComponent>
      </section>
    </section>
  )
}

export default Login