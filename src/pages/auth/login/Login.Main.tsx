import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import Button from 'src/components/Button';
import InputFormik from 'src/components/InputFormik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Không được trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu tối thiểu 6 ký tự!')
      .max(50, 'Mật khẩu không được vượt quá 50 ký tự!')
      .required('Không được trống'),
    
});

const LoginMain = () => {

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                    Cookies.set("access_token", values.password)
                }}
            >
                {({  
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => (
                    <Form className='w-full space-y-2'>
                        <InputFormik
                            field={{
                                name: 'email',
                                value: values.email,
                                onChange: handleChange,
                                onBlur: handleBlur
                            }}
                            form={{
                                values, // Phải bao gồm values
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                            }}
                            placeholder="Email"
                        />

                        <InputFormik
                            field={{
                                name: 'password',
                                value: values.password,
                                onChange: handleChange,
                                onBlur: handleBlur
                            }}
                            form={{
                                values, // Phải bao gồm values
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                            }}
                            placeholder="Mật khẩu"
                            type='password'
                        />
                        
                        <Button
                            type='submit'
                        >
                            Đăng Nhập
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default LoginMain;