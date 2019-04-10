# PlanGrid Code Test

#### Installing Depencies
`make install`

#### Running the Server

###### Regular Mode
The basic run is: `make prd`.  This will run the server with DEBUG mode off and no auto restart.  There is also `make dev`, which uses `nodemon` to restart the server.  I used this while I was developing it.

###### Debug Mode
You can also run with the DEBUG flag on (an environment variable) with `make debug`. This will show the log lines as indicated in the code test description.

#### Running the curl scripts
Once you'v got the server running, you can run the curl requests against it.  They each have their own make targets, but you can run them all with `make scripts`.

#### Running the mock HTTP tests
The mocked HTTP tests are run using mocha.  Run the tests with `make test`.  This has the `--watch` flag on so you'll need to `control+c` out of that process to stop it.
