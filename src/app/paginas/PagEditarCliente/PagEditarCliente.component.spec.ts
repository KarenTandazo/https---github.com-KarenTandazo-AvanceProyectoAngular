/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagEditarClienteComponent } from './PagEditarCliente.component';

describe('PagEditarClienteComponent', () => {
  let component: PagEditarClienteComponent;
  let fixture: ComponentFixture<PagEditarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagEditarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
