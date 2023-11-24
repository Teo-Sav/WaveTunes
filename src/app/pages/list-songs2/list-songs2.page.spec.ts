import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongs2Page } from './list-songs2.page';

describe('ListSongs2Page', () => {
  let component: ListSongs2Page;
  let fixture: ComponentFixture<ListSongs2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
