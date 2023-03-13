/* const youtube = document.querySelector('.youtube-container');
const v = 'https://www.youtube.com/watch?v=';
console.log(youtube)
const key = 'AIzaSyDItEu4dUQISg77wPjpHhMyVFvsQsnuFJs';
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UComu3ao5983Wpni7R_JcovQ&maxResults=9&order=date&key=${key}`).then(
    data => {
        return data.json();
    }
)
.then(res => {
    const videos = res.items;
    for(video of videos) {
        youtube.innerHTML += `
        <div class="grid-item">
            <a href="${v}${video.id.videoId}" target="_blank" rel="noopener noreferrer">
                <img src="${video.snippet.thumbnails.high.url}">
                <div class="overlay"></div>
            </a>
        </div>
        `
    }
    console.log(res.items);
}).catch(err =>{
    console.log(err)
})
 */