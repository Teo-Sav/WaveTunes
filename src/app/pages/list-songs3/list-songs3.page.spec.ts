import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongs3Page } from './list-songs3.page';

describe('ListSongs3Page', () => {
  let component: ListSongs3Page;
  let fixture: ComponentFixture<ListSongs3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongs3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
