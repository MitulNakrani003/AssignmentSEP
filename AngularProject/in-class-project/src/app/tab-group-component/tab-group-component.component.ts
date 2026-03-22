import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponentComponent } from '../tab-component/tab-component.component';

@Component({
  selector: 'app-tab-group-component',
  standalone: false,
  templateUrl: './tab-group-component.component.html',
  styleUrl: './tab-group-component.component.scss'
})
export class TabGroupComponentComponent implements AfterContentInit {

  @ContentChildren(TabComponentComponent) tabs!: QueryList<TabComponentComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab: any) => tab.active);
    if (activeTabs.length === 0 && this.tabs.first) {
      this.tabs.first.active = true;
    }
  }

  selectTab(tab: TabComponentComponent) {
    this.tabs.toArray().forEach((t:any) => t.active = false);
    tab.active = true;
  }

}
