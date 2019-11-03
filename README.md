# Webcomponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Compile Wepcomponent

Run `ng build --prod`.  Ensure that `app.module.ts` bootstrap parameter list is empty and the entryComponents parameeter is set and filled with the components you want to use as webcomponent.
Also set schema to `CUSTOM_ELEMENTS_SCHEMA`

After compiling successfully use `node elements-build.js` to bundle all Javascript files.


## See example
Open example `${project}/elements/index.html`
