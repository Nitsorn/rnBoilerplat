import React from "react";
import { connect } from "react-redux";
import * as UserActions from "@User/actions";
import { bindActionCreators } from "redux";
import * as Utils from "@helpers/utils";
import {
  Container,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  List,
  ListItem,
  H1
} from "native-base";
class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  state = {
    listItems: []
  };

  render() {
    const { listItems } = this.state;
    const { logout } = this.props;
    const { timeFormat } = Utils;
    return (
      <Container>
        <Content padder>
          <List>
            {listItems.length > 0 ? (
              listItems.map(listItem => {
                return (
                  <ListItem>
                    <H1>{listItem}</H1>
                  </ListItem>
                );
              })
            ) : (
              <H1>No listItems set. Add a new one </H1>
            )}
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={this.onAddlistItem.bind(this)} full success>
              <Text>Add listItem</Text>
            </Button>
            <Button onPress={logout} full danger>
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  onAddlistItem() {
    debugger;
    const { navigate } = this.props.navigation;
    navigate("NewListItem");
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
