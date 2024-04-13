import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "./Atom";
import React from "react";
import { Link } from "react-router-dom";

function MyInfo() {
    const [myAge, setMyAge] = useRecoilState(myInfoAge);
    const [myName, setMyName] = useRecoilState(myInfoName);
    return (
        <div>
            <h1>메인 페이지</h1>
            <h3>나이 : {myAge}</h3>
            <h3>이름 : {myName}</h3>

            <Link to = "/update">수정하기</Link>
        </div>
    );
}

export default MyInfo;