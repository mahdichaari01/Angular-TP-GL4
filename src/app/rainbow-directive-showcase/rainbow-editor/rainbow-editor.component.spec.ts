import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowEditorComponent } from './rainbow-editor.component';

describe('RainbowEditorComponent', () => {
  let component: RainbowEditorComponent;
  let fixture: ComponentFixture<RainbowEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainbowEditorComponent]
    });
    fixture = TestBed.createComponent(RainbowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
