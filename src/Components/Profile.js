import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";
import birdNerd from "../Images/birdNerd.jpg";
import GridRow from "../Styling/GridRow";
import ComposeEntry from "./ComposeEntry";
import Notebook from "./Notebook";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <GridRow>
        <Grid.Column width={6}>
          <Card
            color="grey"
            as={Menu}
            animation="overlay"
            Icon="labeled"
            Inverted
            vertical
            width="thin"
            fluid
          >
            <Card.Content>
              <Image src={birdNerd} />
              <Segment
                style={{ padding: "1em 0em" }}
                inverted
                className="usernameBox"
              >
                {this.props.isLoggedIn ? (
                  <Card.Header as="h2" textAlign="center">
                    Happy birding, {this.props.username}!
                  </Card.Header>
                ) : (
                  <Card.Header>beep boop you aren't logged in</Card.Header>
                )}
              </Segment>
              {/* <Card.Description>
                <Card.Meta as="h2">About Me:</Card.Meta>
                {this.props.about}
              </Card.Description> */}
            </Card.Content>
            {/* <Card.Content extra>
              <Link to="/editprofile">
                <Button className="submit-button" size="large" fluid>
                  Edit Profile
                </Button>
              </Link>
            </Card.Content> */}
          </Card>
        </Grid.Column>
        <Grid.Column floated="right" width={10}>
          <Segment basic>
            <Header as="h1" textAlign="center">
              Notebook
            </Header>
            <ComposeEntry />
            <Divider />
            <Notebook />
          </Segment>
        </Grid.Column>
      </GridRow>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.username !== "",
    username: state.username
  };
};
export default connect(
  mapStateToProps,
  null
)(Profile);

// export default Profile;
