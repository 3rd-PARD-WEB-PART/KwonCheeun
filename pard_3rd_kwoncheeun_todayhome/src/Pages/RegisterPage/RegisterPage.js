//자세한 설명은 레퍼런스를 참고!
import React, { useState } from 'react'; //지속적으로 변경되는 값을 다루기 위해 props 대신 state 사용

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSubmit = (e) => { //각각의 값들을 입력 받아서 요소에 집어 넣기
        e.preventDefault();
        console.log("이메일:", email);
        console.log("비밀번호:", password);
        console.log("비밀번호 확인:", passwordCheck);
        console.log("닉네임:", nickname);
    };

  return (
    <div className="register-container">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <h3>이메일</h3>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
            </div>

            <div className="input-container">
                <h3>비밀번호</h3>
                <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
            </div>

            <div className="input-container">
                <h3>비밀번호 확인</h3>
                <input type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} placeholder="비밀번호 확인" />
            </div>

            <div className="input-container">
                <h3>닉네임</h3>
                <p>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="별명 (2~15자)" />
            </div>

            <button className="btn">회원가입하기</button>
        </form>
        <h4>이미 아이디가 있으신가요? <span style={{textDecoration: "underline"}}>로그인</span></h4>
    </div>
    );
    //password는 input 형식을 password로 받아서 비밀 지켜주기
    //placehoder를 사용하여 input box 내에 텍스트 넣기
    //텍스트 데코레이션을 사용하여 밑줄 생성
}

export default RegisterPage;