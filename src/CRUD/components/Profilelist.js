import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { IoMdCreate, IoMdTrash } from 'react-icons/io'
import Formiks from './Formiks'

function Profilelist() {
  const [mymember, setMymember] = useState([])
  const [stateAlert, setStateAlert] = useState(false)
  const [indupdate, setIndupdate] = useState()
  async function getFromServer() {
    const request = new Request('http://localhost:5500/crud/data', {
      method: 'GET',
    })
    const response = await fetch(request)
    const data = await response.json()
    setMymember(data)
  }
  async function delFromServer(ind) {
    const request = new Request(`http://localhost:5500/crud/del/${ind}`, {
      method: 'POST',
    })
    const response = await fetch(request)
    const data = await response.json()
    getFromServer()
  }
  const datamember = mymember.map((val, ind) => {
    return (
      <tr key={ind}>
        <td>{val.memberId}</td>
        <td>{val.Name}</td>
        <td>{val.Phone}</td>
        <td>{val.Email}</td>
        <td
          onClick={() => {
            setStateAlert(true)
            setIndupdate(val.memberId)
          }}
        >
          <IoMdCreate />
        </td>
        <td
          onClick={() => {
            delFromServer(val.memberId)
          }}
        >
          <IoMdTrash />
        </td>
      </tr>
    )
  })

  useEffect(() => {
    getFromServer()
  }, [stateAlert])

  return (
    <>
      {stateAlert && (
        <Formiks
          indupdate={indupdate}
          send={v => {
            setStateAlert(v)
          }}
        />
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{datamember}</tbody>
      </Table>
    </>
  )
}

export default Profilelist
