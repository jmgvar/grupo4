import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-displayed',
  templateUrl: './resource-displayed.component.html',
  styleUrls: ['./resource-displayed.component.css']
})
export class ResourceDisplayedComponent implements OnInit {

  resource: Resource;
  resourceAd: Resource;

  constructor(private resourceService: ResourceService) {
    resourceService.getResource().subscribe(data => {
      console.log(data.status);
      this.resource = data['data'];
      this.resourceAd = data['ad'];
    });;
   }

  ngOnInit(): void {
  }

}
