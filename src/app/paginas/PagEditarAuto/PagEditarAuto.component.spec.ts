/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagEditarAutoComponent } from './PagEditarAuto.component';

describe('PagDetalleAutoComponent', () => {
  let component: PagEditarAutoComponent;
  let fixture: ComponentFixture<PagEditarAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagEditarAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagEditarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
