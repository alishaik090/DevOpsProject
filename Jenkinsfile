pipeline {
    agent any
    environment {
        IMAGE = "react-ecommerce"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'c42f8177-365a-4988-9cd1-d175ce979ce4',
                    url: 'https://github.com/alishaik090/DevOpsProject.git'
            }
        }

        stage('Install and Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t %IMAGE% .'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker stop react-ecommerce || exit 0
                docker rm react-ecommerce || exit 0
                docker run -d -p 8080:80 --name react-ecommerce %IMAGE%
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build Successful!'
        }
        failure {
            echo '❌ Build Failed! Please check logs.'
        }
    }
}
