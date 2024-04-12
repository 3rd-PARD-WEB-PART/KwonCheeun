import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import td_house from "./img/오늘의집.png";
import searchIcon from "./img/search.png"
import bookmark from "./img/bookmark.png";
import notation from "./img/notation.png";
import cart from "./img/cart.png";
import smile from "./img/smile.png";
import arrow from "./img/화살표.png"; // 화살표 이미지 추가
import styled from "styled-components";
import b_mark from "./img/bookmark.png";
import cp from "./img/쿠폰.png";
import like from "./img/like.png";
import likeRed from "./img/likeRed.png"; 

function Header() {
    const [liked, setLiked] = useState(false); // 초기 값은 좋아요되지 않은 상태

    const handleLikeClick = () => {
        setLiked(!liked); // 좋아요 상태를 토글
    };
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
                    <Link to="/Edit" style={{ textDecoration: 'none' }}>
                        <CustomLink>설정</CustomLink>
                    </Link>
                </Menu_Row1_inner>
            </Menu_Row1>
            <Menu_Row2>
                <Menu_Row2_inner>
                    <h4>모두보기</h4>
                    <h4>사진</h4>
                    <h4>집들이</h4>
                    <h4>노하우</h4>
                    <h4>질문과 답변</h4>
                    <h4>스크랩북</h4>
                    <h4>좋아요</h4>
                </Menu_Row2_inner>
            </Menu_Row2>
            <Body_inner>
                <Profile_inner>
                    <P_smile src={smile} className='smile' alt='smile_pic' />
                    <h2>채채Kwon</h2>
                    <FollowContainer>
                        <FollowInfo>
                            <p>팔로워 1000M</p>
                            <p>팔로잉 0</p>
                        </FollowInfo>
                    </FollowContainer>
                    <Reg1>설정</Reg1>
                    <Hr></Hr>
                    <FollowContainer>
                        <FollowInfo>
                            <Bookmark src={b_mark} className='b_mark' alt='b_mark_pic' />
                            <Like src={liked ? likeRed : like} className='like' alt='like_pic' onClick={handleLikeClick} />
                            <Cp src={cp} className='cp' alt='cp_pic' /> 
                        </FollowInfo>
                    </FollowContainer>
                    <FollowContainer>
                        <FollowInfo>
                            <p>스크랩북</p>
                            <p>좋아요</p>
                            <p>내 쿠폰</p>
                        </FollowInfo>
                    </FollowContainer>
                    <FollowContainer>
                        <FollowInfo>
                            <h4>0</h4>
                            <h4>{liked ? '1' : '0'}</h4>
                            <h4>0</h4>
                        </FollowInfo>
                    </FollowContainer>
                </Profile_inner>
                <Content>
                    <StyledParagraph>사진 <NumberText>0</NumberText></StyledParagraph>
                    <RegCenter>
                        <h5 style={{ color: "#757575" }}>+ 첫 번째 사진을 올려보세요.</h5>
                    </RegCenter>
                    <StyledParagraph>집들이 <NumberText>0</NumberText></StyledParagraph>
                    <RegCenter>
                        <h5 style={{ color: "#757575" }}>+ 첫 번째 집들이를 올려보세요.</h5>
                    </RegCenter>
                </Content>
            </Body_inner>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Arrow = styled.img`
    width: 12.626px;
    height: 6.5px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
`;

const Headers = styled.div`
    width: 1914px;
    height: 86px;
    flex-shrink: 0;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header_inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1230px;
    height: 85px;
    flex-shrink: 0; 
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
    h4:nth-child(1) {
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

const Body_inner = styled.div`
    width: 1230px;
    height: 783px;
    display: flex;
    justify-content: center;
    position: relative; /* Body_inner를 기준으로 자식 요소(Profile_inner)의 위치 조정 */
`;

const Profile_inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; /* 프로필 정보 간격 조정 */
    position: absolute; /* 부모 요소(Body_inner)를 기준으로 위치를 조정 */
    top: 30.88px; /* 위에서 30.88px 만큼 떨어진 위치 */
    left: 6px; /* 왼쪽 끝에서 6px 만큼 떨어진 위치 */
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    width: 285px;
    height: 500px;
    flex-shrink: 0;
`;

const Content = styled.div`
    left: 440px;
    width: 750px;
    height: 783px;
    flex-shrink: 0;
    position: absolute;
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

const Reg = styled.div`
    top: 92.64px;
    width: 750px;
    height: 187.282px;
    flex-shrink: 0;
    border: 1px dashed #757575;
`;

const RegCenter = styled(Reg)`
    display: flex;
    justify-content: center;
    align-items: center;
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

const P_smile = styled.img`
    width: 130px;
    height: 129.504px;
    flex-shrink: 0;
    top: 62.76px; /* 위에서 30.88px 만큼 떨어진 위치 */
    left: 83x; /* 왼쪽 끝에서 6px 만큼 떨어진 위치 */
`;

const Bookmark = styled.img`
    width: 23px;
    height: 24.905px;
    flex-shrink: 0;
`;

const Like = styled.img`
    width: 30px;
    height: 25.905px;
    flex-shrink: 0;
`;

const Cp = styled.img`
    width: 28.5px;
    height: 21.916px;
    flex-shrink: 0;
`;

const StyledParagraph = styled.p`
    color: black; /* 텍스트 색상 */
    font-weight: bold; /* 텍스트 굵기 */
`;

const NumberText = styled.span`
    color: #35C5F0;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

const FollowContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const FollowInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 22px;
    width: 80%;
    /* 팔로워와 팔로잉 간격 조정을 위한 스타일 설정 */
`;

const Hr = styled.hr`
    width: 231px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    color: #EAEBEF;
`;

const Reg1 = styled.div`
    width: 60px;
    height: 34.866px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    text-align: center;
`;

const CustomLink = styled.h4`
    color: black;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export default Header;