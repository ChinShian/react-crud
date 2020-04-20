import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Formiks(props) {
  const [formikmember, setFormikmember] = useState([])
  const [stateAlert, setStateAlert] = useState(false)
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
      const request = new Request(
        `http://localhost:5500/crud/update/${props.indupdate}`,
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      const response = await fetch(request)
      const data = await response.json()
      await props.send(stateAlert)
    },
  })
  async function getFromikmember() {
    const request = new Request(
      `http://localhost:5500/crud/data/${props.indupdate}`,
      {
        method: 'GET',
      }
    )
    const response = await fetch(request)
    const data = await response.json()
    setFormikmember(data)
  }
  useEffect(() => {
    getFromikmember()
  }, [])
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="formsubmitupdate">
        <div className="formikmemberId">
          No.{formikmember[0] ? formikmember[0].memberId : ''}
        </div>
        <label htmlFor="Name">
          Name : {formikmember[0] ? formikmember[0].Name : ''}
        </label>
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
            <span className="formikerrors">{formik.errors.Name}</span>
          ) : null}
        </div>
        <label htmlFor="Phone">
          Phone : {formikmember[0] ? formikmember[0].Phone : ''}
        </label>
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
            <span className="formikerrors">{formik.errors.Phone}</span>
          ) : null}
        </div>
        <label htmlFor="email">
          Email : {formikmember[0] ? formikmember[0].Email : ''}
        </label>
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
            <span className="formikerrors">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="buttoneditx">
          <button type="submit" className="buttonadd">
            修改
          </button>
          <button
            type="button"
            className="buttonadd"
            onClick={() => {
              props.send(stateAlert)
            }}
          >
            取消
          </button>
        </div>
      </form>
    </>
  )
}

export default Formiks
