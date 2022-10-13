const baseUrl = 'https://swapi.dev/api/'

export async function getAllStartships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${baseUrl}/${apiUrl}`)
  return res.json()
}