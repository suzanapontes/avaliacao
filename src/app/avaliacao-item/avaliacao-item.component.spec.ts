import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoItemComponent } from './avaliacao-item.component';

describe('AvaliacaoItemComponent', () => {
  let component: AvaliacaoItemComponent;
  let fixture: ComponentFixture<AvaliacaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
