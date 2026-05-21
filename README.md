# 💰 Cash Flow Management

Ứng dụng **Quản lý Dòng tiền** dành cho doanh nghiệp, xây dựng trên nền tảng **Angular 21** với giao diện hiện đại sử dụng **Angular Material**.

---

## 📋 Giới thiệu

Cash Flow Management là một Single Page Application (SPA) giúp doanh nghiệp theo dõi, phân tích và lập kế hoạch tài chính toàn diện. Ứng dụng bao gồm các chức năng quản lý giao dịch, công nợ, dự báo, ngân sách và báo cáo tài chính.

---

## 🗂️ Tính năng chính

| Nhóm chức năng | Màn hình | Mô tả |
|---|---|---|
| **Tổng quan** | Dashboard | Tổng quan tình hình tài chính |
| **Dòng tiền** | Giao dịch | Quản lý các giao dịch thu/chi |
| **Dòng tiền** | Tài khoản tiền | Quản lý tài khoản ngân hàng/tiền mặt |
| **Công nợ** | Phải thu | Theo dõi các khoản phải thu từ khách hàng |
| **Công nợ** | Phải trả | Theo dõi các khoản phải trả cho nhà cung cấp |
| **Kế hoạch** | Dự báo | Dự báo dòng tiền tương lai |
| **Kế hoạch** | Ngân sách | Lập và theo dõi ngân sách |
| **Vận hành** | Phê duyệt | Quy trình phê duyệt giao dịch |
| **Vận hành** | Báo cáo | Báo cáo tài chính tổng hợp |
| **Hệ thống** | Cài đặt | Cấu hình hệ thống |

---

## 🏗️ Kiến trúc & Công nghệ

- **Framework**: Angular 21 (Standalone Components, Signal-based)
- **UI Library**: Angular Material 21
- **Routing**: Lazy-loading theo từng feature module
- **State Management**: Angular Signals
- **Testing**: Vitest
- **Styling**: SCSS

### Cấu trúc thư mục

```
src/
├── app/
│   ├── features/          # Các module tính năng (lazy-loaded)
│   │   ├── dashboard/     # Tổng quan
│   │   ├── cash/          # Dòng tiền (giao dịch, tài khoản)
│   │   ├── receivables/   # Phải thu
│   │   ├── payables/      # Phải trả
│   │   ├── forecast/      # Dự báo
│   │   ├── budget/        # Ngân sách
│   │   ├── approvals/     # Phê duyệt
│   │   ├── reports/       # Báo cáo
│   │   └── settings/      # Cài đặt
│   ├── layout/            # App Shell (sidebar, toolbar)
│   └── shared/            # Các component dùng chung
└── styles.scss            # Global styles
```

---

## 🚀 Hướng dẫn khởi động

### Yêu cầu hệ thống

- Node.js >= 18
- npm >= 10

### Cài đặt dependencies

```bash
npm install
```

### Chạy môi trường development

```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:4200/`

### Build production

```bash
npm run build
```

Kết quả build sẽ được lưu trong thư mục `dist/`.

---

## 🧪 Kiểm thử

### Chạy unit tests

```bash
npm test
```

---

## 🛠️ Generate code với Angular CLI

```bash
# Tạo component mới
ng generate component features/ten-component

# Xem tất cả schematic có sẵn
ng generate --help
```

---

## 📚 Tài nguyên tham khảo

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Vitest](https://vitest.dev/)
