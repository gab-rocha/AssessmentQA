import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /** Maximum time expect() should wait for the condition to be met.*/
    timeout: 20000
  },

  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: 'test-results',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    baseURL: 'https://cloudacademy.com/',

    testIdAttribute: 'data-cy',
  },


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
