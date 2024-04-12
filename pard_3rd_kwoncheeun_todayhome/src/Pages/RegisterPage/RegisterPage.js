import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSubmit = (e) => {
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

                {/* Link 컴포넌트를 사용하여 버튼에 링크 걸기 */}
                <Link to="/Profile">
                    <button type="submit" className="btn">회원가입하기</button>
                </Link>
            </form>
            <h4>이미 아이디가 있으신가요? <span style={{textDecoration: "underline"}}>로그인</span></h4>
        </div>
    );
}

export default RegisterPage;