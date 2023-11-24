import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongs4Page } from './list-songs4.page';

describe('ListSongs4Page', () => {
  let component: ListSongs4Page;
  let fixture: ComponentFixture<ListSongs4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongs4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
