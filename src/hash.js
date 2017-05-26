export default str => {
  let hash = 5381, i = str.length
  while (i)
    hash = (hash * 33) ^ str.charCodeAt(--i)
  return btoa(hash >>> 0).match(/[a-zA-Z0-9]/g).join('').slice(-8)
}
