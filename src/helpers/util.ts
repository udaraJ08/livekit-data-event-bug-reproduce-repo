import type { Participant, Room } from 'livekit-client';
import { LocalParticipant } from 'livekit-client';

//*---Use this to get the avatar name---*

//User name contains two words -> returns first two letters of each words
//User name contains only one word -> returns first two letters of the word
//User name contains multiple words -> returns first two letters of each words
//User name contains one word -> returns first letter of the word
import {ADMIN, ROLE, VIDEO_INPUT} from "./constants";

export const getAvatarName = (name: string) => {

  // console.log(name)
  // const preSplited = displayNameSplitter(name)
  // const breaker = nameBreaker("+", preSplited)
  const breaker = displayNameSplitter(name)
  const splited = breaker.split(/[ ]+/)

  if (splited.length > 1)  {
    const tempWord = splited[0][0] + splited[1][0]
    return tempWord.toUpperCase()
  } else {
    if (splited[0].length > 1) {
      const word = splited[0]
      return word.slice(0,2).toUpperCase()
    } else return splited[0].toUpperCase()
  }
}

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

//Use this to get a random color
export const getRandomColor = () => {

  const colors = [
    'rgba(255, 159, 67, 0.4)',
    'rgba(46, 204, 113, 0.4)',
    'rgba(52, 152, 219, 0.4)',
    'rgba(155, 89, 182, 0.4)',
    'rgba(255, 82, 82, 0.4)',
  ]

  const rnd = Math.floor(Math.random() * 5);

  return colors[rnd]
}

//Use this to get the role
export const getRole = (role: string) => {

  return role.split(":")[1]
}

export const jsonParser = (obj: any) => {

  if (obj) return JSON.parse(obj);
}

// Use this to check the viewport is mobile
export const isDesktopView = () => {
  const width = window.innerWidth;

  return width > 1000;
};

export const isMobileLandscape = () => {
  return !isDesktopView() && window.screen.availHeight < window.screen.availWidth;
};

export const checkUndefined = (key: string) => {

  return key
}

export function uniqueRoomNameGenerator() {
  //return `${generateSlug()}-${Math.floor(Math.random() * 10000000)}`;
  const nameOne = (Math.random() + 1).toString(36).substring(7);
  const nameTwo = (Math.random() + 1).toString(36).substring(7);
  const nameThree = (Math.random() + 1).toString(36).substring(7);
  return `${nameOne}-${nameTwo}-${nameThree}`;
}

// Use this to check whether the user have feature permissions to access the specific feature
// Checking the related permission in room and participant metadata both
export const checkPermission = (room: any, key: string) => {

  const roomMetadata = jsonParser(room?.metadata)
  const participantMetadata = jsonParser(room?.localParticipant?.metadata)
  const role = participantMetadata?.role

  if (roomMetadata) return role === ADMIN ? true : !(roomMetadata[key] || participantMetadata[key])
  return true
}

export const charReplace = (name: string, searchValue: string, replaceValue: string) => {

  return name.replaceAll(searchValue, replaceValue)
}

export const getDevices = (kind: string) => {
  return navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        const temp: any = []
        devices.forEach((device) => {
          if (device.kind === kind) {
            temp.push({
              kind: device.kind,
              label: device.label,
              id: device.deviceId
            })
          }
        });
        return temp
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
}

export function isLocal(p: Participant) {
  return p instanceof LocalParticipant;
}

export const isSelectedDevice = (room: Room, kind: any, id: string): boolean => {

  return id === room?.getActiveDevice(kind)
}


/*export const fetchAuthToken = async () => {

  if(getStorageItem(ACCESS_TOKEN) === null) {
      return await axios
        .post(`${process.env.REACT_APP_AUTH_URL}/auth/create/token`, {
          "apiKey": process.env.REACT_APP_API_KEY,
          "secretKey": process.env.REACT_APP_SECRET_KEY
        })
        .then((res) => {
          setSessionItem(ACCESS_TOKEN, res?.data?.access_token)
          return res?.data?.access_token
        })
        // .catch((err) => {
        //   fireAlertCustom('An error occurred', err.response?.data?.message, ERROR);
        // })
    }
  return getStorageItem(ACCESS_TOKEN)
}*/

/*
export const decodeCryptoToken = (token: string) => {
  const bytes = AES.decrypt(token, process.env.REACT_APP_CRYPTO_KEY).toString(enc?.Utf8);
  return bytes.toString(enc.Utf8.to);
}

export const decodeTokenKey = (token) => {
  const bytes = AES.decrypt(token, process.env.REACT_APP_CRYPTO_KEY);
  return bytes.toString(enc.Utf8);
}
*/
