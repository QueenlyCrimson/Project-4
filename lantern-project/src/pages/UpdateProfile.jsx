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
}