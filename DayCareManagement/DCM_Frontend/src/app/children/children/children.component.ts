import { Component } from '@angular/core';
import { ChildrenService } from '../../services/children.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-children',
  imports: [FormsModule,CommonModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
children: any[] = [];
  childForm = {
    id: null,
    name: '',
    age: '',
    parentName: ''
  };

  constructor(private service: ChildrenService) {}

  ngOnInit(): void {
    this.loadChildren();
  }

  loadChildren() {
    this.service.getAll().subscribe((res: any) => this.children = res);
  }

  save() {
    if (this.childForm.id) {
      this.service.update(this.childForm.id, this.childForm).subscribe(() => this.loadChildren());
    } else {
      this.service.create(this.childForm).subscribe(() => this.loadChildren());
    }
    this.childForm = { id: null, name: '', age: '', parentName: '' };
  }

  edit(child: any) {
    this.childForm = { ...child };
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.loadChildren());
  }
}
