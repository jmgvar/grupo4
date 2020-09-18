import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resourceList: Array<Resource> = [];
  resource: Resource;

  constructor(private resourceService: ResourceService) {
    resourceService.getResources().subscribe(data => {
      console.log(data.status);
      this.resourceList = data['data'];
    });;
  }

  ngOnInit(): void {
  }

}
