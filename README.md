# Hướng dẫn sử dụng trang cá nhân Dennis Tran

## 📋 Nội dung các trang

### 1. **index.html** - Trang chủ
- Giới thiệu cá nhân
- Links con đến các khóa học
- Social media links
- Spotify player

### 2. **Spotify.html** - Danh sách bài hát
- Playlist nhạc
- Player với controls
- Shuffle button

## ⚙️ Cách tùy chỉnh liên kết

### Chỉnh sửa file `config.js`

Tất cả các liên kết được quản lý tập trung trong file `config.js`. Bạn chỉ cần mở file này và thay đổi các URL:

```javascript
const CONFIG = {
    // Social Media
    youtube: "https://your-youtube-url.com",
    facebook: "https://your-facebook-url.com",
    wescan: "https://your-wescan-url.com",
    tiktok: "https://your-tiktok-url.com",
    linkedin: "https://your-linkedin-url.com",
    
    // Khóa học
    hsgTinCourse: "https://your-link-to-hsg-tin-course.com",
    applyBigTechCourse: "https://your-link-to-apply-bigtech-course.com",
    
    // Spotify
    backgroundMusic: "Sounds/BackgroundMusic.mp3",
    clickSound: "Sounds/mouseClick.mp3"
};
```

## 🎨 Cải thiện giao diện

### CSS Files
- **style.css** - Trang chủ (responsive, modern)
- **styleSpotify.css** - Trang Spotify player

### JavaScript Files
- **config.js** - Config và hàm utility
- **spotify-player.js** - Logic Spotify player

## 📱 Tính năng Responsive

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (480px - 768px)
- ✅ Mobile nhỏ (<480px)

## 🎵 Spotify Player

- Play/Pause
- Previous/Next
- Seek bar
- Shuffle button
- Auto-display taskbar khi chạy nhạc

## ♿ Accessibility

- Semantic HTML
- Alt text cho hình ảnh
- Keyboard navigation support
- Focus states
- ARIA labels

## 📂 Cấu trúc thư mục

```
Test-HTML/
├── index.html              # Trang chủ
├── index2.html            # (chưa sử dụng)
├── Spotify.html           # Trang Spotify
├── style.css              # CSS trang chủ
├── styleSpotify.css       # CSS Spotify
├── config.js              # Config liên kết
├── spotify-player.js      # Spotify player logic
├── Images/                # Hình ảnh
├── Sounds/                # File âm thanh
└── Spotify/               # File nhạc
```

## 🚀 Hướng dẫn nhanh

1. **Mở file `config.js`**
2. **Thay đổi các URL** theo tài khoản của bạn
3. **Lưu file**
4. **Mở `index.html` trên trình duyệt**

Tất cả liên kết sẽ tự động cập nhật!
