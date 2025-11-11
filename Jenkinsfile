pipeline {
  agent any
  environment {
    IMAGE = "react-ecommerce"
  } 

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/alishaik090/DevOpsProject.git'
      }
    }

    stage('Install and Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t $IMAGE .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker stop react-ecommerce || true
          docker rm react-ecommerce || true
          docker run -d -p 8080:80 --name react-ecommerce $IMAGE
        '''
      }
    }
  }

  post {
    success {
      mail to: 'youremail@gmail.com',
           subject: '✅ Jenkins Build Successful',
           body: 'Your React app has been deployed successfully!'
    }
    failure {
      mail to: 'youremail@gmail.com',
           subject: '❌ Jenkins Build Failed',
           body: 'Check logs at: ${env.BUILD_URL}'
    }
  }
}
