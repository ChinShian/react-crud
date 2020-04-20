import React, { useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
//classnames
import classNames from 'classnames'

function LeftList(props) {
  const [list, setList] = useState(false)
  const ListClassName = classNames('navleft', {
    active: list,
  })

  return (
    <>
      <div className="nav">
        <ul className={ListClassName}>
          <li>
            <span>Example user</span>
            <span>
              Example position
              <FaCaretDown />
            </span>
          </li>
          <li
            onClick={() => {
              // document.querySelector('.navleft1').classList.remove('navall2')
              // document.querySelector('.navleft2').classList.remove('navall')
              // document.querySelector('.navleft3').classList.remove('navall')
              setList(false)
            }}
            // className="navleft1"
          >
            <NavLink
              to="/"
              isActive={(match, location) => {
                if (location.pathname === '/') {
                  setList(false)
                }
              }}
            >
              資料列表
            </NavLink>
          </li>
          <li
            onClick={() => {
              // document.querySelector('.navleft1').classList.add('navall2')
              // document.querySelector('.navleft2').classList.add('navall')
              // document.querySelector('.navleft3').classList.remove('navall')
              setList(true)
            }}
            // className="navleft2"
          >
            <NavLink
              to="/dataaddition"
              isActive={(match, location) => {
                if (location.pathname === '/dataaddition') {
                  setList(true)
                }
              }}
            >
              資料新增
            </NavLink>
          </li>
          {/* <li
            onClick={() => {
              document.querySelector('.navleft1').classList.add('navall2')
              document.querySelector('.navleft2').classList.remove('navall')
              document.querySelector('.navleft3').classList.add('navall')
              // setList(true)
            }}
            className="navleft3"
          >
            <Link to="/dataaddition">資料</Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default withRouter(LeftList)
