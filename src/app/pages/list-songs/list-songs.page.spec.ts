import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSongsPage } from './list-songs.page';

describe('ListSongsPage', () => {
  let component: ListSongsPage;
  let fixture: ComponentFixture<ListSongsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
