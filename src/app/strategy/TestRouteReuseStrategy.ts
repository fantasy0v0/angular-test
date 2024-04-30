import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, BaseRouteReuseStrategy, Route } from "@angular/router";

@Injectable()
export class TestRouteReuseStrategy extends RouteReuseStrategy {

  private cache: Map<Route, DetachedRouteHandle | null> = new Map();

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldDetach');
    console.log(route);
    return null != route.routeConfig;
  }

  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.log('store');
    console.log(route);
    console.log(handle);
    if (route.routeConfig) {
      this.cache.set(route.routeConfig, handle);
    }
  }

  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach');
    console.log(route);
    if (route.routeConfig && this.cache.has(route.routeConfig)) {
      return true;
    }
    return false;
  }

  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log('retrieve');
    console.log(route);
    if (null == route.routeConfig || !this.cache.has(route.routeConfig)) {
      return null;
    }
    return this.cache.get(route.routeConfig) as DetachedRouteHandle | null;
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
