node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {

        def customImage = docker.build("docker-hub-image")

        /* Push the container to the custom Registry  */
        customImage.push()
    }
}