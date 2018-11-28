import React from 'react';
import { 
  Input, 
  TextArea, 
  Form, 
  Segment, 
  Container, 
  Button, 
  Header,
  Icon,
  Checkbox,
  Sticky,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { addSet } from '../reducers/flashcardset';
import { connect } from 'react-redux';

const StyledContainer = styled(Container)`
  margin-top: 100px;
` 

const Space = styled.div`
  display: inline;
  padding: 2%;
`

class Create extends React.Component {

  state = {
    title: '',
    numberOfCards: 5,
    cardForms: [],
    cards: [],
    visible: true,
    j: 0,
  }

  handleChange = (e) => {
    const { value, name, tabIndex } = e.target
    if (name === 'term') {
      const newCards = this.state.cards
      newCards[tabIndex].term = value
      this.setState({
        cards: newCards
      })
    } else if (name === 'definition') {
      const newCards = this.state.cards
      newCards[tabIndex].definition = value
      this.setState({
        cards: newCards
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  createCard = () => {
    var i = this.state.j
    console.log('creating')
    this.state.cards.push({key: i, term: '', definition: ''})
    this.state.cardForms.push(
      <Segment key={i} style={{borderRadius: '15px'}}>
        <Form.Field>
          <Icon size="big" name="trash alternate"/>
          <TextArea
            placeholder="Term"
            name="term"
            tabIndex={i}
            rows={1}
            autoHeight
            style={styles.card}
            onChange={this.handleChange}
          >{this.state.cards[i].term}</TextArea>
          <Button circular icon="picture"></Button>
          <Space/>
          <TextArea
            placeholder="Definition"
            name="definition"
            tabIndex={i}
            rows={1}
            autoHeight
            onChange={this.handleChange}
            style={styles.card}
          >{this.state.cards[i].definition}</TextArea>
          <Button circular icon="picture"></Button>
        </Form.Field>
      </Segment>
    )
    this.setState({
      j: i + 1
    }, () => console.log('set state'))
  }

  handleSubmit = () => {
    this.props.dispatch(addSet(this.state.title, this.state.cards))
  }

  createCardForms = () => {
    if (this.state.loaded === false) {
      this.setState({
        loaded: true
      }, () => {
        const { numberOfCards, cardForms, cards } = this.state
        for ( var i = this.state.j; i < numberOfCards; i++) {
          cards.push({key: i, term: '', definition: ''})
          cardForms.push(
            this.createCard()
          )
          this.setState({
            j: i
          })
        }
      })
    }
    
  }

  render() {
    return (
      <StyledContainer>
        <Sticky offset={50} >
          <Button 
            floated="right" 
            color="blue" 
            fixed 
            onClick={() => this.handleSubmit()}
          >Create</Button>
        </Sticky>
        <Header as="h2">Create New Set</Header>
        <Form>
          <Input
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Button.Group floated='right'>
            <Checkbox 
              slider 
              style={{paddingTop: '10px'}}
              label="Public?" 
              value={this.state.visible} 
              defaultChecked="true" 
              onClick={() => this.setState({ visible: !this.state.visible })}
            />
          </Button.Group>
          { this.state.cardForms.map((value, i) => {
            return(value)
          })}
          { 
            this.state.title === "" ? 
            <></> 
            : 
            <Button circular color="green" fluid icon="plus" onClick={ () => this.createCard() }></Button>
          }
        </Form>
      </StyledContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return { set: state.set }
}

const styles = {
  card: {
    outline: 'none',
    width: '40%',
    border: '0px',
    borderBottom: '2px solid black',
    borderRadius: '0px',
  }
}

export default connect(mapStateToProps)(Create);
