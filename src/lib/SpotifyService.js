import axios from 'axios'

let accessToken = process.env.VUE_APP_SPOTIFY_ACCESS_TOKEN

class SpotifyService {
  constructor (error) {
    this.error = error
  }

  search (q) {
    return axios.get('https://api.spotify.com/v1/search', {
      params: {
        'q': q,
        'type': 'album,artist,playlist,track'
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    }).then((response) => {
      return this.getSpotifySearchResponse(response, q)
    }).catch((err) => {
      console.log(err)
      return {
        'response': 'error',
        'message': err
      }
    })
  }

  init (token) {
    this.token = accessToken
    // return this.getAccessToken()
  }

  async getSpotifySearchResponse (response, q) {
    console.log('response', response)

    if (typeof response.error !== 'undefined' && response.error.status === 401) {
      let responseToken = await this.getAccessToken()
      if (responseToken.response === 'success') {
        return this.search(q)
      } else {
        return responseToken
      }
    } else if (typeof response.error !== 'undefined') {
      return {
        response: 'error',
        message: response.error.message
      }
    } else {
      return response
    };
  }

  getUrl (q) {
    return 'https://api.spotify.com/v1/search?q=' + q.replace(' ', '%20') + 'type=album%2Cartist%2Cplaylist%2Ctrack&'
  }

  getAccessToken () {
    return axios.post('https://accounts.spotify.com/api/token', { grant_type: 'client_credentials' }, {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.token
      }
    }).then(function (response) {
      if (typeof response.access_token === 'undefined') {
        return {
          response: 'error',
          message: response.error_description
        }
      } else {
        this.accessToken = response.access_token
        return { response: 'success' }
      }
    }).catch(function (error) {
      return {
        response: 'error',
        message: error
      }
    })
  }
}

export default SpotifyService
