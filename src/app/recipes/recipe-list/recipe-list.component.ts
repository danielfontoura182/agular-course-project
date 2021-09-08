import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Just a simples test recipe',
      'https://img.cybercook.com.br/receitas/974/receita-de-carne-assada-basica-2-840x480.jpeg?q=75',
      1
    ),
    new Recipe(
      'Test Recipe',
      'Just a simples test recipe',
      'https://img.cybercook.com.br/receitas/974/receita-de-carne-assada-basica-2-840x480.jpeg?q=75',
      1
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
