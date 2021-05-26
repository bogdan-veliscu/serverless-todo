// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4l9dqf7nv79pmv5mccpc0uivoe",     // CognitoClientID
  "api_base_url": "https://i9n1lj8rok.execute-api.eu-west-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "todo-demo-todo-app.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1og8gtqw6pk8h.amplifyapp.com"                                      // AmplifyURL
};

export default config;
