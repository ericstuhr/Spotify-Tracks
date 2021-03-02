# Spotify-Tracks
mash up of two spotify projects to get tracks from a playlist

# Introduction
This is NOT original code, it is simply a modification of another guide (in order to bypass the limitation on how many tracks can be pulled).

# Tom Baranowicz Guide
https://www.youtube.com/watch?v=Bk90lT6ne3g
code from his repository that I modified
https://github.com/tombaranowicz/SpotifyPlaylistExport

# Spotify official guide
https://developer.spotify.com/documentation/web-api/quick-start/
https://github.com/spotify/web-api-auth-examples

# Installation
To begin, you're going to want to set up a spotify API account, with a good tutorial provided here
https://developer.spotify.com/documentation/web-api/quick-start/

If you do not have node.js installed, the above guide also explains how to install it.

You can follow the instructions on installation from the example respository provided by Spotify, which will show you how to
install the modules, which are the same ones used in this project. Since this project itself is very limited in scope, it may also
be easier to simply clone this repository in full and not have to install the modules manually. 

IMPORTANT: do not attempt to use these outside of personal use, since the installations of the modules are not all up to date, even on
the spotify official guide repository. 

# Setup
Once you have a folder set up with these modules and the javascript files, you will need to modify the index file first.
Replace clientId and clientSecret with the corresponding values on your spotify API account. You will also need to add urls
that have access, both http://localhost:8888/callback and http://localhost:8888

# Use
Now, go into your terminal/commandPrompt and navigate to the folder containing these files, and run the command: node index
Then, proceed to the URL that is logged to the console (your localhost).
You should be prompted to login, and once successful, there will be an accesstoken in the console log, copy this, then paste it
into the appropriate place in the getMe file. 

Now, you should be able to run node getMe, and your tracks will output both in the console, and in json files that appear in the same directory. 
