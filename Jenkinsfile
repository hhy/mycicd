#!/usr/bin/env groovy
pipeline {
  agent {dockerfile true}
  /*
  environment {
    // NODE_ENV_PATH = './venv'
    // NODE_VERSION = '6.11.1'
  }*/
  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
      }
    }

    stage('Install dependencies') {
      steps {
        // sh '. ./venv/bin/activate && npm install'
        sh 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        // sh '. ./node_env/bin/activate && npm test'
        sh 'npm test'
      }
    }
    stage('integration test') {
      agent { dockerfile true }
      steps {
        sh 'node --version'
      }
    }
  }
  post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }
}