### 기본구현사항
- 전체 데이터 받아오기
- 입력가능
- 수정가능 (task: content 내용변경, isCheck toggle기능)
- 삭제가능

### 추가구현사항
- filterTab (전체/완료/미완료)
- 기본/ 다크모드 설정
- loading/error 상태에 따른 뷰 반영

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

### Getting Started
```js
client : yarn run start  
server : yarn run dev
```
