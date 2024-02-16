const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs');
const https = require("https");
const axios = require('axios');

app
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => res.render('pages/index'));

app.get('/video', (req, res) => {
  var apiKey = "AIzaSyDBI4bXfbhdwQTe4as5g7kPCGCNMCY2-b0";
  var GuideWareChannelId = "UCrN1yxZoYwAlkzKSFysRMLw";
  var motionGraphicsPlaylistId = "PLpImgnizUWfEtxh57EOlB34x6ZDtsdQmw";
  var liveActionPlaylistId = "PLpImgnizUWfHW-uEIUikz1GJQV0TX2sOC";
  var GuideWareQuery = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + 
    "&channelId=" + GuideWareChannelId + "&part=id&order=date&maxResults=5";
  var motionGraphicsQuery = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=" + motionGraphicsPlaylistId + "&key=" + apiKey;
  var liveActionQuery = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="
    + liveActionPlaylistId + "&key=" + apiKey;
  axios.all([
    axios.get(GuideWareQuery),
    axios.get(motionGraphicsQuery),
    axios.get(liveActionQuery)
  ]).then(
    axios.spread((GuideWareRes, motionGraphicsRes, liveActionRes) => {
      res.render('pages/video', {
        GuideWareIds: GuideWareRes.data.items,
        motionGraphicsIds: motionGraphicsRes.data.items,
        liveActionIds: liveActionRes.data.items
      });
    }));
});

app.get('/music', (req, res) => {
  contentDir = path.join(__dirname, 'content/music/');
  var fileNames = fs.readdirSync(contentDir).filter(el => path.extname(el) === '.mp3');
  console.log(fileNames[0]);
  var years = [
    "2021",
    "2016",
    "2021",
    "2015",
    "2020"
  ]
  res.render('pages/music', {
    fileNames: fileNames,
    numFiles: fileNames.length,
    years: years
  });
});

app.get('/interactive', (req, res) => {
  res.render('pages/interactive');
})



