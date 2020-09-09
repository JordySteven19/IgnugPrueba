import { Component , OnInit} from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb/breadcrumb.service';
import { Car } from '../domain/car';
import { ConfirmationService } from 'primeng/api';
import { CarService } from '../service/carservice';
import { NodeService } from '../service/nodeservice';
import { EventService } from '../service/eventservice';

import { TreeNode, SelectItem, LazyLoadEvent } from 'primeng/api';


@Component({
    templateUrl: './ofert.component.html',
    styles: [`
        .docs pre.doc-command {
            font-family: monospace;
            background-color: #5a657c;
            color: #ffffff;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

        .docs p,
        .docs li{
            line-height: 2;
        }

        .docs i {
            background: #f1daad;
            font-family: monaco,Consolas,Lucida Console,monospace;
            font-weight: 700;
            padding: 2px 4px;
            letter-spacing: .5px;
            font-style: normal;
            color: #424242;
            border-radius: 4px;
        }
        `
    ],
    providers: [ConfirmationService]
})

export class OfertComponent implements OnInit {
    cars1: Car[];

    cars2: Car[];

    cars4: Car[];

    carsVirtual: Car[] = [];

    cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    sourceCars: Car[];

    targetCars: Car[];

    orderListCars: Car[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    events: any[];

   

    
 

    display: boolean;
   

    constructor(private carService: CarService, private eventService: EventService, private nodeService: NodeService,private confirmationService: ConfirmationService
                ,private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Oferta', routerLink: ['/Ofert'] }
        ]);
    }
    
    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars1 = cars);
        this.carService.getCarsMedium().then(cars => this.cars4 = cars);
        this.cols = [
            { field: 'vin', header: 'Oferta' },
            { field: 'year', header: 'Fecha' },
            { field: 'brand', header: 'Paga' },
            { field: 'color', header: 'Horas' }
        ];
       
        this.carService.getCarsMedium().then(cars => this.cars2 = cars);
        this.carService.getCarsLarge().then(cars => this.carsVirtual = cars);
        this.carService.getCarsMedium().then(cars => this.sourceCars = cars);
        this.targetCars = [];
        this.carService.getCarsSmall().then(cars => this.orderListCars = cars);
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFiles().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.eventService.getEvents().then(events => { this.events = events; });
        this.brands = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

    }
        
        confirm() {
            this.confirmationService.confirm({
                message: 'Are you sure to perform this action?'
            });
        }
       


       

    
    }
   


