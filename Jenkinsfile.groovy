pipeline {
  agent any
  environment {
    IMAGE_NAME = "react-ecommerce"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/yourusername/react-ecommerce-devops.git'
      }
    }

    stage('Install & Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker stop react-ecommerce || true
          docker rm react-ecommerce || true
          docker run -d -p 8080:80 --name react-ecommerce $IMAGE_NAME
        '''
      }
    }
  }

  post {
    success {
      mail to: 'youremail@example.com',
           subject: '✅ React E-commerce Build Successful',
           body: 'Website deployed successfully on port 8080!'
    }
    failure {
      mail to: 'youremail@example.com',
           subject: '❌ Build Failed',
           body: 'Please check Jenkins logs.'
    }
  }
}
