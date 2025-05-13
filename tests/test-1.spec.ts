import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://personal-media.vercel.app/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.locator('[name="email"]').fill('prod@prod.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('adminuser');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind now?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind now?' }).fill('Hello Michael here again');
  await page.getByRole('button', { name: ' Post' }).click();
  await page.locator('#editButton').first().click();
  await page.getByRole('textbox', { name: 'Update post' }).click();
  await page.getByRole('textbox', { name: 'Update post' }).fill('Hello Michael here');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#delete').first().click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.locator('div:nth-child(3) > .w3-container > #editButton').click();
  await page.getByRole('textbox', { name: 'Update post' }).click();
  await page.getByRole('textbox', { name: 'Update post' }).fill('John Doe Sir');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.getByText('Private media lets you share')).toBeVisible();
  await page.getByText('Private media lets you share').click();
});