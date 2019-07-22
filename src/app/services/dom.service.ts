import {
  Injectable, Injector, ComponentFactoryResolver,
  EmbeddedViewRef, ApplicationRef
} from '@angular/core';

@Injectable()
export class DomService {
  private childComponentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public appendComponentTo( parentId: string, child: any ) {
    this.childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    this.appRef.attachView(this.childComponentRef.hostView);

    const childDomElem = (this.childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.getElementById(parentId).appendChild(childDomElem);
  }

  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }
}
