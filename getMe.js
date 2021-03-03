const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "token";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);
	
    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 0,
    limit: 100,
    fields: 'items'
  })
  const data2 = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 100,
    limit: 100,
    fields: 'items'
  })
  const data3 = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 200,
    limit: 100,
    fields: 'items'
  })
  const data4 = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 300,
    limit: 100,
    fields: 'items'
  })
  const data5 = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 400,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];
  var datas = [data, data2, data3, data4, data5];
  console.log(datas.length);
  for (i = 0; i < datas.length; i++){
	for (let track_obj of datas[i].body.items) {
      const track = track_obj.track
      tracks.push(track);
      console.log(track.name + " : " + track.artists[0].name)
    }
  }
  
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();
