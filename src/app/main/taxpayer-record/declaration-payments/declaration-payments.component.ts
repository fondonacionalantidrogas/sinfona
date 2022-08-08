import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-declaration-payments',
  templateUrl: './declaration-payments.component.html',
  styleUrls: ['./declaration-payments.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
})
export class DeclarationPaymentsComponent implements OnInit {


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
      dueDate: '10 Jul 2019'
    },
    {
      id: 5019,
      issuedDate: '07 Aug 2019',
      client: {
        address: '92218 Andrew Radial',
        company: 'Mcclure, Hernandez and Simon Ltd',
        companyEmail: 'psmith@morris.info',
        country: 'Macao',
        contact: '(646) 263-0257',
        name: 'Mrs. Jodi Chapman'
      },
      service: 'Unlimited Extended License',
      total: 2825,
      avatar: 'assets/images/avatars/8-small.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$459',
      dueDate: '14 Oct 2019'
    },
    {
      id: 5020,
      issuedDate: '10 May 2019',
      client: {
        address: '2342 Michelle Valley',
        company: 'Hamilton PLC and Sons',
        companyEmail: 'lori06@morse.com',
        country: 'Somalia',
        contact: '(751) 213-4288',
        name: 'Steven Myers'
      },
      service: 'Unlimited Extended License',
      total: 2029,
      avatar: 'assets/images/avatars/4-small.png',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: '28 Mar 2019'
    },
    {
      id: 5021,
      issuedDate: '02 Apr 2019',
      client: {
        address: '16039 Brittany Terrace Apt. 128',
        company: 'Silva-Reeves LLC',
        companyEmail: 'zpearson@miller.com',
        country: 'Slovakia (Slovak Republic)',
        contact: '(655) 649-7872',
        name: 'Charles Alexander'
      },
      service: 'Software Development',
      total: 3208,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '06 Sep 2019'
    },
    {
      id: 5022,
      issuedDate: '02 May 2019',
      client: {
        address: '37856 Olsen Lakes Apt. 852',
        company: 'Solis LLC Ltd',
        companyEmail: 'strongpenny@young.net',
        country: 'Brazil',
        contact: '(402) 935-0735',
        name: 'Elizabeth Jones'
      },
      service: 'Software Development',
      total: 3077,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '09 May 2019'
    },
    {
      id: 5023,
      issuedDate: '23 Mar 2020',
      client: {
        address: '11489 Griffin Plaza Apt. 927',
        company: 'Munoz-Peters and Sons',
        companyEmail: 'carrietorres@acosta.com',
        country: 'Argentina',
        contact: '(915) 448-6271',
        name: 'Heidi Walton'
      },
      service: 'Software Development',
      total: 5578,
      avatar: 'assets/images/avatars/9-small.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '23 Jul 2019'
    },
    {
      id: 5024,
      issuedDate: '28 Sep 2019',
      client: {
        address: '276 Michael Gardens Apt. 004',
        company: 'Shea, Velez and Garcia LLC',
        companyEmail: 'zjohnson@nichols-powers.com',
        country: 'Philippines',
        contact: '(817) 700-2984',
        name: 'Christopher Allen'
      },
      service: 'Software Development',
      total: 2787,
      avatar: 'assets/images/avatars/1-small.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: '25 Sep 2019'
    },
    {
      id: 5025,
      issuedDate: '21 Feb 2020',
      client: {
        address: '633 Bell Well Apt. 057',
        company: 'Adams, Simmons and Brown Group',
        companyEmail: 'kayla09@thomas.com',
        country: 'Martinique',
        contact: '(266) 611-9482',
        name: 'Joseph Oliver'
      },
      service: 'UI/UX Design & Development',
      total: 5591,
      avatar: '',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '07 Jun 2019'
    }
  ];

    // public
    public data: any;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public selectStatus: any = [
      { name: 'All', value: '' },
      { name: 'Downloaded', value: 'Downloaded' },
      { name: 'Draft', value: 'Draft' },
      { name: 'Paid', value: 'Paid' },
      { name: 'Partial Payment', value: 'Partial Payment' },
      { name: 'Past Due', value: 'Past Due' },
      { name: 'Sent', value: 'Sent' }
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
    private modalService: NgbModal,

  ) {
  }


    // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
   async ngOnInit()  {
    this.data = this.invoices;
    this.rows = this.data;
    this.tempData = this.rows;
    this.tempFilterData = this.rows;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------


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

    AddRegister(modal) {
      this.modalService.open(modal,{
        centered: true,
        size: 'xl',
        backdrop: false,
        keyboard: false,
        windowClass: 'fondo-modal',
      });
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


}

