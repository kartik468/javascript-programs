import { Component, OnInit } from '@angular/core';
import { posts, posts as POSTS } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'virtual-scroll-ang';

  // users = posts.slice(0,10);
  posts = POSTS;

  visiblePosts = [];

  rowHeight = 30;

  containerHeight: number;

  totalTableHeight: number;

  ngOnInit() {
    this.visiblePosts = posts.slice(0, 10);
    this.containerHeight = this.visiblePosts.length * this.rowHeight;
    this.totalTableHeight = this.posts.length * this.rowHeight;
  }

  // onTableScroll(event: any): void {
  //   let scrollTop = event.currentTarget.scrollTop;
  //   if (scrollTop % 20 == 0) {
  //     const curIndex = scrollTop / 20;
  //     this.currShownRows = this.users.slice(curIndex, 10);
  //   }
  // }
  // onContainerScroll(event: any): void {
  //   let scrollTop = event.currentTarget.scrollTop;
  //   if (scrollTop % 20 == 0) {
  //     const curIndex = scrollTop / 20;
  //     this.currShownRows = this.users.slice(curIndex, 10);
  //   }
  // }

  onScroll(event) {
    const scrollTop = event.currentTarget.scrollTop;
    const curIndex = Math.floor(scrollTop / this.rowHeight);
    this.visiblePosts = this.posts.slice(curIndex, curIndex + 10);
    console.log('curIndex', curIndex);
    console.log('scrollTop', scrollTop);
  }
}
