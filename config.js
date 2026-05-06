// ========== CẤU HÌNH LIÊN KẾT ==========
// Bạn có thể thay đổi các link dưới đây

const CONFIG = {
    // Social Media
    youtube: "https://www.youtube.com/@DennisTran14",
    facebook: "https://www.facebook.com/DennisTran1402/",
    wescan: "https://wescan.vn/DennisTran",
    tiktok: "https://www.tiktok.com/@dennis.trann",
    linkedin: "https://www.linkedin.com/in/dennis-tran-69a78a25b",
    
    // Khóa học
    hsgTinCourse: "https://docs.google.com/document/d/1EHpEkC9zL58W6cZ8i6Rk-PWmRyJ44SH6ENr6Er8gbtQ/edit?usp=sharing",
    applyBigTechCourse: "https://docs.google.com/document/d/1dbveDyPMFTocHW-KWJptX4WZBk4-WBFJBe6oKhfsCxM/edit?usp=sharing",
    
    // Hình ảnh Social Media
    images: {
        youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
        tiktok: "https://cdn-icons-png.flaticon.com/512/3116/3116491.png",
        linkedin: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
        wescan: "https://play-lh.googleusercontent.com/unTxZad3Ba-O5dlOa6yewbfM7rICQY8QzEije-jEj_R9J6uYZmdo5FKlzma2uOZqmvQ=w240-h480-rw",
        hsgTin: "https://cdn-icons-png.flaticon.com/512/1055/1055689.png",
        bigTech: "https://cdn-icons-png.flaticon.com/512/3050/3050159.png"
    },
    
    // Sounds
    clickSound: "Sounds/mouseClick.mp3"
};

// ========== UTILITY FUNCTIONS ==========

function openURL(url) {
    let sound = document.getElementById("mouseClick");
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
    window.open(url);
}

function toggleMusic() {
    var music = document.getElementById("bg-music");
    var btn = document.getElementById("music-btn");
    var slash = document.getElementById("slash");
    
    if (music.paused) {
        let sound = document.getElementById("mouseClick");
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
        music.play();
        slash.style.display = "none";
    } else {
        music.pause();
        slash.style.display = "block";
    }
}
