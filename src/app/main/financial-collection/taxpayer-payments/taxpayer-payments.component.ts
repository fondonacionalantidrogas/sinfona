import { Component, OnInit, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../modals/contributing-companies/details/details.component';


@Component({
  selector: 'app-taxpayer-payments',
  templateUrl: './taxpayer-payments.component.html',
  styleUrls: ['./taxpayer-payments.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],

})
export class TaxpayerPaymentsComponent implements OnInit {

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
  
    public users = [];
    public EmpresasAportes = [];
    public apiData;
    
  
    // Public
    public sidebarToggleRef = false;
    public rows;
    public rowsEmpresasAportes;
    public rowsEmpresasContactos;
    public rowsEmpresasUsuario;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public temp = [];
    public previousRoleFilter = '';
    public previousPlanFilter = '';
    public previousStatusFilter = '';
  
    public selectRole: any = [
      { name: 'Todos', value: '' },
      { name: 'Admin', value: 'Admin' },
      { name: 'Autor', value: 'Author' },
      { name: 'Editor', value: 'Editor' },
      { name: 'Maintainer', value: 'Maintainer' },
      { name: 'Subscriber', value: 'Subscriber' }
    ];
  
    public selectPlan: any = [
      { name: 'Todos', value: '' },
      { name: 'Basic', value: 'Basic' },
      { name: 'Company', value: 'Company' },
      { name: 'Enterprise', value: 'Enterprise' },
      { name: 'Team', value: 'Team' }
    ];
  
    public selectStatus: any = [
      { name: 'Todas', value: '' },
      { name: 'Activa', value: "1" },
      { name: 'Inactiva', value: "2" },
      { name: 'Otras', value: "3" },
      { name: 'Undefined', value: "3" }
    ];
  
    public selectedRole = [];
    public selectedPlan = [];
    public selectedStatus = [];
    public searchValue = '';
    public isReload = false;
  
  
    // Decorator
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild(DetailsComponent) modalDetails: DetailsComponent
  
  
    // Private
    private tempData = [];
    private _unsubscribeAll: Subject<any>;
  
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {UserListService} _userListService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(
      // private _userListService: UserListService,
      private apiService : ApiService,
      private _coreSidebarService: CoreSidebarService,
      private _coreConfigService: CoreConfigService,
      private modalService: NgbModal,
    ) {
      this._unsubscribeAll = new Subject();
    }
  
  
      // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
     async ngOnInit()  {
      await this.ListEmpresas()
      // await this.ListEmpresasAportes(2)
      // Subscribe config change
          setTimeout(() => {
              this.rows = this.users;
              this.tempData = this.rows;
          }, 450);
    }
  
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
  
      /**
     * Emitted Events
     *
     * @param $event
     */
       emittedEvents($event) {
        console.log('Action : ', $event);
      }
    
      /**
       * Reload
       *
       * @param $event
       */
      reload($event) {
        // This is fake API call example for reload
        if ($event === 'reload') {
          console.log($event, ': Start');
          this.isReload = true;
          setTimeout(() => {
            this.isReload = false;
            console.log($event, ': End');
          }, 5000);
        }
      }
  
  
     // modal Open Large
     ModalAdd(modal,) {
      this.modalService.open(modal, {
        centered: true,
        size: 'lg',
        backdrop: false,
        keyboard: false,
        windowClass: 'fondo-modal',
      });
    }
  
  
    ModalDetails(modal, data) {
      this.apiData = data
      console.info(this.apiData)
      this.modalService.open(modal, {
        centered: true,
        size: 'xl',
        backdrop: false,
        keyboard: false,
        windowClass: 'fondo-modal',
      });
    }
  
  
    /**
     * filterUpdate
     *
     * @param event
     */
    filterUpdate(event) {
      // Reset ng-select on search
      this.selectedRole = this.selectRole[0];
      this.selectedPlan = this.selectPlan[0];
      this.selectedStatus = this.selectStatus[0];
  
      const val = event.target.value.toLowerCase();
  
      // Filter Our Data
      const temp = this.tempData.filter(function (d) {
        return d.RazonSocial.toLowerCase().indexOf(val) !== -1 || !val;
      });
  
  
      // Update The Rows
      this.rows = temp;
      // Whenever The Filter Changes, Always Go Back To The First Page
      this.table.offset = 0;
    }
  
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
      this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
  
  
    async ListEmpresas() {
      this.xAPI.funcion = "Fona_Read_Empresas";
      this.rows = []
      await this.apiService.Ejecutar(this.xAPI).subscribe(
        (data) => {
        // data.Cuerpo.forEach(e => {
        //   this.users.push(e)
        // });
       this.users =  data.Cuerpo.map(e => { 
        e.ActividadEconomica = JSON.parse(e.ActividadEconomica)[0].ActividaEconomica
        e.localidad = JSON.parse(e.ubicacion)[0]
          return e
         }  )
  
        },
        (error) => {
          console.log(error)
        }
      )
    }
  
    async ListEmpresasAportes(id: any) {
      this.xAPI.funcion = "Fona_Read_Empresas_Aportes";
      this.xAPI.parametros =  `${parseInt(id)}`;
      this.rowsEmpresasAportes = []
      this.rowsEmpresasContactos = []
      this.rowsEmpresasUsuario = []
      await this.apiService.Ejecutar(this.xAPI).subscribe(
        (data) => {
          data.Cuerpo.forEach(e => {
          this.rowsEmpresasAportes.push(e)
          this.rowsEmpresasContactos.push(JSON.parse(e.contactos)[0])
          this.rowsEmpresasUsuario.push(JSON.parse(e.usuario)[0])
        });
        },
        (error) => {
          console.log(error)
        }
      )
      console.info('Contactos',this.rowsEmpresasContactos)
  
    }
  
    /**
     * Filter By Roles
     *
     * @param event
     */
    // filterByRole(event) {
    //   const filter = event ? event.value : '';
    //   this.previousRoleFilter = filter;
    //   this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
    //   this.rows = this.temp;
    // }
  
    /**
     * Filter By Plan
     *
     * @param event
     */
    // filterByPlan(event) {
    //   const filter = event ? event.value : '';
    //   this.previousPlanFilter = filter;
    //   this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
    //   this.rows = this.temp;
    // }
  
    /**
     * Filter By Status
     *
     * @param event
     */
    filterByStatus(event) {
      const filter = event ? event.value : '';
      this.previousStatusFilter = filter;
      this.temp = this.filterRows(filter);
      this.rows = this.temp;
    }
  
    /**
     * Filter Rows
     *
     * @param roleFilter
     * @param planFilter
     * @param statusFilter
     */
    filterRows(statusFilter): any[] {
      // Reset search on select change
      this.searchValue = '';
  
      // roleFilter = roleFilter.toLowerCase();
      // planFilter = planFilter.toLowerCase();
      statusFilter = statusFilter.toLowerCase();
  
      return this.tempData.filter(row => {
        // const isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
        // const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
        const isPartialStatusMatch = row.EstatusEmpresa.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
        return isPartialStatusMatch;
      });
    }
  
  
    /**
     * On destroy
     */
    ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  
  
  
  }
  