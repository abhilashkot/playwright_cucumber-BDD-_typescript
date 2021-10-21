

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Given, When } from '@cucumber/cucumber';
//import { ICustomWorld } from '../support/custom-world';

Given('Go to the reporting website', async function () {
  const { page } = this;

  await page?.goto('http://localhost:5000/reportworkflowdemonstrator/index.html#/rwd/login/FHIRREST');
  //await page?.waitForSelector('nav >> a >> text="Playwright"');
  await page?.screenshot({ path: 'output/${playwright.chromium.name()}.png' });
  await page?.waitForSelector('[data-automationid="AnonymousLoginCheckBox"] [name="basic"]');
  await page?.click('[data-automationid="AnonymousLoginCheckBox"] [name="basic"]');
  //await page?.fill('#idToken2', 'Casio@123');
  await page?.click('.pt-input[name="appMode"]');
  await page?.dblclick('.pt-expander-content > ul');
  await page?.click('dls-list-item:nth-of-type(2) > label');
  await page?.click('app-mode-selector .pt-primary');
  await page?.click('[data-automationid="LoginButton"] > .pt-layout-container');
  await page?.waitForSelector('[data-automationid="id_te"]');
  await page?.click('[data-automationid="id_te"]');
  var frame = await page?.frame(
    {name: "templateeditorriframe"}
  )
  await frame?.click('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(5) td:nth-of-type(1)')

  await frame?.click('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(5) td:nth-of-type(4)')

  await frame?.click('[data-automationid="label_rename_ID"]')

  await frame?.fill('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(5) td:nth-of-type(1) input', 'test i123');

  await page?.keyboard.press('Enter');

  await page?.screenshot({ path: 'output/${playwright.chromium.name()}.png' });

  //await frame?.fill('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(3) td:nth-of-type(1) inpt', 'test 123');

});


When('Click on org drop down', async function () {
  const page = this.page!;
  await page.keyboard.press('Enter');
  //await page.close();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //const page = this.page!;
  //const current = await page.getAttribute('html', 'data-theme');
  //if (current !== mode) {
  //  await page.click('.navbar >> .react-toggle');
  // }
  // await page.waitForSelector(`html[data-theme=${mode}]`);
});


Given('Go to the playwright website', async function () {
  const { page } = this;
  await page?.goto('https://dsbapp-dsb-preview.eu-west.philips-healthsuite.com/');

  //await page?.goto('http://localhost:5000/reportworkflowdemonstrator/index.html#/rwd/login/FHIRREST');
  await page?.screenshot({ path: 'output/${playwright.chromium.name()}.png' });
  await page?.waitForSelector('[data-automationid="AnonymousLoginCheckBox"] [name="basic"]');
  await page?.click('[data-automationid="AnonymousLoginCheckBox"] [name="basic"]');
  await page?.click('.pt-input[name="appMode"]');
  await page?.dblclick('.pt-expander-content > ul');
  await page?.click('dls-list-item:nth-of-type(2) > label');
  await page?.click('app-mode-selector .pt-primary');
  await page?.click('[data-automationid="LoginButton"] > .pt-layout-container');
  await page?.waitForSelector('[data-automationid="id_te"]');
  await page?.click('[data-automationid="id_te"]');
//switch to frame 
  var frame = await page?.frame(
    {name: "templateeditorriframe"}
  )
  await frame?.click('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(3) td:nth-of-type(1)')// select the template 
  await frame?.click('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(3) td:nth-of-type(4)')//click in 3 dots
  await frame?.click('[data-automationid="label_rename_ID"]')//select rename option 
  await frame?.fill('[class="ui-datatable-data ui-widget-content"] tr:nth-of-type(3) td:nth-of-type(1) input', 'test madatheni');// enter new name
  await page?.keyboard.press('Enter');//press enter
});


Given('Go to the DSB website', async function () {
  const { page } = this;
  await page?.goto('https://dsbapp-dsb-preview.eu-west.philips-healthsuite.com/');
  //await page?.waitForSelector('nav >> a >> text="Playwright"');
  await page?.screenshot({ path: 'output/${playwright.chromium.name()}.png' });
  await page?.waitForSelector('#idToken1');
  await page?.fill('#idToken1', 'abhilash.kotabagi@philips.com');
  await page?.fill('#idToken2', 'Casio@123');
  await page?.click('#loginButton_0');
  await page?.waitForSelector('.jss16.MuiGrid-root .placeholder');
});