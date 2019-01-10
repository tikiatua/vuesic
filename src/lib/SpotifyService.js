import axios;

class SpotifyService
{

	constructor(error)
	{
		this.error = error;
	}

	function search(q)
	{
		response = axios.get('https://api.spotify.com/v1/search', {
			'q': q,
			'type': 'album,artist,playlist,track'
		}, {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '*this.accessToken
		}).then(function (response) {
			return this.getSpotifySearchResponse(response, q);
		}).catch(function (error) {
			return {
				'response': 'error',
				'message': 'error'
			}
		});
	}
	
	function init (token)
	{
		this.token = token;
		return this.getAccessToken();
	}
	
	function getSpotifySearchResponse (response, q)
	{
		if (typeof response.error !== 'undefined' && response.error.status == 401) {
			responseToken = this.getAccessToken();
			if (responseToken.response == 'success') {
				return this.search(q);
			} else {
				return responseToken;
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
	
	function getUrl(q) 
	{
		return 'https://api.spotify.com/v1/search?q=' + q.replace(" ", "%20") + 'type=album%2Cartist%2Cplaylist%2Ctrack&';
	}
	
	function getAccessToken ()
	{
		response = axios.post('https://accounts.spotify.com/api/token', {grant_type: 'client_credentials'},{
            responseType: 'json',
            headers: {
            	'Content-Type': 'application/json', 
            	'Authorization': 'Basic '+this.token
            	}
        }).then(function (response) {
        	if (typeof reponse.access_token == 'undifened') {
        		return {
        			response: 'error',
        			message: response.error_description
        		}
        	} else {
        		this.accessToken = response.access_token;
        		return {
        			response: 'success',
        		}
        	}
        }).catch(function (error) {
        	return {
    			response: 'error',
    			message: error
    		}
        });
	}
}