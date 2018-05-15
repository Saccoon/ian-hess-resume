import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import '../login/Login.css';
import PasswordForgetForm  from '../../components/login/PasswordForget';
import PasswordChangeForm from '../../components/login/PasswordChange';
import withAuthorization from '../../app/withAuthorization';
import Shade from '../../components/shade/Shade';

class AccountPage extends Component {

    render() {
      const { authUser } = this.props;
      
      return (
        <div data-page="Login">
          <Shade>
            <Shade>
              <article>
                <h2>Account: {authUser.email}</h2>
                <PasswordForgetForm />
                <p>- or -</p>
                <PasswordChangeForm />
              </article>
            </Shade>
          </Shade>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, null)
)(AccountPage);