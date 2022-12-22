# yarnpkg - Fast, reliable and secure npm alternative

## SYNOPSIS
yarnpkg command [package]@[version]

## DESCRIPTION
Fast: Yarnpkg caches every package it downloads so it never needs to
again. It also parallelizes operations to maximize resource utilization
so install times are faster than ever.

Reliable: Using a detailed, but concise, lockfile format, and a
deterministic algorithm for installs, Yarnpkg is able to guarantee that
an install that worked on one system will work exactly the same way on
any other system.

Secure: Yarnpkg uses checksums to verify the integrity of every
installed package before its code is executed.

## EXAMPLES
Here are some of the most common commands you’ll need.

Starting a new project
```
yarn init
```

Adding a dependency
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

Updating a dependency
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

Removing a dependency
```
yarn remove [package]
```

Installing all the dependencies of project
```
yarn
```

or
```
yarn install
```

## COMMANDS
Yarn provides a rich set of command-line commands to help you with various aspects of your Yarn package, including installation, administration, publishing, etc.

Some of the more popular commands are:

- `yarn add`: adds a package to use in your current package.

- `yarn init`: initializes the development of a package.

- `yarn install`: installs all the dependencies defined in a package.json file.

- `yarn publish`: publishes a package to a package manager.

- `yarn remove`: removes an unused package from your current package.

### Default Command

Running yarn with no command will run yarn install, passing through any provided flags.

###Concurrency and --mutex

When running multiple instances of yarn as the same user on the same server, you can ensure only one instance runs at any given time (and avoid conflicts) by passing the global flag --mutex followed by file or network.

When using file Yarn will write/read a mutex file .yarn-single-instance in the current working directory by default. You can also specify an alternate or global filename.
```
--mutex file
--mutex file:/tmp/.yarn-mutex
```
When using network Yarn will create a server at port 31997 by default. You can also specify an alternate port.
```
--mutex network
--mutex network:30330
```

## AUTHOR
The Yarn Contributors

## COPYRIGHT
This manual page was written by Paolo Greppi `<paolo.greppi@libpf.com>` for the Debian project (and may be used by others), based on material from the yarnpkg project itself.
