import express from 'express';

export class CreateClients {
   async createClient(req: express.Request, res: express.Response) {
      const { name, email, phone } = req.body;

      const client = {
         name,
         email,
         phone
      };
      res.json(client);
   }
}