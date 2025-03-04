let currentTrack = null;

function playTrack(index) {
    // Agar boshqa trek ovoz chiqarayotgan bo‘lsa, uni to‘xtatamiz
    if (currentTrack !== null) {
        document.getElementById(`track${currentTrack}`).pause();
        document.getElementById(`track${currentTrack}`).currentTime = 0;
    }

    // Yangi trekni oynatamiz
    const track = document.getElementById(`track${index}`);
    track.play();
    currentTrack = index;
}

function playAll() {
    const tracks = document.querySelectorAll('audio');
    let index = 0;

    function playNext() {
        if (index < tracks.length) {
            playTrack(index);
            tracks[index].onended = () => {
                index++;
                playNext();
            };
        }
    }

    playNext();
}

function pauseAll() {
    const tracks = document.querySelectorAll('audio');
    tracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });
    currentTrack = null;
}