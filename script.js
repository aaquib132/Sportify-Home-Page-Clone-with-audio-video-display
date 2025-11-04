 
 let progress = document.getElementById("progress");
        let audio = document.getElementById("audio");
        let video = document.getElementById("video");
        let ctrlIcon = document.getElementById("ctrlIcon");
        let currentTimeEl = document.getElementById("currentTime");
        let totalTimeEl = document.getElementById("totalTime");

        audio.onloadedmetadata = function () {
            progress.max = audio.duration;
            progress.value = audio.currentTime;
            totalTimeEl.textContent = formatTime(audio.duration);
        }
        

        function playPause() {
            if (audio.paused) {
                audio.play();
                video.play();
                playIcon.setAttribute(
                    "d",
                    "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"
                );
            } else {
                audio.pause();
                video.pause();
                playIcon.setAttribute(
                    "d",
                    "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"
                );
            }
        }

        audio.addEventListener("timeupdate", () => {
            progress.value = audio.currentTime;
            let value = (audio.currentTime / audio.duration) * 100;
            progress.style.background = `linear-gradient(to right, white ${value}%, #2a2a2a ${value}%)`;

            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        progress.onchange = function () {
            audio.play();
            audio.currentTime = progress.value;
            playPause()
            if (audio.paused) {
                audio.play();

                playIcon.setAttribute(
                    "d",
                    "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"
                );

            }
        }

        function formatTime(t) {
            let minutes = Math.floor(t / 60);
            let seconds = Math.floor(t % 60);
            if (seconds < 10) seconds = "0" + seconds;
            return `${minutes}:${seconds}`;
        }

