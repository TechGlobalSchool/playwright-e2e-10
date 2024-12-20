import { BasePage } from "./BasePage";
import { type Locator, type Page } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginMesage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login_btn");
    this.loginMesage = page.locator("#success_lgn");
    this.errorMessage = page.locator("#error_message");
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async userLogin(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.clickLoginButton()
  }
}
