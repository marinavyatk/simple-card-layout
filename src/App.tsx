import React from 'react';
import './App.css';
import {Button} from "./components/button";
import {ButtonBox} from "./components/buttonBox";
import {Header} from "./components/header";
import {Text} from "./components/text";
import {Image} from "./components/image";
import cardPicture from "./images/Rectangle 1.png"
import {Card} from "./components/card";
import {CardContainer} from "./components/cardContainer";

function App() {
    return (
        <CardContainer >
            <Card>
                <Image src={cardPicture}></Image>
                <Header>Headline</Header>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <ButtonBox>
                    <Button variant={"filled"}>See more</Button>
                    <Button variant={"outlined"}>Save</Button>
                </ButtonBox>
            </Card>

        </CardContainer>
    );
}

export default App;
