import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ErroresService } from "@core/services/errores.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  @Input() modalForm: FormGroup;
  @Input() titulo: String;
  @Input() descripcion: String;
  @Input() idmodal: String;
  @Input() valorizarTypeInput: String;
  @Input() minutosTypeInput: String;
  @Input() torneosTypeInput: String;
  @Input() golesTypeInput: String;
  @Output() eventoBotonRegistrar = new EventEmitter();
  @Output() eventoBotonRegresar = new EventEmitter();

  constructor(public erroresService: ErroresService) { }

  ngOnInit(): void {
  }

  realizarAccionBotonRegistrar() {
    if(this.modalForm.valid){
      this.eventoBotonRegistrar.emit(this.modalForm);
    }
  }

  botonRegresar(){
    this.eventoBotonRegresar.emit();
  }

}
