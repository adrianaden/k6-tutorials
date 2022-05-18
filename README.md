# Installation
## backend
````
mvn install
````

## k6 
````
brew install k6
````
more detail about [k6 installation](https://k6.io/docs/getting-started/installation/)


# Running
## backend
````
mvn spring-boot:run
````

## k6
````
k6 run ./k6-loadtest/{your_script}.js
````
or you can also run listed regression test
```
./k6-loadtest/regression_loadtest.sh
```