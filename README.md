# mb.io WebdriverIO Cucumber JavaScript Framework

This project is a JavaScript-only WebdriverIO framework using Cucumber feature files, step definitions, page objects, Jenkins CI, and Allure reporting for the public `https://mb.io/en-AE` site.

## Stack
- WebdriverIO
- Cucumber
- JavaScript
- Chromedriver service
- Page Object Model
- Allure reporter

## Structure
```text
mbio-wdio-cucumber-js/
  features/
    *.feature
  step-definitions/
    *.steps.js
  test/
    data/
    pageobjects/
    utils/
  allure-results/
  wdio.conf.js
  Jenkinsfile
  package.json
```

## Install
```bash
npm install
```

## Run tests
```bash
npm test
```

## Generate Allure report locally
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Cucumber design
- Feature files hold business-readable scenarios.
- Step definitions connect Gherkin steps to automation logic.
- Page objects store selectors and reusable page actions.

## Allure setup
- Allure results are written to `allure-results/`.
- Failed steps capture screenshots for report attachment.
- `useCucumberStepReporter: true` keeps report hierarchy aligned to Cucumber scenarios.

## Jenkins CI
This project includes:
- `Jenkinsfile` for declarative pipeline execution.
- Allure result generation and HTML report build in Jenkins.
- Post-build artifact archiving for Allure outputs.

### Jenkins prerequisites
- Jenkins with NodeJS plugin configured.
- A Node installation named `node-20` in Jenkins global tools.
- Chrome/Chromium available on the Jenkins agent.
- Java installed on the Jenkins agent for Allure CLI.
