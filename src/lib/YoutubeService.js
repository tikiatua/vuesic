import { findBestMusicVideo } from 'youtube-best-video'

let apiKey = process.env.VUE_APP_YOUTUBE_API_KEY

export function findMatchingVideo (artist, songName, duration) {
  return new Promise((resolve, reject) => {
    findBestMusicVideo(`${artist} - ${songName}`, {
      duration,
      apiKey
    }, (err, video) => {
      if (err) return reject(err)

      resolve(video)
    })
  })
}
