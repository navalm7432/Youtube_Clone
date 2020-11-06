const API_KEY = "AIzaSyCP-A8bkfdV-9k9-vPmRZz4L6oZBeB3sYs";

const request = {
  agadmatorPlaylist: `playlistItems?part=contentDetails%2Csnippet&maxResults=2000&playlistId=UUL5YbN5WLFD8dLIegT5QAbA&key=${API_KEY}`,
  agadmatorChannel: `channels?part=contentDetails%2Csnippet%2Cstatistics&id=UCL5YbN5WLFD8dLIegT5QAbA&maxResults=2000&key=${API_KEY}`,
};
export default request;
