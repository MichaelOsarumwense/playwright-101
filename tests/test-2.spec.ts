import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://personal-media.vercel.app/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('yello@maik.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('cineidd');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: username
    - textbox "email": yello@maik.com
    - text: "* password"
    - textbox "password"
    - text: "*"
    - button "Login"
    - list:
      - listitem:
        - link "Reset Password?":
          - /url: /reset-Password
      - listitem:
        - link " Sign Up":
          - /url: /register
      - listitem
    - list:
      - listitem
    `);
  await expect(page.getByRole('alert')).toContainText('Username or Password Incorrect');
  
});