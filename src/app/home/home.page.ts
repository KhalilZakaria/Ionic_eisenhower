import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  q1 = [
    { value: "Réviser pour l'examen", color: 'primary' },
    
  ];
  q2 = [
    
    { value: 'S\'entrainer ', color: 'secondary' }
  ];
  q3 = [
    { value: 'Répondre aux messages sur WhatsApp', color: 'tertiary' },
    
  ];
  q4 = [
    { value: 'Jouer en ligne', color: 'warning' },
    { value: 'Regarder Game of Thrones', color: 'warning' }
  ];
 
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';
  constructor(private dragulaService: DragulaService,private toastController: ToastController) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'danger');
    });
 
    this.dragulaService.removeModel('bag')
    .subscribe(({ item }) => {
      this.toastController.create({
        message: 'Supprimé: ' + item.value,
        duration: 2000
      }).then(toast => toast.present());
    });
 
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });
 
    this.dragulaService.createGroup('bag', {
      removeOnSpill: true
    });
  }
 
  addTodo() {
    switch (this.selectedQuadrant) {
      case 'q1':
        this.todo.color = 'primary';
        break;
      case 'q2':
        this.todo.color = 'secondary';
        break;
      case 'q3':
        this.todo.color = 'tertiary';
        break;
      case 'q4':
        this.todo.color = 'warning';
        break;
    }
    this[this.selectedQuadrant].push(this.todo);
    this.todo = { value: '', color: '' };
  }
}

