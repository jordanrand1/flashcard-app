import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Icon,
} from 'semantic-ui-react';

const Container = styled.div`
  height: 300px;
  width: 80%;
  margin: 50px auto;
`

const Card = styled.div`
  height: 100%;
  width: 60%;
  margin: 0 auto;
  border: 2px grey solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const CardText = styled.div`
  text-align: center;
  font-size: 30px;
`

class StudyCard extends React.Component {

  state = {
    cardNum: 0,
    front: true,
  }

  render() {
    const { front, cardNum } = this.state
    const { cards } = this.props
    return (
      <>
        { cards[cardNum] === undefined ? 
        <></> 
        :
        <Container>
          <Button floated="left" icon circular size="massive" style={{marginTop: '110px', marginLeft: '30px'}}>
            <Icon name="left angle"/>
          </Button>
          <Button floated="right" icon circular size="massive" style={{marginTop: '110px', marginRight: '30px'}}>
            <Icon name="right angle"/>
          </Button>
          <Card onClick={ () => this.setState({front: !front})}>
            <CardText>
              { front ? cards[cardNum].term : cards[cardNum].definition }
            </CardText>
          </Card>
        </Container>
        }
      </>
    )
  }
}

export default StudyCard;