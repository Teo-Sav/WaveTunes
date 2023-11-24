import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongs5Page } from './list-songs5.page';

describe('ListSongs5Page', () => {
  let component: ListSongs5Page;
  let fixture: ComponentFixture<ListSongs5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongs5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
