# Weird Problem

An error in Hardhat network when trying to send too many data as input parameters when using
hardhat network. If ganache network is used instead, the problem disappears

Steps:
  ```
  $ yarn test-hardhat   # Test fails
  $ yarn run-ganache    # Start ganache-cli
  $ yarn test-ganache   # Test passes
  ```