pipeline{
    agent any
    tools {
        nodejs '14.17.1'
    }
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/ivanmartineli/setup-typescript.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                bat 'npm install'
            }
        }             
    }
}
