import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Configuration {
  public static apiHost: string = environment.apiHost;
  public static apiPort: string = environment.apiPort;
}
