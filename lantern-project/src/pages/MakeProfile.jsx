import React from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const MakeProfile = () => {
  let navigate = useNavigate()

  let initialState = {
    username: '',
    email: '',
    profilePic: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      profilePic: formValues.profilePic,
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
                        Profile Picture URL
                      </label>
                      <input
                        type="text"
                        name="profilePic"
                        id="profilePic"
                        value={formValues.profilePic}
                        onChange={handleChange}
                        autoComplete=""
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
                        name="username"
                        id="username"
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
                        Email
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
