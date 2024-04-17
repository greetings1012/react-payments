# react-payments

## 💳 기능 요구 사항

- [ ] 카드 번호 입력 및 식별

  - [ ] 카드 번호의 3~4번 블럭은 숨김 처리한다.
  - [ ] 숫자를 입력하지 않으면 올바르게 입력하라는 피드백을 보여주고, 입력을 제한한다.
  - [ ] 각 카드 번호 입력 블럭은 0~9의 숫자 4자리로 이루어져있다.
  - [ ] 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공한다.
  - [ ] 카드 번호 4자리 미만으로 입력하는 중에 포커스를 넘기려고 한다면 에러로 막는다.

- [ ] 카드 유효기간 입력
  - [ ] 입력은 숫자만 가능하며 숫자가 아닐시 피드백을 제공한다.
  - [ ] 유효하지 않은 월을 입력 시(ex 13월) 피드백을 제공한다.
  - [ ] 현재보다 이전 날짜를 입력 시 피드백을 제공한다.
  - [ ] 한 자리 숫자를 입력 시 자동으로 형식에 맞춰 0을 넣어준다.
- [ ] 카드 소유자 이름 입력

  - [ ] 소문자로 입력 시 강제로 대문자로 변환한다.
  - [ ] 영어가 아닌 문자 입력 시 입력을 제한하고 피드백을 제공한다.

- [ ]실시간 프리뷰 업데이트
  - [ ] 카드 번호가 4로 시작하면 Visa카드 로고를 카드 프리뷰에 업데이트한다.
  - [ ] 카드 번호가 51~55로 시작하면 MasterCard 로고를 카드 프리뷰에 업데이트한다.
  - [ ] 사용자가 카드 번호 입력 시 실시간으로 카드 프리뷰에 업데이트한다.
  - [ ] 사용자가 카드 유효기간 입력 시 실시간으로 카드 프리뷰에 업데이트한다.
  - [ ] 사용자가 카드 소유자 이름 입력 시 실시간으로 카드 프리뷰에 업데이트한다.

## 컴포넌트 설계

- [x] Input

  - [ ] CardNumberInput
  - [ ] CardExpirationDateInput
    - [ ] CardExpirationMonthInput
    - [ ] CardExpirationYearInput
  - [ ] CardOwnerNameInput

- [ ] Card

- [ ] ShelfHeader
  - [ ] MainHeader
  - [ ] SubHeader
