import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../firebase';
import { db } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser, onSetUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        //Set Auth User
        (authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null));
        //Set Database User
        if ( authUser ) {
          db.onceGetUser(authUser.uid).then(snapshot =>
            onSetUser(snapshot.val())
          )
        }

      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    onSetUser: (user) => dispatch({ type: 'USER_SET', user })
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
