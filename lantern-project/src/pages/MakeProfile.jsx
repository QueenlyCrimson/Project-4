import React from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// import MakePost from "../components/MakePost"

const MakeProfile = () => {
  let navigate = useNavigate()

  let initialState = {
    name: '',
    username: '',
    email: '',
    profilePic: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      username: formValues.username,
      img: formValues.img,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/signIn')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <div className="">
                    <div className="">
                      <label
                        htmlFor="first-name"
                        className=""
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formValues.name}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className=""
                      />
                    </div>

                    <div className="">
                      <label
                        htmlFor="last-name"
                        className="b"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        value={formValues.username}
                        onChange={handleChange}
                        autoComplete="family-name"
                        className=""
                      />
                    </div>

                    <div className="">
                      <label
                        htmlFor="email-address"
                        className=""
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className=""
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="street-address"
                        className=""
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                        autoComplete="password"
                        className=""
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="street-address"
                        className=""
                      >
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        name="confirmPassword"
                        id="password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        autoComplete="password"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className=""
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
  )
}
export default MakeProfile
