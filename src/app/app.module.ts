import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromInputComponent } from './components/from-input/from-input.component';
import { DistanceUnitSelectorComponent } from './components/distance-unit-selector/distance-unit-selector.component';
import { ToOutputComponent } from './components/to-output/to-output.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FromUnitSelectorComponent } from './components/from-unit-selector/from-unit-selector.component';
import { ToUnitSelectorComponent } from './components/to-unit-selector/to-unit-selector.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { SettingsLanguageSelectorComponent } from './components/settings-language-selector/settings-language-selector.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ReportIssuesRedirectComponent } from './components/report-issues-redirect/report-issues-redirect.component';
import { RepositoryButtonComponent } from './components/repository-button/repository-button.component';
import { WhoAreWeButtonComponent } from './components/who-are-we-button/who-are-we-button.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { TitleComponent } from './components/title/title.component';
import { ArrowDownComponent } from './components/arrow-down/arrow-down.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';
import { RepositoryRedirectComponent } from './components/repository-redirect/repository-redirect.component';
import { WhoAreWeCardComponent } from './components/who-are-we-card/who-are-we-card.component';
import { AlejandroRedirectComponent } from './components/alejandro-redirect/alejandro-redirect.component';
import { GonzaloRedirectComponent } from './components/gonzalo-redirect/gonzalo-redirect.component';
import { RepositoryIconComponent } from './components/repository-icon/repository-icon.component';
import { WhoAreWeIconComponent } from './components/who-are-we-icon/who-are-we-icon.component';
import { HomeIconComponent } from './components/home-icon/home-icon.component';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { WhoAreWeRedirectComponent } from './components/footer/who-are-we/who-are-we-redirect/who-are-we-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    FromInputComponent,
    DistanceUnitSelectorComponent,
    ToOutputComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FromUnitSelectorComponent,
    ToUnitSelectorComponent,
    MainCardComponent,
    SettingsButtonComponent,
    SettingsMenuComponent,
    SettingsLanguageSelectorComponent,
    LanguageSelectorComponent,
    ThemeSelectorComponent,
    ReportIssuesRedirectComponent,
    RepositoryButtonComponent,
    WhoAreWeButtonComponent,
    HomeButtonComponent,
    ActionButtonComponent,
    TitleComponent,
    ArrowDownComponent,
    RepositoryCardComponent,
    RepositoryRedirectComponent,
    WhoAreWeCardComponent,
    AlejandroRedirectComponent,
    GonzaloRedirectComponent,
    RepositoryIconComponent,
    WhoAreWeIconComponent,
    HomeIconComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    WhoAreWeRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
