import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactPage } from './prodact-page';

describe('ProdactPage', () => {
  let component: ProdactPage;
  let fixture: ComponentFixture<ProdactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdactPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
