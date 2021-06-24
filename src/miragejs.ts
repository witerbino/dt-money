import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pagamento Mensal',
          amount: 5000,
          type: 'income',
          category: 'Salário',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Apartamento',
          amount: 1250,
          type: 'outcome',
          category: 'Aluguel',
          createdAt: new Date()
        }
      ]
    })
  }, 

  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', (schema) => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();
      return schema.create('transaction', data);
    })
  }
});