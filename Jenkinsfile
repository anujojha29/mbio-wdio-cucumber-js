pipeline {
  agent any

  tools {
    nodejs 'node-20'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Run UI Tests') {
      steps {
        bat 'npm test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'reports/junit/*.xml'
      archiveArtifacts artifacts: 'reports/**/*,allure-results/**/*,allure-report/**/*', allowEmptyArchive: true
    }
  }
}
