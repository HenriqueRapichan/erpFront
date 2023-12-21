import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

DataService 
@Component({
  selector: 'app-exemplo',
    templateUrl: './exemplo.component.html',
    styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {
public carregando: boolean = true;
  // Array para armazenar os dados do backend
 public data: any[] = [];

  constructor(private dataService: DataService) {
    // Carrega dados ao inicializar o componente
    
  }

  ngOnInit() {
    this.loadData();
  }
  // Função assíncrona para carregar dados do backend
  async loadData(): Promise<void> {
    try {
      // Chama a função assíncrona do serviço para obter dados
      this.data = await this.dataService.getData();
    } catch (error) {
      // Trata erros ao carregar dados do backend (pode ser exibido uma mensagem para o usuário, por exemplo)
    }
  }

  // Função assíncrona para adicionar um novo item e recarregar dados
  async addItem(newItem: any): Promise<void> {
    try {
      // Chama a função assíncrona do serviço para adicionar dados
      await this.dataService.addData(newItem);
      // Após adicionar, recarrega os dados para atualizar a interface
      await this.loadData();
    } catch (error) {
      // Trata erros ao adicionar dados (pode ser exibido uma mensagem para o usuário, por exemplo)
    }
  }

  // Função assíncrona para editar um item e recarregar dados
  async editItem(index: number, newItem: any): Promise<void> {
    try {
      // Chama a função assíncrona do serviço para editar dados
      await this.dataService.editData(index, newItem);
      // Após editar, recarrega os dados para atualizar a interface
      await this.loadData();
    } catch (error) {
      // Trata erros ao editar dados (pode ser exibido uma mensagem para o usuário, por exemplo)
    }
  }

  // Função assíncrona para excluir um item e recarregar dados
  async deleteItem(index: number): Promise<void> {
    try {
      // Chama a função assíncrona do serviço para excluir dados
      await this.dataService.deleteData(index);
      // Após excluir, recarrega os dados para atualizar a interface
      await this.loadData();
    } catch (error) {
      // Trata erros ao excluir dados (pode ser exibido uma mensagem para o usuário, por exemplo)
    }
  }
}

// Explicações adicionais:

// O componente implementa a interface OnInit, e o método ngOnInit é chamado automaticamente após a inicialização do componente.
// As funções loadData, addItem, editItem e deleteItem são marcadas como assíncronas (async) porque envolvem operações assíncronas, como chamadas a serviços HTTP.
// Dentro do bloco try, cada função chama métodos correspondentes do serviço DataService para realizar operações no backend.
// Dentro do bloco catch, os erros são tratados. No exemplo, uma mensagem de erro é impressa no console, mas você pode personalizar esse comportamento conforme necessário.
// Certifique-se de substituir as mensagens de erro e adaptar o código de acordo com os requisitos específicos do seu projeto.