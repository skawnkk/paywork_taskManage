### Getting Started
```js
client : yarn run start  
server : yarn run dev
```

### 시연영상
 [기본 CRUD]
 
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/65053955/131714934-07c94c9e-56f5-4aca-abd4-47345543a061.gif)  

[스크린 다크모드 변경]  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/65053955/131715112-111e9ef4-e796-4346-92a4-af46f9192606.gif)

### 기본구현사항
- 전체 데이터 받아오기
- 입력가능
- 수정가능 (task: content 내용변경, isCheck toggle기능)
- 삭제가능

### 추가구현사항
- filterTab (전체/완료/미완료)
- 기본/ 다크모드 설정
- loading/error 상태에 따른 뷰 반영

### 구현추가 설명
[위키📑](https://github.com/skawnkk/paywork_taskManage/wiki/%EA%B5%AC%ED%98%84%EC%B6%94%EA%B0%80%EC%84%A4%EB%AA%85)
### 폴더구조

```json
src
├──components     //view에 해당하는 컴포넌트 
│   ├──taskHeader 
│   ├──taskList
├──store         //redux store
│   ├──actions
│   │ ├──task
│   │ └──theme
│   ├──reducers
│   │ ├──task
│   │ └──theme
│   ├──sagas
│   │ └──task
├──hooks
├──styles         //redux store
└──utils          //util함수
App
```

