import { Component,Input, OnInit } from '@angular/core';
import { Hashtag } from 'src/app/Hashtag';
import {ResponseData} from '../../response_data';
import { GetHashtagService } from 'src/app/service/get-hashtag.service';
@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit{
@Input()
hashtags: Array<Hashtag>
data={} as ResponseData

hashkey: string=""
constructor(private gethashtagservice:GetHashtagService){
  this.hashtags=[];
}
ngOnInit() {}
gethHash(){
  this.gethashtagservice.getHashTags(this.hashkey).subscribe((data)=>{this.hashtags=data; console.log(data);console.log(this.hashtags)})
}
}

