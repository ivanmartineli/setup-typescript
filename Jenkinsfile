pipeline{
    agent any
    tools {
        nodejs "node"
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
                sh 'npm install'
            }
        }             
    }
}
