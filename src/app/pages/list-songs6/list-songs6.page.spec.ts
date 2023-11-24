import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongs6Page } from './list-songs6.page';

describe('ListSongs6Page', () => {
  let component: ListSongs6Page;
  let fixture: ComponentFixture<ListSongs6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongs6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
