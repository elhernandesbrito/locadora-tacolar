Locadora Tacolar

Projeto full stack desenvolvido para a empresa Locadora Tacolar, especializada na locação de mesas de bilhar.

O objetivo deste projeto é criar um site institucional funcional e responsivo, permitindo apresentar a empresa, sua história e oferecer um canal direto de contato com clientes interessados.

Este projeto também compõe meu portfólio como desenvolvedora full stack, aplicando boas práticas de arquitetura, versionamento e separação de responsabilidades entre front-end e back-end.

Demonstração

Acesse o projeto online:
https://locadora-tacolar.vercel.app

Funcionalidades

Página inicial com apresentação da empresa

Página "Quem Somos"

Página de contato com formulário funcional

Envio de mensagens para o back-end

Armazenamento das mensagens no banco de dados

Feedback visual após envio do formulário

Integração completa entre front-end e back-end em produção

Arquitetura

A aplicação segue uma arquitetura full stack desacoplada:

Frontend (Vercel)
↓
Backend API (Render)
↓
MongoDB Atlas

Tecnologias Utilizadas
Front-end

React

Vite

JavaScript (ES6+)

HTML5

CSS3

React Router

Back-end

Node.js

Express

MongoDB

Mongoose

Infraestrutura

Vercel (Frontend)

Render (Backend)

MongoDB Atlas (Banco de dados)

Boas Práticas

Validação de dados no front-end e back-end

Validação de email

Uso de variáveis de ambiente

Rate limiting para proteção da API

Tratamento de erros

Organização modular do backend

Estrutura do Projeto

locadora-tacolar/
├─ frontend/
├─ backend/
├─ README.md
└─ .gitignore

Variáveis de Ambiente
Front-end

VITE_API_URL=https://locadora-tacolar.onrender.com/api

Back-end

MONGO_URI=your_mongodb_connection_string

Execução Local
Backend

cd backend
npm install
npm start

Frontend

cd frontend
npm install
npm run dev

Status do Projeto

Em produção (MVP funcional)

Melhorias Futuras

Envio automático de e-mails

Painel administrativo

Integração com WhatsApp

Domínio personalizado

Melhorias de interface e experiência

Desenvolvido por

Elisangela Brito