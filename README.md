### 기본구현사항
- 전체 데이터 받아오기
- 입력가능
- 수정가능 (task: content 내용변경, isCheck toggle기능)
- 삭제가능

### 추가구현사항
- filterTab (전체/완료/미완료)
- 기본/ 다크모드 설정
- loading/error 상태에 따른 뷰 반영

### 구현설명
**[Redux, ReduxSaga]**
- redux : task관리, 다크모드 설정시 reducer 설정
- redux Saga: task관리 시, 서버에 비동기 요청시 적용
   
**[Type 관리]**
- 해당 파일에서만 사용될 interface는 해당 파일에 작성
- 여러번 사용되는 interface는 utils/types에 정리하였음.

**[json server]**  
  : server에서 내용이 변경되지만 더 빠른 뷰와 전체 리렌더링을 막기 위해  
  front에서 reducer를 통해 변경하는 로직을 반영했습니다.  
  - API 설계 및 json구조
> BASIC_URL : `http://localhost:4000/tasklist/${id}`

       - 전체 리스트 받아오기 : GET / BASIC_URL
       - task 생성하기 : POST / BASIC_URL, body: new_task
       - task 수정하기 : PUT / BASIC_URL(id), body: taskToEdit
       - task 삭제하기 : DELETE / BASIC_URL(id), body: taskToDelete

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
