import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


import Stepper from 'bs-stepper';

import { ApiService, IAPICore } from '@core/services/apicore/api.service';


import { repeaterAnimation } from './form-repeater.animation';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [repeaterAnimation]
})
export class InscriptionComponent implements OnInit {

  public loginForm: FormGroup;
  public contentHeader: object;
  public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

  public item = {
    itemName: '',
    itemQuantity: '',
    itemCost: ''
  };

  // snippet code variable



  public TDNameVar;
  public TDEmailVar;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;

  // Formulario 1
  public tipoRif;
  public rif;
  public razonSocial;
  public cantidadEmpleado;
  public direccion;
  public estados;
  public municipios;
  public telefono;
  public email;
  public actividad_economica;  
  //  Formulario 2
  public ubicacion_registro;
  public registro_mercantil;
  public fecha_creacion;
  public numero_patronal;

  
  public MinMaxDPdata: NgbDateStruct;
  selectEstados = [];
  selectMunicipios = [];
  selectActividadEconomica = [];

  public selectBasic = [
    { name: 'UK' },
    { name: 'USA' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Italy' },
    { name: 'Australia' }
  ];

  public selectRIF = [
    { name: 'V' },
    { name: 'J' },
    { name: 'G' }
  ];

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


  public basicDPdata: NgbDateStruct;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;


  public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
  public selectMultiSelected;

  // private
  private horizontalWizardStepper: Stepper;
  private verticalWizardStepper: Stepper;
  private modernWizardStepper: Stepper;
  private modernVerticalWizardStepper: Stepper;
  private bsStepper;


  /**
   * Add Item
   */
   addItem() {
    this.items.push({
      itemId: '',
      itemName: '',
      itemQuantity: '',
      itemCost: ''
    });
  }

  /**
   * DeleteItem
   *
   * @param id
   */
  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }



  agregar(item: any){
    console.log(item.form.value)
  }


  /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
  horizontalWizardStepperNext(data) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }
  /**
   * Horizontal Wizard Stepper Previous
   */
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }

  /**
   * Vertical Wizard Stepper Next
   */
  verticalWizardNext() {
    this.verticalWizardStepper.next();
  }
  /**
   * Vertical Wizard Stepper Previous
   */
  verticalWizardPrevious() {
    this.verticalWizardStepper.previous();
  }
  /**
   * Modern Horizontal Wizard Stepper Next
   */
  modernHorizontalNext() {
    this.modernWizardStepper.next();
  }
  /**
   * Modern Horizontal Wizard Stepper Previous
   */
  modernHorizontalPrevious() {
    this.modernWizardStepper.previous();
  }
  /**
   * Modern Vertical Wizard Stepper Next
   */
  modernVerticalNext() {
    this.modernVerticalWizardStepper.next();
  }
  /**
   * Modern Vertical Wizard Stepper Previous
   */
  modernVerticalPrevious() {
    this.modernVerticalWizardStepper.previous();
  }

 

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private apiService : ApiService,
    private _coreConfigService: CoreConfigService,
    private _formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
    ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10)
    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: false
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  async ListaEstados(){
    this.xAPI.funcion = "Fona_Read_Estados";
    this.selectEstados = []
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.selectEstados = data.Cuerpo.map( e => {
          e.name =  e.Nombre
          e.id = e.EstadoId
          return e
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  async ListaMunicipios(id : string) {
    this.xAPI.funcion = "Fona_Read_Municipios";
    this.xAPI.parametros =  id;
    this.selectMunicipios = []
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.selectMunicipios = data.Cuerpo.map( e => {
          e.name =  e.Nombre
          e.id = e.MunicipioId
          return e
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  async ListaActividadEconomica() {
    this.xAPI.funcion = "Fona_Read_ActividadesEconomicas";
    this.selectActividadEconomica = []
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.selectActividadEconomica = data.Cuerpo.map( e => {
          e.name =  e.Nombre
          e.id = e.MunicipioId
          return e
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  async ngOnInit() {
    this.ListaEstados()
    this.ListaActividadEconomica()
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

    this.bsStepper = document.querySelectorAll('.bs-stepper');

     // content header
     this.contentHeader = {
      headerTitle: 'Form Wizard',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Wizard',
            isLink: false
          }
        ]
      }
    };
    
  }

}

