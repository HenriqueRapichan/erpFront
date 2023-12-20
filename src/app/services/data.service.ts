import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // URL do backend (substitua 'url_do_backend' pela sua URL real)
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Função assíncrona para obter dados do backend
  async getData(): Promise<any[]> {
    try {
      // Faz uma requisição GET para obter dados e aguarda a resposta
      const response = await this.http.get<any[]>(`${this.apiUrl}/posts`).toPromise();
      return response!; // Retorna os dados obtidos do backend
    } catch (error) {
      console.error('Erro ao obter dados do backend', error);
      throw error; // Lança o erro para que seja tratado pelo componente
    }
  }

  // Função assíncrona para adicionar dados no backend
  async addData(item: any): Promise<void> {
    try {
      // Faz uma requisição POST para adicionar dados e aguarda a resposta
      const response = await this.http.post(`${this.apiUrl}/adicionar`, item).toPromise();
      console.log('Dados adicionados com sucesso no backend', response);
    } catch (error) {
      console.error('Erro ao adicionar dados no backend', error);
      throw error; // Lança o erro para que seja tratado pelo componente
    }
  }

  // Função assíncrona para editar dados no backend
  async editData(index: number, newItem: any): Promise<void> {
    try {
      // Faz uma requisição PUT para editar dados e aguarda a resposta
      const response = await this.http.put(`${this.apiUrl}/editar/${index}`, newItem).toPromise();
      console.log('Dados editados com sucesso no backend', response);
    } catch (error) {
      console.error('Erro ao editar dados no backend', error);
      throw error; // Lança o erro para que seja tratado pelo componente
    }
  }

  // Função assíncrona para excluir dados no backend
  async deleteData(index: number): Promise<void> {
    try {
      // Faz uma requisição DELETE para excluir dados e aguarda a resposta
      const response = await this.http.delete(`${this.apiUrl}/excluir/${index}`).toPromise();
      console.log('Dados excluídos com sucesso no backend', response);
    } catch (error) {
      console.error('Erro ao excluir dados no backend', error);
      throw error; // Lança o erro para que seja tratado pelo componente
    }
  }
}
