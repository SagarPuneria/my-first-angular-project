import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home2Component } from './home2.compnent';
import { Home6Component } from './home6/home6.component';
import { Home7Component } from './components/home7/home7.component';
import { Home8Component } from './components/home8/home8.component';
import { Home9Component } from './components/home9/home9.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { StockRecordsComponent } from './components/stock-records/stock-records.component';
import { HighlightDirective } from './common/highlight.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { StockRecords1Component } from './components/stock-records1/stock-records1.component';
import { StockRecords2Component } from './components/stock-records2/stock-records2.component';
import { StockRecords3Component } from './components/stock-records3/stock-records3.component';
import { StockRecords4Component } from './components/stock-records4/stock-records4.component';
import { HighlightDay4Directive } from './common/highlight-day4.directive';
import { SearchPipe } from './shared/search.pipe';
import { ParenthesisPipe } from './shared/parenthesis.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IndiaNewsComponent } from './components/india-news/india-news.component';
import { UsNewsComponent } from './components/us-news/us-news.component';
import { NewsComponent } from './components/news/news.component';
import { StockRecordsDay6Component } from './components/stock-records-day6/stock-records-day6.component'

@NgModule({
  declarations: [
    AppComponent,
    Home2Component,
    Home6Component,
    Home7Component,
    Home8Component,
    Home9Component,
    EmployeeComponent,
    UserComponent,
    UserInfoComponent,
    UserDetailsComponent,
    StockRecordsComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    StockRecords1Component,
    StockRecords2Component,
    StockRecords3Component,
    StockRecords4Component,
    HighlightDay4Directive,
    SearchPipe,
    ParenthesisPipe,
    IndiaNewsComponent,
    UsNewsComponent,
    NewsComponent,
    StockRecordsDay6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
