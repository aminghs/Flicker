const url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'

fetch(url).then(res => {
    console.log(res);
    return res.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
})

