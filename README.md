# Salesforce Winter '23 new release notes

In this repository you can find the lwc components demonstrated in November Salesforce Developer Meeting in WEE, Thessaloniki. Follow the instructions to deploy the code in your org.

>Disclaimer: Most of the instructions in this repo are based to lwc-reciepes repo https://github.com/trailheadapps/lwc-recipes.

## Table of contents

- [Demo](#demo)
- [Installing the app using a Scratch Org](#installing-the-app-using-a-scratch-org): This is the recommended installation option. Use this option if you are a developer who wants to experience the app and the code.

- [Installing the app using a Developer Edition Org or a Trailhead Playground](#installing-the-app-using-a-developer-edition-org-or-a-trailhead-playground): Useful when tackling Trailhead Badges or if you want the app deployed to a more permanent environment than a Scratch org.

- [Optional installation instructions](#optional-installation-instructions)
- [Info](#info)

## Demo

<p align="left">
  <br />
  <a href="https://youtu.be/k83JUGHXsBg" target="_blank">
    <img src="/introPic2.PNG" width="500px" alt="Demo" />
  </a>
</p>

## Installing the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

   - Enable Dev Hub in your Trailhead Playground
   - Install Salesforce CLI
   - Install Visual Studio Code
   - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx auth:web:login -d -a myhuborg
   ```

1. Clone the lwc-recipes repository:

   ```
   git clone https://github.com/mmousiou/lwcWinter23Demo.git
   ```

1. Create a scratch org and provide it with an alias (**winter-23-release-notes** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a winter-23-release-notes
   ```

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **Winter_Release_23** permission set to the default user:

   ```
   sfdx force:user:permset:assign -n Winter_Release_23
   ```

1. Import sample data:

   ```
   sfdx force:data:tree:import -p ./data/data-plan.json
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```

1. In App Launcher, click **View All** then select the **Winter '23 release notes** app.

## Installing the App using a Developer Edition Org or a Trailhead Playground

Follow this set of instructions if you want to deploy the app to a more permanent environment than a Scratch org.
This includes non source-tracked orgs such as a [free Developer Edition Org](https://developer.salesforce.com/signup) or a [Trailhead Playground](https://trailhead.salesforce.com/).

Make sure to start from a brand-new environment to avoid conflicts with previous work you may have done.

1. Clone this repository:

   ```
   git clone https://github.com/mmousiou/lwcWinter23Demo.git
   ```

1. Authorize your Trailhead Playground or Developer org and provide it with an alias (**mydevorg** in the command below):

   ```
   sfdx auth:web:login -s -a mydevorg
   ```

1. Run this command in a terminal to deploy the app.

   ```
   sfdx force:source:deploy -p force-app
   ```

1. Assign the `Winter_Release_23` permission set to the default user:

   ```
   sfdx force:user:permset:assign -n Winter_Release_23
   ```

1. Import some sample data.

   ```
   sfdx force:data:tree:import -p ./data/data-plan.json
   ```

1. If your org isn't already open, open it now:

   ```
   sfdx force:org:open -u mydevorg
   ```

1. In App Launcher, select the **Winter '23 release notes** app.

## Optional Installation Instructions

Run this command in a terminal [npm](https://docs.npmjs.com/)

```
npm install
```

### Code formatting

[Prettier](https://prettier.io/) is a code formatter used to ensure consistent formatting across your code base. To use Prettier with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the Visual Studio Code Marketplace. The [.prettierignore](/.prettierignore) and [.prettierrc](/.prettierrc) files are provided as part of this repository to control the behavior of the Prettier formatter.

> **Warning**
> The current Apex Prettier plugin version requires that you install Java 11 or above.

### Code linting

[ESLint](https://eslint.org/) is a popular JavaScript linting tool used to identify stylistic errors and erroneous constructs. To use ESLint with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) from the Visual Studio Code Marketplace. The [.eslintignore](/.eslintignore) file is provided as part of this repository to exclude specific files from the linting process in the context of Lightning Web Components development.

## Info

> authors: Bitzenis Stefanos, Mousiou Maria
