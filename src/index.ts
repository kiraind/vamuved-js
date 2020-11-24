import fetch from 'isomorphic-unfetch'

let hostname = 'vamuved.rurururururu.ru'

export function setHosthame (customHostname: string) {
  hostname = customHostname
}

export async function send (channelId: string, message?: string) {
  const messagePart = message !== undefined
    ? encodeURIComponent(message)
    : ''

  const url = `https://${hostname}/send/${channelId}/${messagePart}`

  const response = await fetch(url)

  if (response.status === 200) {
    return
  }

  throw new Error(await response.text())
}
