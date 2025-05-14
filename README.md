# Weather-API

Este projeto é uma API para consulta de informações climáticas, desenvolvida utilizando o framework [Express](https://expressjs.com/).

## Funcionalidades

- Consulta de dados climáticos por localização.
- Suporte a múltiplos formatos de resposta (JSON, XML, etc.).
- Integração com serviços de terceiros para obter dados meteorológicos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para construção de APIs rápidas e robustas.
- **Axios**: Cliente HTTP para integração com APIs externas.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Docker**: Containerização do ambiente de desenvolvimento e produção.
- **Redis**: Armazenamento em cache para melhorar o desempenho da API.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
    git clone https://github.com/JuniorThume/Weather-API.git
    cd Weather-API
   ```

2. **Instale as dependências**:
   ```bash
    npm install
   ```

3. **Cadastre-se para obter a API Key**:
    Acesse o link [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/) e crie uma conta para obter sua chave de API.

4. **Configure as variáveis de ambiente**:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```.env
    SERVER_PORT=<porta que o servidor escutará>
    REDIS_URL=<url_de_conexao_com_redis>
    API_KEY=<sua_chave_de_api>
   ```

5. **Certifique-se de ter o Docker instalado e execute o comando**:
   ```bash
    docker compose up -d
   ```

6. **Inicie o servidor**:
   ```bash
    npm start
   ```

7. **Acesse a API**:
    O servidor estará disponível em `http://localhost:3000` (ou na porta configurada).

## Estrutura do Projeto

```
Weather-API/
├── node_modules/
├── dist/                  # Arquivos transpilados para produção
├── src/
│   ├── config/            # Configurações gerais do projeto
│   ├── controllers/       # Lógica de controle das rotas
│   ├── errors/            # Definições de erros personalizados
│   ├── middlewares/       # Middlewares para tratamento de requisições
│   ├── routes/            # Definição das rotas da API
│   ├── schemaValidators/  # Validações de schemas (ex.: Joi)
│   ├── services/          # Integração com serviços externos
│   └── app.js             # Arquivo principal para configuração do servidor
├── .env.example                   # Variáveis de ambiente
├── tsconfig.json          # Configuração do TypeScript
├── docker-compose.yml     # Configuração do Docker Compose
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── LICENSE                # Licença do projeto
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

## Comandos

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com hot-reload.
- **`npm run build`**: Gera a build de produção do projeto.
- **`npm run start`**: Inicia o servidor em modo de produção.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug:
   ```bash
    git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
    git commit -m "Descrição da minha feature"
   ```
4. Envie suas alterações:
   ```bash
    git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Sobre o Desenvolvedor

Este projeto foi desenvolvido por Valmir Thume Junior. Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento backend e integração de APIs. 

- **LinkedIn**: [https://www.linkedin.com/in/valmir-thume-junior/](https://www.linkedin.com/in/valmir-thume-junior/)
- **GitHub**: [https://github.com/JuniorThume](https://github.com/JuniorThume)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!
