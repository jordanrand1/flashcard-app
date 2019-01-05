import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Card,
} from 'semantic-ui-react';
import { getSet } from '../reducers/flashcardset';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 100px;
` 

const StyledCard = styled(Card)`
  boxShadow = '0 0 0 1px #d4d4d5, 0 4px 0 0 #2185d0, 0 1px 3px 0 #d4d4d5'
`

class SetView extends React.Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    this.props.dispatch(getSet(this.props.match.params.id));
  }
  
  render () {
    return (
      <StyledContainer>
        <Header as="h1">{this.props.match.params.title}</Header>
        <Card.Group itemsPerRow={4}>
          <Link to={`${this.props}/${this.props}/study`}>
            <Card style={styles.card} header='Study'/>
          </Link>
          <Card style={styles.card} header='Learn'/>
          <Card style={styles.card} header='Test'/>
          <Card style={styles.card} header='Match'/>
        </Card.Group>
      </StyledContainer>
    )
  }
}

const styles = {
  card: {
    boxShadow: '0 0 0 1px #d4d4d5, 0 4px 0 0 #2185d0, 0 1px 3px 0 #d4d4d5',
  }
}

const mapStateToProps = (state, props) => {
  return { set: state }
}

export default connect(mapStateToProps)(SetView);