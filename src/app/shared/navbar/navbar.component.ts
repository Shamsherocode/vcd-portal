import { Component, OnInit, Renderer2, ViewChild, ElementRef, Directive } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'app/services/auth.service';

var misc:any ={
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
}

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    fullname:string = '';
    shortName: string = '';
    organizationName: string = '';
    organizationAddress: string = '';
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    private _router: Subscription;
    public open: boolean = false;

    @ViewChild("navbar-cmp", {static: false}) button;

    constructor(location:Location, private renderer : Renderer2,
        private element : ElementRef, private router: Router,
        private auth:AuthService) 
        {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        let user = this.auth.getUser();
        this.fullname = (user.fullname)
        this.organizationName=user.organizationName;
        this.organizationAddress=user.organizationAddress;
        
        //short name for profile
        let nameList =  this.fullname.split(" ")
        this.shortName = nameList[0][0]+(nameList.length>1?(nameList[1][0]):(""))


        
        // this.listTitles = ROUTES.filter(listTitle => listTitle);

        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          const $layer = document.getElementsByClassName('close-layer')[0];
          if ($layer) {
            $layer.remove();
          }
        });
    }

    logout(){
        this.auth.logout();
    }

    minimizeSidebar(){
      const body = document.getElementsByTagName('body')[0];

      if (misc.sidebar_mini_active === true) {
          body.classList.remove('sidebar-mini');
          misc.sidebar_mini_active = false;

      } else {
          setTimeout(function() {
              body.classList.add('sidebar-mini');

              misc.sidebar_mini_active = true;
          }, 300);
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      const simulateWindowResize = setInterval(function() {
          window.dispatchEvent(new Event('resize'));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function() {
          clearInterval(simulateWindowResize);
      }, 1000);
    }

    isMobileMenu(){
        if(window.outerWidth < 991){
            return false;
        }
        return true;
    }

    sidebarOpen(){
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        },500);
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose(){
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
          setTimeout(function(){
            mainPanel.style.position = '';
          }, 500);
        }
    }
    sidebarToggle(){
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if(this.sidebarVisible == false){
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            var parent = this.listTitles[item];
            if(parent.path === titlee){
                return parent.title;
            }else if(parent.children){
                var children_from_url = titlee.split("/")[2];
                for(var current = 0; current < parent.children.length; current++){
                    if(parent.children[current].path === children_from_url ){
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }

    getPath(){
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
}
