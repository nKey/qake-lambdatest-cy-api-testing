pipeline {
    agent any
    tools {nodejs "nodejs"}
    // parameters{
    //     // string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description: "Enter the script path that you want to execute")

    // }
    options{
        ansiColor('xterm')
    }
    stages{
        stage("Building"){
            steps{
                echo "Building the application"
            }  
        }
        stage("Testing"){
            steps{
                sh "npm install"
                sh "npm install -g lambdatest-cypress-cli"
                sh "lambdatest-cypress run"
            }
        }
        stage("Deploying"){
            steps{
                echo "Deploying the application"
            }
            
        }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}