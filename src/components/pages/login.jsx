// Fix this with the actual configuration file path
import config from "../config";

import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

Login = React.createClass({

  componentDidMount(){
    $(".login-page").addClass("ng-enter");
    setTimeout(function(){
      $(".login-page").addClass("ng-enter-active");
    }, 300);
    setTimeout(function(){
      $(".login-page").removeClass("ng-enter");
      $(".login-page").removeClass("ng-enter-active");
    }, 600);
  },

login(email, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  const user = new CognitoUser({ Username: email, Pool: userPool });
  const authenticationData = { Username: email, Password: password };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) =>
    user.authenticateUser(authenticationDetails, {
      onSuccess: result => resolve(),
      onFailure: err => reject(err)
    })
  );
}

  handleSubmit = async event => {
  event.preventDefault();

  try {
    await this.login(this.state.email, this.state.password);
    alert("Logged in");
  } catch (e) {
    alert(e);
  }
}

  render: function() {
    return (
      <div className="login">
      	<div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src="/flat-avatar.png" className="user-avatar" /> 
              <h1>nXHuman <br /><small>Case Authoring Tool</small></h1> 
              <form role="form" className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
                  </div> 
                </div> 
                <a href="/dashboard/overview" style={{color: '#fff'}}><button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button></a> 
              </form> 
            </div> 
          </div> 
        </div>
      </div>

    );
  }
});