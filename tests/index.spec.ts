import { test, expect } from "@playwright/test";

test("index renders", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(3000); // simplest way to assert that the 3d model loaded
  await expect(page).toHaveScreenshot();
});
