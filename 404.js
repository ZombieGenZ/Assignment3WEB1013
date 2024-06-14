const href = window.location.href;
const errorMessage = document.getElementById("Error");

errorMessage.textContent = `Không thể tìm thấy nội dung nào với đường dẩn ${href}`;