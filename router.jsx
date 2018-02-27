FlowRouter.route('/', {
  action() {
    ReactLayout.render(Dashboard, {content: <Overview />});
  }
});

FlowRouter.route('/dashboard/overview', {
  action() {
    ReactLayout.render(Dashboard, {content: <Overview />});
  }
});

FlowRouter.route('/dashboard/reports', {
  action() {
    ReactLayout.render(Dashboard, {content: <Reports />});
  }
});

FlowRouter.route('/login', {
  action() {
    ReactLayout.render(Login);
  }
});

FlowRouter.route('/*', {
  action() {
    ReactLayout.render(ErrorPage);
  }
});

export default {
  cognito: {
    USER_POOL_ID: "us-east-1_kIce0oJto",
    APP_CLIENT_ID: "7ok83hu5cjn284kidpa3vla9ip"
  }
};