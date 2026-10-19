# Triển khai lên Netlify

Đây là bản sao tĩnh của website, không cần cài đặt package. Kết nối repository với Netlify; cấu hình trong `netlify.toml` sẽ chạy `bash build.sh` và xuất bản thư mục `dist`.

Có thể chạy `bash build.sh` ở máy để tạo bản triển khai và dùng một máy chủ HTTP tĩnh để xem thư mục `dist` (ví dụ `python3 -m http.server --directory dist`). Trang gốc sẽ chuyển đến thiệp cưới.

Sổ lưu bút hiện không khả dụng vì khóa Supabase đã được loại bỏ khỏi dự án. Nhạc và một số dịch vụ bên ngoài vẫn cần kết nối mạng.

Truy cập `/admin` để tạo liên kết thiệp chung hoặc liên kết có tên khách mời. Tên khách được lưu trong chính đường dẫn, không lưu vào database; bất kỳ ai có đường dẫn đều có thể xem tên. Trang `/admin` hiện không yêu cầu đăng nhập và chỉ dùng để tạo liên kết.
