import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, BaseRouteReuseStrategy } from "@angular/router";

@Injectable()
export class TestRouteReuseStrategy extends RouteReuseStrategy {

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldDetach');
    console.log(route);
    return false;
  }
  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.log('store');
    console.log(route);
    console.log(handle);
  }
  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach');
    console.log(route);
    return false;
  }
  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log('retrieve');
    console.log(route);
    return null;
  }
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('shouldReuseRoute');
    console.log(curr);
    console.log(future);
    console.log(future.routeConfig?.path);
    return future.routeConfig === curr.routeConfig;
  }
}
// @Injectable()
// export class TestRouteReuseStrategy extends BaseRouteReuseStrategy {}
