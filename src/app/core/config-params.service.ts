import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configurarParametros(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', config.pagina.toString());
    httpParams = httpParams.set('_limit', config.limite.toString());
    
    if (config.pesquisa) {
      httpParams = httpParams.set('q', config.pesquisa);
    }
    
    if (config.campo) {
      httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString());
    }

    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
