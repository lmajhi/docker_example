**Docker Example**

This repo demostrates as sample use case of docker spinning up a node express server.

Node App:
    A basic express server which listens to port 9999 for incoming request.
    Returns "Hello from lightweight docker application" when request is recieved.

**Steps to make this example work**

1. Clone the repo.

2. To build a docker image
    * `docker build -t nodeapp .`

3. Spin up container from the above image created(nodeapp)
    * `docker run --name nodeapp_instance -p 9999:9999 nodeapp`

4. Goto web-browser localhost:9999 
    * Response should be "Hello from lightweight docker application"

5. Spin up multiple containers
    * `docker run --name nodeapp_instance2 -p 8000:9999 nodeapp`
    * `docker run --name nodeapp_instance3 -p 8001:9999 nodeapp`

6. Stop the container
    * `docker stop nodeapp_instance`
    * `docker rm nodeapp_instance`