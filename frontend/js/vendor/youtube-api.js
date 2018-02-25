/**
 * Created by n.vanderburg on 08/08/2017.
 */

var videos = [];
var players = [];
var player = null;
var videoPlaying = false;
var videoPlayingLastActividadId = false;
var videoIntervalo = false;
var videoCheckpoints = new Array();
videoCheckpoints[25] = false;
videoCheckpoints[50] = false;
videoCheckpoints[75] = false;
var ultimaActividad = false;

function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady');
    for (var i in videos) {
        player = new YT.Player('video-' + videos[i], {
            videoId: videos[i],
            width: '100%',
            height: videoResize(),
            playerVars: {
                modesbranding: 1,
                rel: 0,
                showinfo: 0
            },
            events: {
                onStateChange: 'onPlayerStateChange',
                onReady: 'onPlayerReady'
            }
        });
        players.push({'id': videos[i], 'player': player});
    }
}

function videoResize() {
    console.log('videoResize');
    return $('.video-txt').height() / 2;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('onPlayerReady');
    //event.target.playVideo();
}

function fullScreen() {

    console.log('fullScreen');
    var e = document.getElementById("video-wrapper");
    if (e.requestFullscreen) {
        e.requestFullscreen();
        console.log('fullScreen');
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
        console.log('fullScreen');
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
        console.log('fullScreen');
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
        console.log('fullScreen');
    }
}

function onPlayerStateChange(event) {
    console.log('onPlayerStateChange', event);
    var video_data = event.target.getVideoData();
    var video_duration = event.target.getDuration();
    var video_id = video_data.video_id;
    var titulo = video_data.title;
    if (videoPlaying) {

        var videoPlayingData = videoPlaying.target.getVideoData();
        if (videoPlayingData.video_id != video_id) {
            videoPlaying.target.stopVideo();
            videoPlaying = false;
            videoCheckpoints[25] = false;
            videoCheckpoints[50] = false;
            videoCheckpoints[75] = false;
            videoPlayingLastActividadId = false;
            clearInterval(videoIntervalo);
        }

    }
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            videoPlaying = event;
            console.log('trackea el video', videoPlaying);
            if (videoPlaying.target.getCurrentTime() <= 1) {
                trackEvent({'category': 'video', 'action': 'play', 'label': titulo});
            }
            videoIntervalo = setInterval(function () {

                var porcentaje = parseInt(videoPlaying.target.getCurrentTime() / video_duration * 100, 10);

                if (porcentaje > 25 && !videoCheckpoints[25]) {
                    videoCheckpoints[25] = true;
                    trackEvent({'category': 'video', 'action': '25', 'label': titulo})
                } else if (porcentaje > 50 && !videoCheckpoints[50]) {
                    videoCheckpoints[50] = true;
                    trackEvent({'category': 'video', 'action': '50', 'label': titulo})
                } else if (porcentaje > 75 && !videoCheckpoints[75]) {
                    videoCheckpoints[75] = true;
                    trackEvent({'category': 'video', 'action': '75', 'label': titulo})
                }
            }, 1000);
            break;
        case YT.PlayerState.PAUSED:
            console.log('video paused')
            clearInterval(videoIntervalo);
            videoPlaying = false;
            ultimaActividad = Date.now();
            break;
        case YT.PlayerState.ENDED:
            console.log('video ended')
            clearInterval(videoIntervalo);
            videoPlaying = false;
            videoCheckpoints[25] = false;
            videoCheckpoints[50] = false;
            videoCheckpoints[75] = false;
            trackEvent({'category': 'video', 'action': '100', 'label': titulo});
            ultimaActividad = Date.now();
            break;

    }
}
$(document).ready(function () {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $('[id*="video-"]').each(function () {
        var videoId = $(this).attr('id'),
            videoIdSplit = videoId.split('-');
        videos.push(videoIdSplit[1]);
    });

    $(window).resize(function () {
        $('.video iframe').attr('height', $('.video-txt').height() / 2);
    });

    $('.slick-slider').on('beforeChange', function () {
        $(this).find('.video-container').each(function (i, el) {
            if ($(el).find('iframe').length > 0) {
                var playerId = $(el).data('videoId');
                pausePlayers(playerId);
            }
        })
    })
});
function pausePlayers(playerId) {
    console.log('pausePlayers')
    for (var i in players) {
        var player = players[i].player;
        if (typeof playerId !== 'undefined') {
            if (playerId == players[i].id) {
                player.pauseVideo();
                return true;
            }
        } else {
            player.pauseVideo();
        }
    }
}