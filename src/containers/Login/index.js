import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "@User/actions.js";

import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Footer,
  FooterTab,
  Button
} from "native-base";

class Login extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <Container>
        <Content>
          <Text>{"LOG IN PAGE"}</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={login} full success>
              <Text>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
