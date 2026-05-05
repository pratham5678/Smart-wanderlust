pipeline {
    agent any

    stages {
        stage('Run Project') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
