import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, Event, NavigationEnd, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';
import { ToastrServices } from 'src/app/services/toastr.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('notification_parent_area') private notificationParentArea: ElementRef;
  @Input() stationName: any;
  @Input() restrictCreateIncident: any;
  @Input() restrictDisplayIncidentsList: any;
  @Output() closeScannedItemEvent = new EventEmitter<any>();
  @Output() initCreateIncidentEvent = new EventEmitter<any>();
  @ViewChild('tSearch') tSearch: any;
  modalOpen = false;
  readNotification = false;
  timeoutID: NodeJS.Timeout;
  dropDown: boolean;
  showStationList: boolean;
  currentUser: any;
  selectedStation: any;
  currentStation: any;
  notifications: any = [];
  showLoader: boolean;
  showRoles: boolean;
  currentRole: string;
  filterModalOpen = false;
  currentFilter: any = "WORK ORDER";
  isSearchActive: boolean = true;
  notificationInterval: any;
  searchKey: any;
  ismodalOpen: any;
  search_results: any;
  currentUrl: any;
  subscription = new Subscription;
  _routeListener: any;
  englishView: any;
  translate: any;
  stations: any = ['receiver', 'register', 'DC1', 'photographer', 'QA', 'DC2', 'vendor','QC', 'release', 'admin'];
  userStations: any = [];
  userPermission: any;
  fullPermission: boolean;
  viewType: any;
  notificationCount: any;
  currentUserRole:any;
  constructor(translate: TranslateService, private activatedRoute: ActivatedRoute,  public router: Router, private dialog: MatDialog, private auth: AuthService, private route: ActivatedRoute,
    private renderer: Renderer2, private apiService: ApiService, private tostr: ToastrServices, private CommonService: CommonService) {
    this.translate = translate;
    this._routeListener = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event?.url;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


}
