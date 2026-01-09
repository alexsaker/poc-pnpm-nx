# `POC PNPM NX`

## Overview

This repository is a proof of concept (POC) for using `PNPM` as a package manager in combination with `Nx` as a monorepo management tool. It demonstrates how to set up a monorepo structure that leverages the strengths of both tools to manage multiple packages efficiently.

The monorepo code strategy provides several key advantages:

- **Code Sharing**: Centralized shared utilities and types across multiple packages
- **Consistency**: Unified dependency management, linting, and formatting rules
- **Developer Experience**: Single repository to clone, simplified CI/CD pipelines
- **Atomic Changes**: Cross-package refactoring and updates in a single commit
- **Workspace Management**: Deno's native workspace support enables seamless package
  interdependencies

## Project Structure

This monorepo is organized into two main workspace types:

```
poc-pnpm-nx/
├── apps/                    # Application projects
│   └── api/                 # API application
│       ├── src/             # Source code
│       ├── __tests__/       # Test files
│       ├── package.json     # Package dependencies
│       ├── project.json     # Nx project configuration
│       ├── tsconfig.json    # TypeScript configuration
│       └── vitest.config.ts # Vitest test configuration
│
├── packages/                # Shared library packages
│   └── ui/                  # UI component library
│       ├── src/             # Source code and tests
│       ├── package.json     # Package dependencies
│       ├── project.json     # Nx project configuration
│       ├── tsconfig.json    # TypeScript configuration
│       └── vitest.config.ts # Vitest test configuration
│
├── eslint.config.mjs        # ESLint configuration
├── nx.json                  # Nx workspace configuration
├── package.json             # Root package dependencies
├── pnpm-lock.yaml           # PNPM lock file
├── pnpm-workspace.yaml      # PNPM workspace definition
├── tsconfig.base.json       # Base TypeScript configuration
└── tsconfig.json            # Root TypeScript configuration
```

### Workspace Layout

- **apps/**: Contains deployable applications that consume shared packages
- **packages/**: Contains reusable libraries and shared code that can be imported by apps

Each workspace has its own:

- `package.json` for managing dependencies
- `project.json` for Nx-specific build and test targets
- `tsconfig.json` extending the base configuration
- `vitest.config.ts` for unit testing setup

## Generate a library

```sh
npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
npx nx build pkg1
```

To run any task with Nx use:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
