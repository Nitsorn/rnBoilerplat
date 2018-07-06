import React from "react";
import { connect } from "react-redux";
import * as UserActions from "@User/actions";
import moment from "moment";
import { View } from "react-native";
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
  H1,
  H2
} from "native-base";
class NewListItem extends React.Component {
  static navigationOptions = {
    title: "NewListItem"
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
          <H1>New Item</H1>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={this.onAddlistItem.bind(this)} full success>
              <Text>Add listItem</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  onAddlistItem() {
    // const { navigate } = this.props.navigation;
    // navigate("NewlistItem");
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
)(NewListItem);
