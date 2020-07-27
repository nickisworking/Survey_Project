# Survey_Project

본 프로젝트는 블록체인 기반 설문조사 서비스로, 설문을 원하는 사람들이 쉽게 설문을 올리고 그 결과를 받을 수 있는 웹 페이지입니다.         
또한, 설문을 올리는 사람들은 그 대가로 토큰을 지불하고, 설문에 참여하는 사람들은 보상으로 해당 토큰을 얻을 수 있습니다.

## 설치 방법

## 사용 방법

1. **Sign Up** 페이지에서 회원가입을 합니다. 
2. 회원가입 시 **Metamask**가 연동되어 지갑 주소가 연결되고 계정을 생성할 수 있습니다.
```js
  if (typeof web3 !== 'undefined') {
      console.log('sign in 페이지 Metamask가 설치되어 있습니다.')
    ethereum.enable();

    async function getAccount() {
      const accounts = await ethereum.enable();
      const account = await accounts[0]
          console.log(account);
          $('input[name=address]').val(account)    
    }
      getAccount();
  }
// 회원가입 시 Metamask 지갑 주소를 불러오는 코드입니다.
```
 
3. 회원가입 후 로그인하여 원하는 Create Survey 페이지에서 설문을 등록하실 수 있습니다. 
>* **Create Survey** 페이지에 접속합니다.
>* 우측에 보이는 질문 형식 중에서 원하는 항목을 좌측에 드래그합니다.
>* 좌측에 놓인 형식에 맞게 질문을 기입해줍니다. 
>* 위와 같은 과정을 반복하여, 조사하고자 하는 설문을 만드실 수 있습니다. 
4. 설문 등록 뿐만 아니라, 설문조사에 참여하여 보상으로 토큰을 받으실 수 있습니다. 


## Contribute

## Code Status

## 주의점 
