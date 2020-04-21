import React from 'react'
import { useFormik } from 'formik'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'

function Dataaddition(props) {
  const phoneRegExp = /^09\d{2}\d{3}\d{3}$/
  const formik = useFormik({
    initialValues: {
      Name: '',
      Phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('請填寫Name'),
      Phone: Yup.string()
        .matches(phoneRegExp, '電話號碼無效')
        .required('請填寫Phone'),
      email: Yup.string()
        .email('無效的郵件地址')
        .required('請填寫Email'),
    }),
    onSubmit: async (values, actions) => {
      const request = new Request('http://localhost:5500/crud/insert', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      await props.history.push('/')
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="formsubmit">
        <label htmlFor="Name">Name:</label>
        <div className="name">
          <input
            id="Name"
            name="Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Name}
            className={formik.touched.Name && formik.errors.Name && 'error'}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <span style={{ color: 'red' }}>{formik.errors.Name}</span>
          ) : null}
        </div>
        <label htmlFor="Phone">Phone:</label>
        <div className="name">
          <input
            id="Phone"
            name="Phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Phone}
            className={formik.touched.Phone && formik.errors.Phone && 'error'}
          />
          {formik.touched.Phone && formik.errors.Phone ? (
            <span style={{ color: 'red' }}>{formik.errors.Phone}</span>
          ) : null}
        </div>
        <label htmlFor="email">Email:</label>
        <div className="name">
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={formik.touched.email && formik.errors.email && 'error'}
          />
          {formik.touched.email && formik.errors.email ? (
            <span style={{ color: 'red' }}>{formik.errors.email}</span>
          ) : null}
        </div>
        <button type="submit" className="buttonadd">
          送出
        </button>
      </form>
    </>
  )
}

export default withRouter(Dataaddition)
