# Contributing

### Commit Message Guidelines

The commit message is used to both inform the reader and automate the release process using semantic-release. To this end, we follow the [Conventional Commits](https://conventionalcommits.org/#conventional-commits-specification) specification.

#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```text
<type>[(scope)]: <description>

[body]

[footer]
```

#### Examples

##### Feature Commit Message Example

```text
feat(travis-ci): add npm caching

Set cache to 'npm'
```

##### Breaking Change Commit Message Example

```text
perf(tsconfig): change target to es6

Change ECMAScript target to es6 (es2015)

BREAKING CHANGE:

Change ECMAScript target from es5 to es6 (es2015)
```

#### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code \(white-space, formatting, missing semi-colons, etc\)
* **test**: Adding missing tests or correcting existing tests
* **config**: Changes to our configuration files and scripts \(Git, Travis CI, etc.\)
* **docs**: Documentation only changes

**Scope**

The scope must:

* be a single word noun
* be surrounded with parentheses
* use the name of the part that was altered in the change
