### Initialising AWS Amplify

We use [AWS Amplify](https://aws.amazon.com/amplify/) to provision our backend services. Therefore you will need to configure AWS amplify locally first before you can run the app.

1. install AWS amplify globally.

```shell
npm install -g @aws-amplify/cli
```

1. we need to configure the CLI

```shell
amplify configure
```

This should open up the AWS console.

1. Select IAM User

1. Enter the following Account ID `787043571137`

1. Enter your username and password that was given to you

1. Go back to the terminal hit enter

1. Select *eu-west-2* as the server

1. Specify the new username as `<yourname>-amplify`

1. This will open up a browser window, make sure programatic access is selected and click Next

1. Ensure AdministratorAccess is ticked and click next

1. Click next again

1. Click create user, you should be then shown your access keys

1. Go back to the console and press enter

1. Copy the Access key ID from the browser and paste it into the console, then hit enter

1. Copy the Secret access key from the browser and paste it into the console, then hit enter

1. Enter a profile this can be `audio-tour-<yourname>`, then hit enter

1. Navigate to the following directory `project-audio-tour/client`

1. You can now run `amplify env checkout dev` which will set you up with the dev environment