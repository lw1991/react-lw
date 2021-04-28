import { getData } from 'api'

export const getList = () =>
  getData(`/user`)
