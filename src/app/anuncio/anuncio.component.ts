import { Component } from '@angular/core';
import { Anuncio } from '../anuncio';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../anuncio.service';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  anuncios: Anuncio[] = [];
  formGroupAnuncios: FormGroup;

  constructor(private anuncioService: AnuncioService, private formBuilder: FormBuilder) { 
    this.formGroupAnuncios = this.formBuilder.group({
   id: '',
   name: '',
   estado:'',
   valor: '',
   contato: '',
   url: '',
 });
}

 ngOnInit(): void{
  this.loadAnuncios();
}

loadAnuncios(){
  this.anuncioService.getAnuncios().subscribe({
      next: data => this.anuncios = data, 
      error: () => console.log('error')
  })
  }

save(){
    this.anuncioService.save(this.formGroupAnuncios.value).subscribe({
      next: data => {
        this.anuncios.push(data);
        this.formGroupAnuncios.reset();
      }
    });
  }
}
