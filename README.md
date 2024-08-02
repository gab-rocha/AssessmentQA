# Simple Playwright Framework

## Description

This repository contains a solution for the assessment at the QA Learning Platform, utilizing a Playwright-based framework for testing.

First of all, I'd like to thank you for this opportunity to take on this test.
I tried to keep the project as simple as possible without adding excessive complexity, using modularization only where it makes sense.

- The project uses the Page Objects model.
- It runs in the pipeline for 2 browsers.
- It can be executed manually using GitHub Actions.
- The installation and execution process is straightforward.

## Using

- [Node](https://nodejs.org/en/download/current)
- [npm](https://www.npmjs.com/package/npm)
- [Playwright](https://playwright.dev/)

### Project Structure

    .
    ├── .github
    │   ├── workflows                                     
    │   │   └── **.yml           # CI Configuration File
    ├── playwright-report
    │   └── **.html              # Playwright report model
    ├── src
    │   ├── page-objects                                     
    │   │   └── **.ts            # Page Objects Files
    │   ├── test-data                                     
    │   │   └── **.json          # Test Data Files   
    │   ├── utils                                     
    │   │   └── **.ts            # Utilities and generic models
    ├── tests
    │   ├── API 
    |   │   └── **.spec.ts       # API Testing Files 
    │   ├── Web 
    |   │   ├── e2e                                     
    |   │   │   └── **.spec.ts       # E2E Test Spec Files
    |   │   ├── features                                     
    |   │   │   └── **.spec.ts       # Features Test Spec Files
    |   │   ├── smoke-test                                     
    |   │   │   └── **.spec.ts       # Smoke Test Spec Files
    └── ...

## Installation

1. Clone this project into your machine and navigate to the project root folder:

```bash
git clone https://github.com
cd your-repo
```

2.Install the project dependencies:

```bash
npm ci
```

3.Install the default browsers for Playwright:

```bash
npx playwright install
```

## Commands

**Run tests headless** - runs tests headless with all configured browsers:

```bash
npx playwright test
```

**Run tests on specific browser (headless)** - runs tests headless with a specific browser:

```bash
npx playwright test --project <browser-name>
```

**Run a set of tests (headless)** - runs tests headless a set of test files from a specified directory:

```bash
npx playwright test <tests/folder-name>
```

**Run tests headed** - runs tests in headed mode:

```bash
npx playwright test --headed
```

## Author

- [@gab-rocha](https://github.com/gab-rocha)
