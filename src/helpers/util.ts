export const displayNameSplitter = (name: any) => {

  if (name?.toString()?.includes('@'))  return nameBreaker('+', name?.toString()?.split('@')[1])

  return nameBreaker('+', name)
}

// Use this to break words with replacing given characters by space
export const nameBreaker = (char: string, name: string) => {
  const split =  name?.toString()?.split(char)

  let processedName = ''

  split?.forEach(e => {
    processedName += e+ ' '
  })

  return processedName?.slice(0, -1)
}

// Use this to check the viewport is mobile
export const isDesktopView = () => {
  const width = window.innerWidth;

  return width > 1000;
};
