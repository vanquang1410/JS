# Training Lễ
# Auth PHan Trung Phú
 `Code by Trịnh Xuân Lễ`
# RUN PROJECT
 `npm start`

# Yêu cầu
- Toàn bộ source phải để spaces 4
- Commit phải đúng nội dung xử lý, không được push các file thừa  ( node_modules)

# Cấu hình server

## Pm2
`nginx`
`Run build`
`pm2 --name le-reactjs  serve build/ 5001 --spa`

## Cấu trúc dự án
`
public: Folder này của React tạo ra, mình không bàn tới nhé
@types: Chứa các file định nghĩa interface, type cho Typescript
apis: Hay còn gọi là services. Chứa các khai báo function get api như axios,…
App: Chứa component App
assets: Chứa ảnh, videos, file, …
components: Chứa các folder component, trong mỗi folder là các file component
constansts: Chứa các các hằng số, enum
guards: Chứa các Route cần quyền truy cập
helpers: Chứa các function hay dùng, lặp đi lặp lại
hooks: Chứa các hook đang dùng
layouts: Chứa layout của dự án
pages: Chứa các trang của dự án
reducer: Chứa file reducer
routes: Chứa các route
store: chứa file store`
