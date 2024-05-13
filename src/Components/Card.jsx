import styled from "styled-components";
import Winter from "../assets/winter.jpg";

const CardContainer = styled.div`
    background-color:#f8f9fa;

    height:60rem;
    padding-top:3rem;
    padding-bottom:3rem;
`
const CardBox = styled.div`
    height:100%;

    display:flex;
    justify-content:center;
    align-items:center;
`
const CardMain =styled.div`

    width:70rem;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`
const CardDiv = styled.div`
    width:33.3%;
    height:33.3%;
`
const OneCard = styled.div`
    width:92%;
    height:100%;
    margin-left:1rem;
    margin-right:1rem;
    border:1px solid #6c757d;
    border-radius:5px;
    background-color:white;
`
const WinterBox = styled.div`
    width:100%;
    height:60%;
    overflow:hidden;
`
const Img = styled.img`
    width:105%;
`
const CardText = styled.div`
    width:100%;
    height:40%;

`
const TextPart = styled.div`
    height:49%;
`
const Text = styled.p`
    padding-left:1rem;
    font-weight:400;

`
const TextBelow = styled.div`
    display:flex;
    height:25%;
    margin:0.6rem;

`
const BelowButtonDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:6rem;
    border-radius:5px;

`
const BelowButton = styled.button`
    display:inline-block;
    height:2rem;
    width:100%;
    background-color:transparent;
    color:#6c757d;
    border:1px solid #6c757d;
    border-radius:3px;
`
const Min = styled.p`
    display:inline-block;
    position:relative;
    left:50%;
    top:-20%;
`

function Card() {
    return (
        <CardContainer>
            <CardBox>
                <CardMain>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>

                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                    <CardDiv>
                        <OneCard>
                            <WinterBox>
                                <Img src={Winter}></Img>
                            </WinterBox>
                            <CardText>
                                <TextPart>
                                    <Text>This is a wider card with supporting text<br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</Text>
                                </TextPart>
                                <TextBelow>
                                    <BelowButtonDiv>
                                        <BelowButton>View</BelowButton>
                                        <BelowButton>Edit</BelowButton>
                                    </BelowButtonDiv>
                                    <Min>9min</Min>
                                </TextBelow>
                            </CardText>
                        </OneCard>
                    </CardDiv>
                </CardMain>
            </CardBox>
        </CardContainer>
    )
}

export default Card;