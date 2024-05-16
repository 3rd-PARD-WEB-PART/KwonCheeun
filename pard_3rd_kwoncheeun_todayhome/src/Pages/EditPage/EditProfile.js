import React, { useRef, useEffect, useState } from 'react';
import { getUserData, patchUserAPI } from "../../API/AxiosAPI";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { emailState, nicknameState, birthDayState, homepageState, genderState, introduceState, profileImageState } from '../../Atom.js';

import td_house from "../../img/오늘의집.png";
import searchIcon from "../../img/search.png"
import bookmark from "../../img/bookmark.png";
import notation from "../../img/notation.png";
import cart from "../../img/cart.png";
import smile from "../../img/smile.png";
import arrow from "../../img/화살표.png"; // 화살표 이미지 추가
import profilePlaceholder from '../../img/smile.png'; 

function EditProfile() {
    const [email, setEmail] = useRecoilState(emailState);
    const [nickname, setNickname] = useRecoilState(nicknameState);
    const [birthDay, setBirthDay] = useRecoilState(birthDayState);
    const [homepage, setHomepage] = useRecoilState(homepageState);
    const [gender, setGender] = useRecoilState(genderState);
    const [introduce, setIntroduce] = useRecoilState(introduceState);
    const [profileImage, setProfileImage] = useRecoilState(profileImageState);

    const [userData, setUserData] = useState({
        id: "1",
        email: "",
        password: "",
        nickname: "",
        homepage: "",
        gender: "",
        date: "",
        profileImage: "",
        introduce: ""
    });

    useEffect(() => {
        const getData = async () => {
            const response = await getUserData();
            const user = response[0];
            setUserData(user);

            // Initialize Recoil state
            setEmail(user.email);
            setNickname(user.nickname);
            setBirthDay(user.date);
            setHomepage(user.homepage);
            setGender(user.gender);
            setIntroduce(user.introduce);
            setProfileImage(user.profileImage);
        };
        getData();
    }, []);

    const handleImageChange = (e) => {
        const selectedImage = URL.createObjectURL(e.target.files[0]);
        setProfileImage(selectedImage);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update Recoil state and local state
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'nickname':
                setNickname(value);
                break;
            case 'date':
                setBirthDay(value);
                break;
            case 'homepage':
                setHomepage(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'introduce':
                setIntroduce(value);
                break;
            default:
                break;
        }
    };

    const handleClickProfileImage = () => {
        fileInputRef.current.click();
    };

    const handleSave = async () => {
        const updatedUserData = {
            id: 1, // 현재 사용자의 ID
            email,
            nickname,
            date: birthDay,
            homepage,
            gender,
            introduce,
            profileImage,
        };
    
        try {
            await patchUserAPI(userData.id, updatedUserData); // API 호출을 통해 사용자 데이터 업데이트
            console.log('User data updated successfully!');
        } catch (error) {
            console.error('Failed to save user data:', error);
        }
    };

    const fileInputRef = useRef(null);

    return (
        <Div>
        <Headers>
            <Header_inner>
                <Img src={td_house} className='td_house' alt='td_house_pic' />
                <h4>커뮤니티</h4>
                <h4>쇼핑</h4>
                <h4>인테리어/생활</h4>
                <SearchContainer>
                    <SearchIcon src={searchIcon} className='searchIcon' alt="Search Icon" />
                    <SearchBox type="text" placeholder="통합검색" />
                </SearchContainer>
                <B_mark src={bookmark} className='bookmark' alt='bookmark_pic' />
                <Notation src={notation} className='notation' alt='notation_pic' />
                <Cart src={cart} className='cart' alt='cart_pic' />
                <Smile src={smile} className='smile' alt='smile_pic' />
                <WriteButton>
                    <ButtonText>글쓰기</ButtonText>
                    <Arrow src={arrow} alt='화살표' /> {/* 화살표 아이콘 추가 */}
                </WriteButton>
            </Header_inner>
        </Headers>
        <Menu_Row1>
            <Menu_Row1_inner>
                <h4>프로필</h4>
                <h4>나의 쇼핑</h4>
                <h4>나의 리뷰</h4>
                <h4>설정</h4>
            </Menu_Row1_inner>
        </Menu_Row1>
        <Menu_Row2>
            <Menu_Row2_inner>
                <h4>회원정보수정</h4>
                <h4>알림 설정</h4>
                <h4>사용자 숨기기 설정</h4>
                <h4>전문가 신청</h4>
                <h4>비밀번호 변경</h4>
                <h4>추천코드</h4>
            </Menu_Row2_inner>
        </Menu_Row2>
        <ProfileContainer>
            <ProfileForm2>
                <h2>회원정보수정</h2>
                <h5>탈퇴하기</h5>
            </ProfileForm2>
            <ProfileForm>
                <ProfileForm3>
                    <StyledLabel>이메일</StyledLabel>
                    <StyledInput type='email' placeholder='이메일을 입력하세요' name="email" value={email} onChange={handleChange}/>
                </ProfileForm3>
                <ProfileForm3>
                    <p>*필수항목</p>
                    <p>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</p>  
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>별명</StyledLabel>
                    <StyledInput 
                        type='text' 
                        placeholder='별명을 입력하세요'
                        name="nickname"
                        value={nickname}
                        onChange={handleChange}
                    />
                </ProfileForm3>
                <ProfileForm3>
                    <p>*필수항목</p>
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>홈페이지</StyledLabel>
                    <StyledInput type='text' placeholder='홈페이지 주소를 입력하세요' name="homepage" value={homepage}
                        onChange={handleChange}/>
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>성별</StyledLabel>
                    <RadioContainer>
                        <RadioInput
                            type='radio'
                            id='male'
                            name='gender'
                            value='male'
                            checked={gender === 'male'}
                            onChange={handleChange}
                        />
                        <RadioLabel htmlFor='male'>남성</RadioLabel>
                        <RadioInput
                            type='radio'
                            id='female'
                            name='gender'
                            value='female'
                            checked={gender === 'female'}
                            onChange={handleChange}
                        />
                        <RadioLabel htmlFor='female'>여성</RadioLabel>
                    </RadioContainer>
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>생년월일</StyledLabel>
                    <StyledInput 
                        type='text' 
                        placeholder='생일을 입력하세요' 
                        name="date"
                        value={birthDay}
                        onChange={handleChange}
                    />
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>프로필 이미지</StyledLabel>
                    <ProfileImage
                        src={profileImage || profilePlaceholder}
                        alt='프로필 사진'
                        onClick={handleClickProfileImage}
                    />
                    <StyledInput
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </ProfileForm3>
                <ProfileForm3>
                    <StyledLabel>자기소개</StyledLabel>
                    <StyledInput 
                        type='text' 
                        placeholder='자기소개를 입력하세요'
                        name="introduce"
                        value={introduce}
                        onChange={handleChange}
                    />
                </ProfileForm3>
            </ProfileForm>
            <Link to="/profile">
                <SaveButton onClick={handleSave}>수정하기</SaveButton>
            </Link>
        </ProfileContainer>
    </Div>
    );
}

// 스타일 컴포넌트
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #FFF;
`;

const Arrow = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 8px;
`;

const Headers = styled.div`
    width: 1920px;
    height: 82px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header_inner = styled.div`
    width: 1230px;
    height: 81px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    gap: 30px; /* 아이콘 간격 조정 */
    justify-content: center;
    background: rgba(255, 255, 255, 0.50);
    border-bottom: 1px solid #EAEBEF;
`;

const Menu_Row1 = styled.div`
    width: 1914px;
    height: 65px;
    flex-shrink: 0;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Menu_Row1_inner = styled.div`
    width: 1230px;
    height: 64px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    gap: 51px;
    margin-bottom: 10px; /* 각 메뉴 행 간격 조정 */
    h4:nth-child(4) {
        color: #35C5F0 /* '프로필' 텍스트에 파란색 적용 */
    }
`;

const Menu_Row2 = styled.div`
    width: 1914px;
    height: 65px;
    flex-shrink: 0;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Menu_Row2_inner = styled.div`
    width: 1230px;
    height: 64px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    gap: 36px;
    h4:nth-child(1) {
        color: #35C5F0;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px; /* 아이콘과 입력 상자 사이 간격 조정 */
`;

const SearchBox = styled.input`
    width: 360px;
    height: 43px;
    flex-shrink: 0;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #DADDE0;
    outline: none;
`;

const Img = styled.img`
    width: 85px;
    height: 41.488px;
`;

const B_mark = styled.img`
    width: 18px;
    height: 18.5px;
`;

const Notation = styled.img`
    width: 20px;
    height: 22px;
`;

const Cart = styled.img`
    width: 23px;
    height: 22.5px;
`;

const Smile = styled.img`
    width: 43.067px;
    height: 43px;
`;

const WriteButton = styled.button`
    width: 100px;
    height: 43px;
    flex-shrink: 0;
    background-color: #35C5F0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 15px;
    gap: 8.08px;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 61px;
    margin-bottom: 33px;
    background: #FFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20);
    width: 1236px;
    height: 956px;
    flex-shrink: 0;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;

const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const ProfileForm2 = styled.form`
    display: flex;
    gap: 951px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1236px;
    h5 {
        color: #F05656
    }
`;

const ProfileForm3 = styled.form`
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-left: 100px;
    margin-top: 30px;
    width: 1236px;
`;

const StyledLabel = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    width: 250px;
    height: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
`;

const SaveButton = styled.button`
    width: 100px;
    height: 43px;
    background-color: #35c5f0;
    margin-left: 1020px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const RadioInput = styled.input`
    margin-right: 5px;
`;

const RadioLabel = styled.label`
    margin-right: 15px;
`;

export default EditProfile;
