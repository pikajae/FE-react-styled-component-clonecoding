import styled from "styled-components";

const BannerContainer = styled.div`
    height:30rem;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`;
const TextBox = styled.div`

    text-align:center;
`
const Text1 = styled.h1`
    font-weight:300;
    font-size:2.5rem;

`
const Text2 = styled.p`
    color:#6c757d;
    font-weight:300;
    font-size:1.5rem;
`
const BannerButtonBox = styled.div`
    display:inline;
    position:relative;
    top:1rem;
`
const BannerButton = styled.button`
    height:2.4rem;
    width:10rem;
    border-radius:5px;
    display:inline-block;
    margin:0.2rem;
    border:none;
    background-color:#007bff;
    color:white;
    font-weight:400;
    font-size: 1rem;
`
const BannerButton2 = styled.button`
    height:2.4rem;
    width:10rem;
    border-radius:5px;
    display:inline-block;
    margin:0.2rem;
    border:none;
    color:white;
    background-color:gray;
    font-weight:400;
    font-size: 1rem;
`

function Banner()
{
    return (
        <BannerContainer>
            <TextBox>
                <Text1>Album example</Text1>
                <Text2>Something short and leading about the collection below—its contents,<br></br>
                the creator, etc. Make it short and sweet, but not too short so folks <br></br>
                don’t simply skip over it entirely.</Text2>
            </TextBox>
            <BannerButtonBox>
                <BannerButton>Main call to action</BannerButton>
                <BannerButton2>Secondary action</BannerButton2>

            </BannerButtonBox>
        </BannerContainer>
    )
};

export default Banner;