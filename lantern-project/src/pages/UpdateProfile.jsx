import React from "react"
import { UpdateUser } from '../services/Auth'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Client from "../services/api"

const UpdateProfile = () => {
  let { id } = useParams()

  let navigate = useNavigate()

  let initialState = {
    username: '',
    email: '',
    profilePic: '',
  }

  const [formValues, setFormValues] = useState(initialState)

  const getUserById = async () => {
    const res = await Client.get(`/user/get_user/${id}`)
    setFormValues(res.data)
  }

  useEffect(() => {
    getUserById()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      username: formValues.username,
      email: formValues.email,
      profilePic: formValues.profilePic,
      userId: id
    }
    await UpdateUser(payload)
    setFormValues(initialState)
    navigate('/')
    alert("Profile Updated!")
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <div className="">

                    <div className="">
                      <label htmlFor="first-name" className="">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={handleChange}
                        autoComplete="username"
                        className=""
                      />
                    </div>

                    <div className="">
                      <label htmlFor="last-name" className="">
                        Profile Picture
                      </label>
                      <input
                        type="text"
                        name="profilePic"
                        id="profilePic"
                        value={formValues.profilePic}
                        onChange={handleChange}
                        autoComplete="family-name"
                        className=""
                      />
                    </div>

                    <div className="">
                      <label htmlFor="email-address" className="">
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

                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className=""
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
            </div>
  )
}