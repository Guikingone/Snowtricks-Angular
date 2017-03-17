/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TricksComponent } from './tricks.component';

describe('TricksComponent', () => {
  let component: TricksComponent;
  let fixture: ComponentFixture<TricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
