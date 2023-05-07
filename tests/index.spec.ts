import { test, expect } from "@playwright/test";

test("index renders", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot();
});
