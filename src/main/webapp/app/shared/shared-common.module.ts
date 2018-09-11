import { NgModule } from '@angular/core';

import { JhipsterphpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterphpSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterphpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterphpSharedCommonModule {}
