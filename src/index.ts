import fetch from 'isomorphic-unfetch'

let hostname = 'vamuved.rurururururu.ru'

export function setVamUvedHosthame (customHostname: string) {
  hostname = customHostname
}

export async function vamuved (channelId: string, message?: string) {
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
