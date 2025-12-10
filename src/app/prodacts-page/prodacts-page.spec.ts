import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactsPage } from './prodacts-page';

describe('ProdactsPage', () => {
  let component: ProdactsPage;
  let fixture: ComponentFixture<ProdactsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdactsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
