import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import jwt_decode from "jwt-decode"

import { Subject } from 'rxjs';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-registration-management',
  templateUrl: './registration-management.component.html',
  styleUrls: ['./registration-management.component.scss']
})
export class RegistrationManagementComponent implements OnInit {

  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    relacional: false,
    concurrencia : false,
    protocolo: '',
    ruta : '',
    version: '',
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
    logs : false,
    cache: 0,
    estatus: false,
    categoria : '',
    funcionalidad : '',
    entradas : '',
    salidas : ''
  };

  public token

  public DataEmpresa

  public invoices = [
    {
      id: 5018,
      issuedDate: '29 Feb 2020',
      client: {
        address: '4735 Kristie Islands Apt. 259',
        company: 'Chapman-Schneider LLC',
        companyEmail: 'baldwinjoel@washington.com',
        country: 'Cocos (Keeling) Islands',
        contact: '(670) 409-3703',
        name: 'Randy Rich'
      },
      service: 'UI/UX Design & Development',
      total: 2483,
      avatar: 'assets/images/avatars/5-small.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '10 Jul 2019',
      ReferenciaBancacia: '11111111111111'
    },
  ];

  public DataEmpresaAporte
  public rowsEmpresasContactos
    // public
    public data: any;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public selectStatus: any = [
      { name: 'All', value: '' },
      { name: 'En Espera', value: 0 },
      { name: 'Denegado', value:  2 },
      { name: 'Pagado', value: 'Paid' },
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


  constructor(
    private apiService : ApiService,
  ) { }


   async ngOnInit()  {
     this.token =   jwt_decode(sessionStorage.getItem('token'));
    await  this.ListEmpresasAportes(this.token.Usuario[0].EmpresaId)
    await  this.EmpresaAporte(this.token.Usuario[0].EmpresaId)

    this.data = this.DataEmpresaAporte
    this.rows = this.data;
    this.tempData = this.rows;
    this.tempFilterData = this.rows;
    console.log(this.data)

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
        return d.client.name.toLowerCase().indexOf(val) !== -1 || !val;
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
        const isPartialNameMatch = row.invoiceStatus.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
        return isPartialNameMatch;
      });
    }


  async ListEmpresasAportes(id: any) {
    this.xAPI.funcion = "Fona_Read_Empresa";
    this.xAPI.parametros = `${parseInt(id)}`
    this.DataEmpresa = []
     await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
          data.Cuerpo.map(e => {
            e.Ubi = JSON.parse(e.ubicacion)
            e.Actividad= JSON.parse(e.ActividadEconomica)
            this.DataEmpresa.push(e)
          });
      },
      (error) => {
        console.log(error)
      }
    )
  }


  async EmpresaAporte(id: any) {
    this.xAPI.funcion = "Fona_Read_Empresa_Aporte";
    this.xAPI.parametros = `${parseInt(id)}`
    this.DataEmpresaAporte = []
     await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        data.Cuerpo.map(e => {
          this.DataEmpresaAporte.push(e);
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }


}


