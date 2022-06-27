import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';

import { CoreConfigService } from '@core/services/config.service';


@Component({
  selector: 'app-taxpayer-registration',
  templateUrl: './taxpayer-registration.component.html',
  styleUrls: ['./taxpayer-registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaxpayerRegistrationComponent implements OnInit {
  
  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    relacional: false,
    concurrencia : false,
    protocolo: '',
    ruta : '',
    retorna : false,
    migrar : false,
    modulo : '',
    valores : {},
    coleccion : '',
    http : 0,
    https : 0,
    consumidores : '',
    puertohttp : 0,
    puertohttps : 0,
    driver : '',
    query : '',
    metodo : '',
    tipo : '',
    prioridad : '',
    entorno: '',
    logs : false
  };

      // public
      public data: any;
      public selectedOption = 10;
      public ColumnMode = ColumnMode;
      public selectStatus: any = [
        { name: 'Todos', value: '' },
        { name: 'Activo', value: 'Activo' },
        { name: 'Inactivo', value: 'Inactivo' },
      ];
    
      public selectedStatus = [];
      public searchValue = '';
    
      // decorator
      @ViewChild(DatatableComponent) table: DatatableComponent;
    
      // private
      private tempData = [];
      private _unsubscribeAll: Subject<any>;
      public rows;
      public tempFilterData;
      public previousStatusFilter = '';

      public ListarConex = [
        { 
          basedatos: 'code_epic',
          clave: 'Arrd17818665/',
          descripcion: 'Middleware Seguridad ',
          driver: 'mysql8',
      }
      ];


  public contentHeader: object


  constructor(
    private apiService : ApiService,
    private _coreConfigService: CoreConfigService,
  ) {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.ListaEmpresaAporteRecaudacion()
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
            this.data = this.ListarConex;
            this.rows = this.data;
            this.tempData = this.rows;
            this.tempFilterData = this.rows;
        }, 450);
      } else {
          this.data = this.ListarConex;
          this.rows = this.data;
          this.tempData = this.rows;
          this.tempFilterData = this.rows;
      }
    });

    this.contentHeader = {
      headerTitle: 'Registro de Contribuyentes',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Declaración y Pagos',
            isLink: true,
            link: '/'
          },
          {
            name: 'Principal',
            isLink: false
          }
        ]
      }
    }
  }


      /**
   * filterUpdate
   *
   * @param event
   */
       filterUpdate(event) {
        // Reset ng-select on search
        this.selectedStatus = this.selectStatus[0];
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
          return d.BancoEdoCuenta.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
  
      /**
       * Filter By Roles
       *
       * @param event
       */
      filterByStatus(event) {
        const filter = event ? event.value : '';
        this.previousStatusFilter = filter;
        this.tempFilterData = this.filterRows(filter);
        this.rows = this.tempFilterData;
      }
    
      /**
       * Filter Rows
       *
       * @param statusFilter
       */
      filterRows(statusFilter): any[] {
        // Reset search on select change
        this.searchValue = '';
    
        statusFilter = statusFilter.toLowerCase();
    
        return this.tempData.filter(row => {
          const isPartialNameMatch = row.activo.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
          return isPartialNameMatch;
        });
      }


      async ListaEmpresaAporteRecaudacion(){
        this.xAPI.funcion = "Fona_Read_ EmpresasAportesRecaudacion";
        await this.apiService.Ejecutar(this.xAPI).subscribe(
          (data) => {
            this.ListarConex = data.Cuerpo;
            this.data = this.ListarConex;
            let ID = 1;
            this.rows = this.data.map(e => { 
              e.index = ID++; 
              e.estatus = 1;
              return e 
            });
            // this.rows = this.data;
            this.tempData = this.rows;
            this.tempFilterData = this.rows;
            console.log(data)
          },
          (error) => {
            console.log(error)
          }
        )
      }

  

}
