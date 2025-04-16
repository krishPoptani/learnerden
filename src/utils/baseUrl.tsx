export const hostChat = 'http://192.168.29.18:62234/'

  // const protocol = 'https'
  // const host = 'aieducationpro.com/api/' // bhargav
const protocol = 'http'
const host = 'localhost:5000/api/' // bhargav

const port = ''
const trailUrl = ''

export const hostUrl = `${protocol}://${host}${port ? ':' + port : ''}`
const endpoint = `${protocol}://${host}${port ? ':' + port : ''}${trailUrl}`

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
}
