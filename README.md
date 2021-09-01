> 구현사항

- task 필수정보 : id, content, isCheck(완료여부, boolean), createdAt(생성일)

- 입력가능
- 수정가능(content, isCheck)
- 삭제가능

- 배경 색상 지정 가능 (중요도 및 개인기준에 따른)
- dragndrop (상하 이동)
- filterTab (전체/완료/미완료)
- 생성일로부터 지연기간 태그

> 구현방법

- [ ] api요청 => server에서 반영 => 전체 리스트 재 로딩  
       : 정확하게 수정된 데이터를 받아올 수 있다.
- [x] api요청 => server에서 반영 => front에서 재 반영  
       : 더 빠른 뷰와 리렌더링을 최소화하기 위함

> 타입선언 :

- 해당파일에서만 사용될 interface는 해당 파일에 작성
- 여러번 사용되는 interface는 utils/types에 정리하였음.

> 점검사항

- api 정리
- any 정리
- 리팩토링 :중복코드 단일화
- 클라이언트/서버 실행방법 정리
- loading을 더 잘쓰는 방법?
- handleEditMode를 동기적으로 실행하는 방법
- 절대경로 점검
- 각 상황별 로딩 화면 보여주기
- 로딩컴포넌트 꾸미기

> API 설계 및 json구조
> BASIC_URL : `http://localhost:4000/tasklist/${id}`

- 전체 리스트 받아오기 : GET BASIC_URL
- task 생성하기 : POST BASIC_URL, body: new_task
- task 수정하기 : PUT BASIC_URL(id), body: taskToEdit
- task 삭제하기 : DELETE BASIC_URL(id), body: taskToDelete

```json
{
  "taskList": [
    {
      "data": {
        "id": "number",
        "content": "string",
        "isCheck": "boolean",
        "createdAt": "string"
      },
      "loading": "boolean",
      "error": "boolean"
    }
  ]
}
```
