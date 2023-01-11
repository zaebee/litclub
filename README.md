# Golang Gin + Angular 6 Web Application
[![Build Status](https://travis-ci.com/app8izer/go-gin-ng6-starter.svg?branch=master)](https://travis-ci.com/app8izer/go-gin-ng6-starter)
## Technologies
Starter project template using the following libraries/frameworks:

- [Gin Gonic](https://gin-gonic.github.io/gin/)
- [Govendor](https://github.com/kardianos/govendor) 
- [Angular](https://angular.io/)
- [Protocol Buffers](https://developers.google.com/protocol-buffers/)
- [GORM](http://gorm.io/)
- [Socket.io](https://github.com/googollee/go-socket.io/)
- [JWT](https://github.com/appleboy/gin-jwt)

Services for CI & CD:
- [Travis CI](https://travis-ci.com/)
- [Heroku CD](https://www.heroku.com/)

## Get project from Github

To get the project, you need to install Go and set your Go workspace (i.e. [`$GOPATH`](https://golang.org/doc/code.html)) first.

```sh
$ git clone https://github.com/zaebee/litclub.git
```

## Install Golang Dependencies via govendor

If not yet installed, install govendor via:

```sh
$ go get -u github.com/kardianos/govendor
```

To install the golang dependencies, run

```sh
$ go mod vendor
```

in root of project.

## Install Angular Dependencies via npm/yarn

If not yet installed, install node + npm/yarn, e.g. for Mac OS run

```sh
$ brew install npm
```
which will also install Node.js if it is not already installed.

To install the Angular dependencies, run

```sh
$ cd ./frontend
$ npm install
```

in root of project.

## Install Protobuf Compiler (protoc)

If not yet installed, [install protoc](http://google.github.io/proto-lens/installing-protoc.html), e.g. for Mac OS, run

```sh
$ brew install protobuf
```

and for the Go protocol buffers plugin:

```sh
$ go get -u github.com/golang/protobuf/protoc-gen-go
$ go get -u github.com/favadi/protoc-go-inject-tag
```

The compiler plugin `protoc-gen-go` will be installed in `$GOBIN`, defaulting to `$GOPATH/bin`. 
It must be in your `$PATH` for the protocol compiler protoc to find it.

Assuming you have run `npm install` before (see above), which installs the `protobuf.js` dependency continue with the compilation as follows.
To compile the schema to Go and Typescript sources run

```sh
$ cd ./proto
$ sh ./compile_proto.sh
```

in root of project.

## Development Setup

To start the application with PostgreSQL database, Golang backend, and Angular frontend, the following steps are required.

### Database: PostgreSQL

Run 

```sh
$ docker-compose -f docker-compose.dev.yml
```

in root of project directory.
This will fire up a database listening on port `5432` of your `localhost`.  

### Backend: Gin Gonic

To start the backend server on port `8080` run 

```sh
$ go run backend/main.go
```

in root of project directory.

### Frontend: Angular

To start the frontend server on port `4200` run 

```sh
$ cd ./frontend
$ npm run start
```

in root of project directory.
