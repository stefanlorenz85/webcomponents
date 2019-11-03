import {
    CUSTOM_ELEMENTS_SCHEMA,
    Injector,
    NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    BlogModule,
    PostingsComponent,
} from './blog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
  ],
  // toggle this for webcomponents and enabled bootstrap
  entryComponents: [
    PostingsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {

  constructor(injector: Injector) {
    const el = createCustomElement(PostingsComponent, { injector });
    customElements.define('postings-element', el);
  }
  ngDoBootstrap() { }
}
