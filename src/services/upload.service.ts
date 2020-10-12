import { Storage } from 'aws-amplify'
import mime from 'mime-types'
type T_UploadImageResponse = {
  key: string
}

export const createPreSignedUrl = async ({ key }: T_UploadImageResponse) =>
  await Storage.get(key, { level: 'public' })

export const uploadImage = async ({ Key, Body }): Promise<any> => {
  const contentType = mime.lookup(Key)

  const url = await Storage.put(Key, Body, {
    contentType,
    level: 'protected',
  })
    .then((res: T_UploadImageResponse) => {
      console.log('res: ', res)
      const { key } = res
      return key
    })
    .catch((err) => {
      console.log('err: ', err)
    })

  return { url }
}

// const upload = await Storage.put(fileName, blob, {
//   contentType: 'image/jpg',
//   level: 'protected',
// })
