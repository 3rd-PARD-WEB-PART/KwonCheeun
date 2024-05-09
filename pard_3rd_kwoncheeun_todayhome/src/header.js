import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { nicknameState } from './Atom.js';

import td_house from "./img/오늘의집.png";
import content from "./img/content.png";
import searchIcon from "./img/search.png"
import searchBIcon from "./img/search_b.png";
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
    const [nickname, setNickname] = useRecoilState(nicknameState);

    const handleLikeClick = () => {
        setLiked(!liked); // 좋아요 상태를 토글
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isHidden = windowWidth <= 813;

    return (
        <Container>
        <Div>
            <Headers>
                <Header_inner>
                    <Contents src={content} className='content' alt='content' />
                    <Img src={td_house} className='td_house' alt='td_house_pic' />
                    {!isHidden && (
                        <>
                        <H_contain>
                            <H_text>커뮤니티</H_text>
                            <H_text>쇼핑</H_text>
                            <H_text>인테리어/생활</H_text>
                        </H_contain>
        
                        </>
                    )}
                    <SearchContainer>
                        <SearchIcon src={searchIcon} alt="Search Icon" />
                        <SearchBox type="text" placeholder="통합검색" />
                    </SearchContainer>
                    <SearchBIcon src={searchBIcon} className='searchBIcon' alt="SearchIconBlack" />
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
                    <M1_text isColored>프로필</M1_text>
                    <M1_text>나의 쇼핑</M1_text>
                    {!isHidden && (
                        <>
                            <M1_text >나의 리뷰</M1_text>
                        </>
                    )}
                    <Link to="/Edit" style={{ textDecoration: 'none' }}>
                        <CustomLink>설정</CustomLink>
                    </Link>
                </Menu_Row1_inner>
            </Menu_Row1>
            <Menu_Row2>
                <Menu_Row2_inner>
                    <M2_text isColored>모두보기</M2_text>
                    <M2_text>사진</M2_text>
                    <M2_text>집들이</M2_text>
                    <M2_text>노하우</M2_text>
                    <M2_text>질문과 답변</M2_text>
                    <M2_text>스크랩북</M2_text>
                    <M2_text>좋아요</M2_text>
                </Menu_Row2_inner>
            </Menu_Row2>
            <Body_inner>
                <Profile_inner>

                    <P_smile src={smile} className='smile' alt='smile_pic' />  
                    <FollowContainer>
                        <h2>{nickname}</h2> 
                        <FollowInfo>
                            <p>팔로워 1000M</p>
                            <p>팔로잉 0</p>
                        </FollowInfo>
                        <Reg1><p>설정</p></Reg1>
                    </FollowContainer>
                    <Hr></Hr>
                    <F_B>
                        <Bookmark src={b_mark} className='b_mark' alt='b_mark_pic' />
                        <Like src={liked ? likeRed : like} className='like' alt='like_pic' onClick={handleLikeClick} />
                        <Cp src={cp} className='cp' alt='cp_pic' /> 
                    </F_B>
                    <F_C>
                        <p>스크랩북</p>
                        <p>좋아요</p>
                        <p>내 쿠폰</p>
                    </F_C>
                    <F_N>
                        <h4>0</h4>
                        <h4>{liked ? '1' : '0'}</h4>
                        <h4>0</h4>
                    </F_N>
                </Profile_inner>
                <Content>
                    <StyledParagraph>사진 <NumberText>0</NumberText></StyledParagraph>
                    <RegCenter>
                        <h5 style={{ color: "#757575" }}>+ 첫 번째 사진을 올려보세요.</h5>
                    </RegCenter>
                    <StyledParagraph2>집들이 <NumberText>0</NumberText></StyledParagraph2>
                    <RegCenter2>
                        <h5 style={{ color: "#757575" }}>+ 첫 번째 집들이를 올려보세요.</h5>
                    </RegCenter2>
                </Content>
            </Body_inner>
        </Div>
        </Container>
    );
}
const H_contain = styled.p`
    display: flex;
    position: absolute;
    left: 195px;
    gap: 30px;
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        left: 156px;
    }
`;

const H_text = styled.p`
    font-size: 18px;
    color: black;
    font-weight: 700;
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        //margin-left: 156px;
    }
`;

const M1_text = styled.p`
    font-size: 18px;
    color: black;
    font-weight: 700;
    ${({ isColored }) =>
        isColored &&
        `
        color: #35C5F0;
    `}
    @media screen and (max-width: 813px) {
        font-size: 16px;
    }
`;

const M2_text = styled.p`
    font-size: 15px;
    color: black;
    font-weight: 700;
    ${({ isColored }) =>
        isColored &&
        `
        color: #35C5F0;
    `}
    @media screen and (max-width: 813px) {
        font-size: 13px;
    }
`;


const Container = styled.div`
    width: 100%;
    height: auto;
    @media screen and (max-width: 813px) {
        width: 813px;
        height: auto;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1083px;
        height: auto;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 813px) {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        height: auto;
    }
`;

const Arrow = styled.img`
    width: 12.626px;
    height: 6.5px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
    @media screen and (max-width: 813px) {
        display: none
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        display: none;
    }
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
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 60px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1083px;
        height: 86px;
    }
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
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 60px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1005px;
        height: 85px;
    }
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
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 54px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1083px;
        height: 65px;
    }
`;

const Menu_Row1_inner = styled.div`
    width: 1230px;
    height: 64px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    gap: 51px;
    margin-bottom: 17px; /* 각 메뉴 행 간격 조정 */
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 54px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1005px;
        height: 65px;
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
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 53px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1083px;
        height: 65px;
    }
`;

const Menu_Row2_inner = styled.div`
    width: 1230px;
    height: 64px;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    gap: 36px;
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 53px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1005px;
        height: 65px;
    }
`;

const Body_inner = styled.div`
    top: 216px;
    width: 1230px;
    height: 783px;
    display: flex;
    justify-content: center;
    position: absolute; /* Body_inner를 기준으로 자식 요소(Profile_inner)의 위치 조정 */
    @media screen and (max-width: 813px) {
        width: 813px;
        height: 988px;
        flex-direction: column;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1005px;
        height: 941px;
        flex-direction: column;
    }
`;

const Profile_inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; /* 프로필 정보 간격 조정 */
    position: absolute;
    top: 30.88px; /* 위에서 30.88px 만큼 떨어진 위치 */
    left: 6px; /* 왼쪽 끝에서 6px 만큼 떨어진 위치 */
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    width: 285px;
    height: 460px;
    flex-shrink: 0;
    @media screen and (max-width: 813px) {
        width: 813px;
        height: auto;
        align-content: left;
        
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 1003px;
        height: 310px;
        align-content: left;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 600px;
    position: absolute;
    top: 50px;
    left: 440px;
    @media screen and (min-width: 813px) {
        top: 342px;
    }
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        //margin-top: 94px;
        top: 393px;
        left: 130px;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 384px;
    @media screen and (max-width: 1083px) {
        display: none;
    }
`;

const Contents = styled.img`
    width: 21.5px;
    height: 19px;
    flex-shrink: 0;
    position: absolute;
    left: 17px;
    @media screen and (min-width: 814px) {
        display: none;
    }
`;

const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px; /* 아이콘과 입력 상자 사이 간격 조정 */
    @media screen and (max-width: 813px) {
        display: none;
    }
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        display: none;
    }
`;

const SearchBIcon = styled.img`
    width: 20px;
    height: 20x;
    margin-right: 20px; /* 아이콘과 입력 상자 사이 간격 조정 */
    position:absolute;
    right: 30px;
    @media screen and (min-width: 1084px) {
        display: none;
    }
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        right: 305px;
    }
`;


const SearchBox = styled.input`
    width: 192px;
    height: 33px;
    flex-shrink: 0;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #DADDE0;
    outline: none;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        display: none;
    }
`;

const Img = styled.img`
    width: 85px;
    height: 41.488px;
    left: 56px;
    position: absolute;
    @media screen and (max-width: 813px) {
        left: 368px;
        width: 78px;
        height: 38px;
    }
    @media screen and (min-width: 814px) and (max-width: 1083px) {
        left: 34px;
    }
`;

const Reg = styled.div`
    position: absolute;
    top: 73px;
    width: 750px;
    height: 188px;
    flex-shrink: 0;
    border: 1px dashed #757575;
    @media screen and (max-width: 813px) {

    }
`;

const RegCenter = styled(Reg)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    @media screen and (max-width: 813px) {

    }
`;

const Reg2 = styled.div`
    position: absolute;
    top: 398px;
    width: 750px;
    height: 188px;
    flex-shrink: 0;
    border: 1px dashed #757575;
    @media screen and (max-width: 813px) {

    }
`;

const RegCenter2 = styled(Reg2)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    @media screen and (max-width: 813px) {

    }
`;

const B_mark = styled.img`
    width: 18px;
    height: 18.5px;
    position: absolute;
    right: 344px;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        right: 286px;
    }
`;

const Notation = styled.img`
    width: 20px;
    height: 22px;
    position: absolute;
    right: 304px;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        right: 243px;
    }
`;

const Cart = styled.img`
    width: 23px;
    height: 22.5px;
    position: absolute;
    right: 262px;
    @media screen and (max-width: 813px) {
        right: 16px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        right: 204px;
    }
`;

const Smile = styled.img`
    width: 43.067px;
    height: 43px;
    position: absolute;
    right: 201px;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        right: 145px;
    }
`;

const P_smile = styled.img`
    width: 130px;
    height: 129.504px;
    flex-shrink: 0;
    top: 31.88px;
    position: absolute;
    @media screen and (max-width: 813px) {
        top: 33px;
        left: 14px;
        width: 88.344px;
        height: 88.344px;
        flex-shrink: 0;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        top: 33px;
        left: 27px;
    }
`;

const Bookmark = styled.img`
    width: 23px;
    height: 24.905px;
    flex-shrink: 0;
    @media screen and (max-width: 813px) {

    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {

    }
`;

const Like = styled.img`
    width: 30px;
    height: 25.905px;
    flex-shrink: 0;
    @media screen and (max-width: 813px) {

    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {

    }
`;

const Cp = styled.img`
    width: 28.5px;
    height: 21.916px;
    flex-shrink: 0;
    @media screen and (max-width: 813px) {

    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {

    }
`;

const StyledParagraph = styled.p`
    color: black; /* 텍스트 색상 */
    font-weight: bold; /* 텍스트 굵기 */
    position: absolute;
    top: 0px;
    @media screen and (max-width: 813px) {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 100%;
        height: auto;
    }
`;

const StyledParagraph2 = styled.p`
    color: black; /* 텍스트 색상 */
    font-weight: bold; /* 텍스트 굵기 */
    position: absolute;
    top: 324px;
    @media screen and (max-width: 813px) {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 100%;
        height: auto;
    }
`;

const NumberText = styled.span`
    color: #35C5F0;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 813px) {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 100%;
        height: auto;
    }
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
    position: absolute;
    gap: 8.06px;
    right: 62px;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 69px;
        right: 42px;
    }
`;

const ButtonText = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 15px;
    gap: 8.08px;
    @media screen and (max-width: 813px) {
        display: none;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 100%;
        height: auto;
    }
`;


const FollowContainer = styled.div`
    width: 285px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 160px;
    h2 {
        color: #000;
        text-align: center;
        font-size: 26px;
        font-weight: 700;
    }
    @media screen and (max-width: 813px) {
        width: 826px;
        height: 160px;
        left: 181px;
        top: 49px;
        align-items: flex-start;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 826px;
        height: 160px;
        top: 20px;
        left: 181px;
        align-items: flex-start;
    }
`;

const FollowInfo = styled.div`
    display: flex;
    gap: 22px;
    position: absolute;
    top: 50px;
    p {
        color: #000;
        text-align: center;
        font-size: 13px;
        font-weight: 400;
    }
    @media screen and (max-width: 813px) {
        
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        
    }  
`;

const F_B = styled.div`
    display: flex;
    gap: 51px;
    position: absolute;
    top: 354.64px;
    @media screen and (max-width: 813px) {
        gap: 282px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        gap: 282px;
        top: 211px;
    }  
`;

const F_C= styled.div`
    display: flex;
    gap: 46px;
    position: absolute;
    top: 383px;
    p {
        color: #000;
        text-align: center;
        font-size: 13px;
        font-weight: 400;
    }
    @media screen and (max-width: 813px) {
        left: 124px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        gap: 269px;
        top: 235px;
    }  
`;

const F_N= styled.div`
    display: flex;
    gap: 67px;
    position: absolute;
    top: 395px;
    @media screen and (max-width: 813px) {
        left: 124px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        gap: 298px;
        top: 255px;
    }  
`;

const Hr = styled.hr`
    width: 231px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    color: #EAEBEF;
    position: absolute;
    top: 326.25px;
    @media screen and (max-width: 813px) {
        width: 806px;
        top: 270px;
        left: 4px;
    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {
        width: 948px;
        top: 185px;
        left: 27px
    }
`;

const Reg1 = styled.div`
    width: 60px;
    height: 34.866px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    position: absolute;
    top: 100px;
    p {
        color: #000;
        text-align: center;
        font-size: 13px;    
        font-weight: 400;
    }
    @media screen and (max-width: 813px) {

    }

    @media screen and (min-width: 814px) and (max-width: 1083px) {

    }
`;

const CustomLink = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: black;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 813px) {
        font-size: 16px;
        font-weight: 700;
    }
`;

export default Header;