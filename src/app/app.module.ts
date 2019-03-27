import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AppComponent } from './app.component';
import { RestService } from './shared/services/rest.service';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';
import { RestTableComponent } from './components/resttable/resttable.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish
    }),
    NgbModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    RestTableComponent,
    ModalComponent,
    SearchPipe
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
