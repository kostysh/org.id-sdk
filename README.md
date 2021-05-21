# org.id-sdk
Core Javascript tools for the ORGiD ecosystem

## Javascript SDK

| Package  | Description  |
|---|---|
| @windingtree/org.id-core | Core ORGiD library |
| [@windingtree/org.id-utils](packages/shared/README.md) | Shared ORGiD utilities |
| @windingtree/org.id-auth | ORGiD authentication library |
| [@windingtree/org.id-vc](packages/vc/README.md) | ORGiD verifiable credentials library |
| @windingtree/org.json-utils  | ORG.JSON utilities |

## Maintenance

### Bootstrap

When you adding dependencies to your packages it is recommended to run `bootstrap` command from the root of the repository. This command will update packages dependencies.

```bash
npm run bootstrap
```

### Testing and linting

```bash
npm run lint
npm run test
```

### Packages release

To make a release of the package run the following command.

```bash
./scripts/release <GITHUB_PERSONAL_ACCESS_TOKEN> <PACKAGE_NAME>
```

Do not forget to set a proper version number of the package you want to release in the package.json of the selected package.

To get an access token please use this [guide](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
