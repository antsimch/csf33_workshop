import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  @Output() 
  task = new EventEmitter();

  priorities = ['High', 'Medium', 'Low'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.fb.group({
        description: this.fb.control<string>('', [ Validators.required, Validators.minLength(5) ]),
        priority: this.fb.control<string>(this.priorities[2]),
        dueDate: this.fb.control<Date>(new Date(), [ ValidateDate ]),
        isComplete: false
      })
  }

  processForm(form: any) {
    this.task.emit(form);
    console.log('form: ' + JSON.stringify(form.value));
  }
}

function ValidateDate(control: AbstractControl) {
  
  const dueDate = Date.parse(control.value);  

  if (dueDate >= new Date().getTime())
    return null;

  return {'lessThanToday': true} as ValidationErrors;
}
