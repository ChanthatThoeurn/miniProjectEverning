let currentAnime = {
      name: 'Attack on Titan',
      currentEpisode: 1,
      totalEpisodes: 24,
      poster: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
      description: 'Eren lives in a world where enormous walls protect humanity from man-eating giants known as Titans. But when a colossal Titan breaks the wall, everything changes.'
    };

    const videoSources = [
      'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    ];

    function getVideoUrl(episode) {
      return videoSources[(episode - 1) % videoSources.length];
    }

    function loadAnime(name, episode, poster, description, totalEpisodes) {
      currentAnime = { name, currentEpisode: episode, totalEpisodes, poster, description };
      updateVideoPlayer();
      generateEpisodeList();
      updateNavigationButtons();
    }

    function updateVideoPlayer() {
      const videoPlayer = document.getElementById('video-player');
      const episodeInfo = document.getElementById('episode-info');
      const animeDescription = document.getElementById('anime-description');
      
      videoPlayer.src = getVideoUrl(currentAnime.currentEpisode);
      videoPlayer.poster = currentAnime.poster;
      videoPlayer.load();
      
      episodeInfo.textContent = `Episode ${currentAnime.currentEpisode} • ${currentAnime.name}`;
      animeDescription.textContent = currentAnime.description;
    }

    function generateEpisodeList() {
      const episodeList = document.getElementById('episode-list');
      episodeList.innerHTML = '';
      
      for (let i = 1; i <= currentAnime.totalEpisodes; i++) {
        const li = document.createElement('li');
        li.className = `px-3 py-1 rounded-lg cursor-pointer transition ${
          i === currentAnime.currentEpisode 
            ? 'bg-green-600 text-white' 
            : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
        }`;
        li.textContent = `Ep ${i}`;
        li.onclick = () => goToEpisode(i);
        episodeList.appendChild(li);
      }
    }

    function updateNavigationButtons() {
      document.getElementById('prev-ep').disabled = currentAnime.currentEpisode <= 1;
      document.getElementById('next-ep').disabled = currentAnime.currentEpisode >= currentAnime.totalEpisodes;
    }

    function goToEpisode(episode) {
      if (episode >= 1 && episode <= currentAnime.totalEpisodes) {
        currentAnime.currentEpisode = episode;
        updateVideoPlayer();
        generateEpisodeList();
        updateNavigationButtons();
      }
    }

    function nextEpisode() { if (currentAnime.currentEpisode < currentAnime.totalEpisodes) goToEpisode(currentAnime.currentEpisode + 1); }
    function prevEpisode() { if (currentAnime.currentEpisode > 1) goToEpisode(currentAnime.currentEpisode - 1); }

    document.getElementById('next-ep').addEventListener('click', nextEpisode);
    document.getElementById('prev-ep').addEventListener('click', prevEpisode);

    document.addEventListener('DOMContentLoaded', function() {
      generateEpisodeList();
      updateNavigationButtons();
    });