 import { SignInUser, getUserInfo } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
 import Client from '../services/api'

const SignIn = ({ setUser, setUserInfo }) => {

  let initialState = {
    email: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    
    setUser(payload)
    const res = await Client.get(`/user/get_user/by_email/${payload.email}`)
    console.log(res.data)
    setUserInfo(res.data)
    setFormValues({initialState})
    // await getUserInfo(payload)
    // const res = await Client.get(`/user/get_user/by_email/${payload.email}`)
    navigate('/')
  }



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevState) => (
      { ...prevState, [name]: value }
    ))
  }


  return (
    <div className=''>
      <div className="">
        <div className="">
          <div>
            <img
              className=""
              src="https://i.postimg.cc/W3PR3CyB/TAVERN-logo.png"
              alt=""
            />
            <h2 className="">
              Sign in to your account
            </h2>
            <p className="">
              Or{' '}
              <a href="/makeProfile" className="">
                create a new account
              </a>
            </p>
          </div>
          <form className="">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/forgotPassword" className="font-medium text-white hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-orange-500 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-white group-hover:text-gray-700" aria-hidden="true" /> */}
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn