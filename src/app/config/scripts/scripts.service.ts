import { Injectable } from '@angular/core';

const myScripts = [
  { name: 'app', src: '/assets/scripts/app.js'},
  { name: 'lazyapp', src: '/assets/scripts/lazyapp.js'},
  { name: 'masonry', src: '/assets/scripts/masonry.min.js'},
];

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private scripts: any = {};

  constructor() {
    myScripts.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  // load a single or multiple scripts
  load(...scripts: string[]) {
    const promises: any[] = [];
    // push the returned promise of each loadScript call
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    // return promise.all that resolves when all promises are resolved
    return Promise.all(promises);
  }

  // load the script
  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        // cross browser handling of onLoaded event
        // @ts-ignore
        if (script.readyState) {  // IE
        // @ts-ignore
          script.onreadystatechange = () => {
        // @ts-ignore
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
        // @ts-ignore
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}
