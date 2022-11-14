#!/usr/bin/env groovy
pipeline {
  agent any
  /*
  environment {
    // NODE_ENV_PATH = './venv'
    // NODE_VERSION = '6.11.1'
  }*/
  stages {
    stage('Pre-cleanup') {
      steps {
        // sh 'rm -rf ./venv'
        sh 'rm -rf ./node_modules'
        // sh 'rm -rf ./bower_components'
      }
    }
    stage('Make venv') {
      steps {
        // sh 'npm i'
      }
    }
    stage('Install dependencies') {
      steps {
        // sh '. ./venv/bin/activate && npm install'
        sh 'npm i'
      }
    }
    stage('Run tests') {
      steps {
        // sh '. ./node_env/bin/activate && npm test'
        sh 'npm test'
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