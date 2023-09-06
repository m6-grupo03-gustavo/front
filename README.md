# <h1 style="text-align: center; color:#b2d9f7;">Motors Shoop, FIPE</h1>

<div>
  	<img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
    <img align="center" alt="Node" height="30" width="40" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg">
    <img align="center" alt="PSQL" height="30" width="40" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg">
    <img align="center" alt="Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
</div>



# <h1 style="text-align: center; color:#b2d9f7;">Index</h1>

* [URLs](#urls)
* [Introdução](#introdução)
* [Repositório_local](#repositório_local)
* [Componentização](#componentização)
* [Bibliotecas](#bibliotecas)




# <h1 style="text-align: center; color:#b2d9f7;">URLs</h1>

<a href='https://github.com/m6-grupo03-gustavo/back'>Vercel</a>

<a href='https://github.com/m6-grupo03-gustavo/back'>Back-end Repo.</a>


# <h1 style="text-align: center; color:#b2d9f7;">Introdução</h1>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
Motors Shoop é uma aplicação que oferece aos usuários um sistema completo de compra e venda de veículos. A plataforma conta com dois tipos de usuários: o anunciante e o comprador.
</p>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
O anunciante pode realizar todas as operações de CRUD (criação, leitura, atualização e exclusão) em relação às suas publicações, permitindo que ele gerencie facilmente seus anúncios de veículos. Já o comprador pode navegar pela ampla variedade de veículos disponíveis, comparar preços e condições, e realizar comentarios nos respectivos anuncios de forma  transparente.
</p>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
Além disso, a Motors Shoop oferece recursos adicionais para tornar a experiência do usuário ainda mais completa. O cadastro, login e recuperação de senha são fáceis e intuitivos, garantindo que os usuários possam acessar a plataforma com facilidade e segurança.
</p>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
Nessa aplicação estamos consumindo um api que simula a Tabela Fipe, que expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações. Os preços efetivamente praticados variam em função da região, conservação, cor, acessórios ou qualquer outro fator que possa influenciar as condições de oferta e procura por um veículo específico
</p>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
Além disso, a Motors Shoop pode oferecer aos usuários recursos adicionais, como filtros de busca avançados e informações detalhadas sobre os veículos.
</p>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
 Tudo isso torna a experiência de compra e venda de veículos mais fácil, segura e conveniente para todos.
</p>


# <h1 style="text-align: center; color:#b2d9f7;">Repositório_local</h1>

- Você precisa ter o banco de dados postegresSQL e node.js  em sua máquina.
<a href='https://nodejs.org/en/download'>Node.js</a> | 
<a href='https://www.enterprisedb.com/downloads/postgres-postgresql-downloads'>PSQL</a>

- Clone o repositório do back-end:
<a href='https://github.com/m6-grupo03-gustavo/back'>Repo</a>

```
git clone <URL-GITHUB>
```

- Crie banco de dados postegres

`Conectado no terminal interativo do PostgreSQL (psql)`
```
psql -U postgres
```

`Postgres user default password`
```
1234
```


`Create Database`
```
CREATE DATABASE <name-your-database> ; 
```

`desconectar terminal interativo do PostgreSQL` 
```
ctrl + c
```

- Criar arquivo .env 

```json
DATABASE_URL="postgresql://postgres:1234@localhost:5432/<name-your-database>"
URL_FROM_FRONT="http://localhost:5173"
SECRET_KEY="#%$*&**&&-09875$hddsa%TT"
SMTP_USER="motorsshopofficial@gmail.com"
SMTP_PASS="zfhshplcuubhrsrz"
```

-  Executar Migraçoens

```
npm run typeorm migration:run -- -d ./src/data-source
```

-  Instale a node modules

```
npm install
```

-  Rodar servidor
```
npm run dev
```

- Clone o repositório do front-end:
<a href='https://github.com/m6-grupo03-gustavo/front'>Repo</a>

```
git clone <URL-GITHUB>
```

-  Instale a node modules

```
npm install
```

-  Rodar servidor
```
npm run dev
```

# <h1 style="text-align: center; color:#b2d9f7;">Componentização</h1>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
Principais componentes:
</p>
<ul>
	<li>Botão: foram construídos dois componentes de botão, um de submit e outro de âncora. Ambos possuem 6 estilizações diferentes, que podem ser passadas via props.</li>
	<li>Input: responsável pela captura de dados do formulário, possui estilização do tipo outlined e recebe 4 campos via props (id, tipo, label e registro).</li>
	<li>Select: responsável pela captura de dados do formulário, possui estilização do tipo outlined e recebe 4 campos via props (id, options, label e registro).</li>
	<li>UserInitiais: este componente aparece em vários locais da aplicação, como no header quando o usuário está logado, nos cards da homepage e no momento de realizar comentários sobre um veículo. Ele exibe as iniciais de cada usuário acompanhadas de uma cor. Para que isso seja possível, uma vez que se tenha informação sobre um usuário a partir do seu nome, utilizamos as duas primeiras letras para formar sua sigla e a cor é definida pelo seu id. Com uma lógica de fazer o módulo do id dividido por 5, ficamos apenas com 6 opções de resultados que definem uma cor para cada usuário</li>
	<li>Showcase: O componente Showcase é responsável por renderizar uma lista na interface. Ele foi projetado para ser responsivo, adaptando-se  a ambientes de desktop quanto a dispositivos móveis. </li>
	<li>Card: o componente Card é versátil e estilizado de maneira uniforme, embora tenha uma renderização condicional dependendo da página em que está sendo usado (seja na página inicial ou no painel de controle). Isso significa que ele pode mudar seu conteúdo e aparência com base no contexto, proporcionando uma experiência de usuário mais dinâmica e interativa.</li>
</ul>


# <h1 style="text-align: center; color:#b2d9f7;">Bibliotecas</h1>
<ul>
	<li>Axios:  É uma biblioteca JavaScript que é usada para fazer solicitações HTTP a partir de navegadores e servidores Node.js. </li>
   	<a href='https://axios-http.com/docs/intro'> DOC</a>
	<li>React-hook-form: É uma biblioteca de formulários para React que visa minimizar o número de re-renderizações e melhorar o desempenho do formulário. </li>
   	<a href='https://www.react-hook-form.com/get-started/'> DOC</a>
	<li>React-router-dom:  É uma biblioteca de roteamento para aplicativos React que permite a criação de rotas em aplicativos de página única. Ele fornece componentes como Router, Route e Link para controlar a navegação e renderização de componentes em seu aplicativo.</li>
   	<a href='https://reactrouter.com/en/main/'> DOC</a>
	<li>Zod: É uma biblioteca de validação de esquema declarativa para TypeScript. Ele permite que você construa esquemas complexos e aninhados enquanto mantém a segurança dos tipos.</li>
   	<a href='https://zod.dev/'> DOC</a>
	<li>Styled-components: É uma biblioteca que permite usar bits do ES6 e CSS para estilizar seus aplicativos. Permite que você escreva código CSS real para estilizar seus componentes</li>
   	<a href='https://styled-components.com/docs'> DOC</a>
	<li>Swiper: Biblioteca de código gratuito e  aberto, com transições aceleradas por hardware e comportamento nativo. Neste projeto, usamos com o intuito de criar um banner de imagens no formato de carrossel.</li>
   	<a href='https://swiperjs.com/react'> DOC</a>
	<li>React-toastify: Permite adicionar notificações ao seu aplicativo com facilidade.</li>
   	<a href='https://fkhadra.github.io/react-toastify/introduction'> DOC</a>
	<li>React-icons: Inclui ícones populares em seu projeto.</li>
   	<a href='https://react-icons.github.io/react-icons/'> DOC</a>
	<li>Core: No contexto de desenvolvimento de software, pode se referir a um conjunto de bibliotecas ou módulos centrais que fornecem funcionalidades básicas para um aplicativo ou sistema entre o front-end e  back-end.</li>
	<li>bcryptjs:  É uma implementação otimizada do algoritmo bcrypt em JavaScript. Ele é usado para criptografar senhas de maneira segura.</li>
   	<a href='https://www.npmjs.com/package/bcryptjs/'> DOC</a>
	<li>Dotenv:  É um módulo zero-dependência que carrega variáveis de ambiente de um arquivo .env em process.env</li>
   	<a href='https://www.npmjs.com/package/dotenv'> DOC</a>
	<li>express: É um framework web minimalista e flexível para Node.js que fornece um conjunto robusto de recursos para aplicativos web e móveis</li>
   	<a href='https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction'> DOC</a>
	<li>jsonwebtoken:  Esta biblioteca ajuda você a trabalhar com JWTs (JSON Web Tokens) em seu aplicativo Node.js. JWTs são úteis para autenticação e troca segura de informações entre partes</li>
   	<a href='https://www.npmjs.com/package/jsonwebtoken'> DOC</a>
	<li>Jwt-decode:  Biblioteca que ajuda a decodificar tokens JWT (JSON Web Tokens) em navegadores e servidores Node.js. Ele não valida o token, apenas decodifica as informações contidas nele. Isso pode ser útil para extrair informações do token, como o ID do usuário ou outras reivindicações.</li>
   	<a href='https://www.npmjs.com/package/jwt-decode'> DOC</a>
	<li>typeorm: É um ORM (Object-Relational Mapper) para JavaScript e TypeScript que pode ser usado com várias bases de dados SQL (como MySQL, PostgreSQL etc.) e NoSQL. Ele suporta os recursos mais recentes do JavaScript (ES7/ES8) e fornece padrões adicionais para trabalhar com bancos de dados</li>
   	<a href='https://typeorm.io/'> DOC</a>
	<li>reflect-metadata: É uma biblioteca que permite adicionar e manipular metadados em objetos JavaScript. É um recurso experimental que é usado em conjunto com a funcionalidade de decoradores do TypeScript</li>
   	<a href='https://www.npmjs.com/package/reflect-metadata'> DOC</a>
</ul>
























