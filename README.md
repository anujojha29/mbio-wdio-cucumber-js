# mb.io WebdriverIO Cucumber JavaScript Framework


This project is a JavaScript-only WebdriverIO framework using Cucumber feature files, step definitions, page objects, Jenkins CI, and Allure reporting for the public `https://mb.io/en-AE` site.

## Framework Design Decisions

### Architecture & Framework Choice
**Decision**: Use WebdriverIO v9 + Cucumber.js for BDD-style automation  
**Rationale**: 
- BDD approach provides readable test scenarios for non-technical stakeholders
- Cucumber allows test code reuse across features
- WebdriverIO is actively maintained and has good cross-browser support
- JavaScript aligns with web development practices


### Test Execution Model
**Decision**: Run tests on 2 instances in parallel (maxInstances: 2)  
**Rationale**:
- Chrome and Edge tests run simultaneously to reduce execution time
- Parallel execution improves CI/CD feedback speed
---


### Test Data Strategy
**Decision**: Test data embedded in .feature files (Gherkin scenarios)  
**Rationale**:
- Keeps test data close to test logic
- No external dependencies on databases or APIs
- Easy version control with git
- Readable for business stakeholders
---

### Reporting & Artifacts
**Decision**: Allure reporter with screenshot capture on failures  
**Rationale**:
- Allure provides trend analysis and historical data
- Screenshots on failures aid debugging without re-running tests
- HTML reports are shareable without special tools
- Reports stored locally in allure-results/

---

### Test Naming Convention
**Decision**: Use @smoke and @regression tags for test categorization  
**Rationale**:
- Smoke tests can be executed for quick feedback
- Regression tests can be executed nightly

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
