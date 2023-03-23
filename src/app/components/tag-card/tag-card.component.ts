import { Component ,Input,OnInit} from '@angular/core';
import { Hashtag } from 'src/app/Hashtag';
import{ GetHashtagService} from '../../service/get-hashtag.service';
@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.css']
})
export class TagCardComponent implements OnInit  {

  @Input()
  hashtag={} as Hashtag;
  @Input()
  hashtags=[] as Array<Hashtag>;
  constructor(private gethashtagservice:GetHashtagService)
  {

  }
  ngOnInit(): void {
  }
}
