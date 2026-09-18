// Giả định cấu trúc dữ liệu bài hát, thay thế toàn bộ nội dung cũ bằng logic an toàn
const songs = [
    { name: "Anh biết tôi", singer: "Ca sĩ A", img: "img/0.jpg", mp3: "mp3/anhbietoi.mp3" },
    { name: "Bao lời con chưa nói", singer: "Ca sĩ B", img: "img/1.jpg", mp3: "mp3/baoloiconchuanoi.mp3" },
    { name: "Đừng rời xa tôi", singer: "Ca sĩ C", img: "img/2.jpg", mp3: "mp3/drt.mp3" },
    { name: "Girl Hanoi", singer: "Ca sĩ D", img: "img/3.jpg", mp3: "mp3/girlhanoi.mp3" },
    { name: "Kpkg", singer: "Ca sĩ E", img: "img/4.jpg", mp3: "mp3/kpkg.mp3" },
    { name: "Mộng du", singer: "Ca sĩ F", img: "img/5.jpg", mp3: "mp3/mongyu.mp3" },
    { name: "Ngao ngán", singer: "Ca sĩ G", img: "img/6.jpg", mp3: "mp3/ngaongo.mp3" },
    { name: "Regret", singer: "Ca sĩ H", img: "img/7.jpg", mp3: "mp3/regret.mp3" },
    { name: "Tell the kid", singer: "Ca sĩ I", img: "img/8.jpg", mp3: "mp3/tellthekid.mp3" }
];

function renderSongs() {
    const playlist = document.getElementById("playlist");
    if (!playlist) return;

    // Xóa nội dung cũ một cách an toàn
    while (playlist.firstChild) {
        playlist.removeChild(playlist.firstChild);
    }

    songs.forEach((song, index) => {
        // Sử dụng document.createElement thay vì innerHTML để chống XSS
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.setAttribute("data-index", index);

        const songImg = document.createElement("img");
        songImg.src = song.img;
        songImg.alt = song.name;
        songImg.classList.add("song-img");

        const songInfo = document.createElement("div");
        songInfo.classList.add("song-info");

        const songName = document.createElement("h3");
        songName.textContent = song.name; // textContent tự động escape HTML

        const songSinger = document.createElement("p");
        songSinger.textContent = song.singer; // textContent tự động escape HTML

        songInfo.appendChild(songName);
        songInfo.appendChild(songSinger);

        songItem.appendChild(songImg);
        songItem.appendChild(songInfo);

        playlist.appendChild(songItem);
    });
}

// Gọi hàm render khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", renderSongs);