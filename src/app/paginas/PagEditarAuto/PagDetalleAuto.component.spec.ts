/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagDetalleAutoComponent } from './PagDetalleAuto.component';

describe('PagDetalleAutoComponent', () => {
  let component: PagDetalleAutoComponent;
  let fixture: ComponentFixture<PagDetalleAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagDetalleAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagDetalleAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
