
## GUIA DE INSTALAÇÃO DO REACT COM O VITE

Para a instalação do Vite, primeiro crie uma pasta na sua área de trabalho. Em seguida, abra o terminal e navegue até a pasta criada usando o comando `cd` seguido do caminho da pasta. 

**OBS.:** Esse caminho pode ser obtido no explorador de arquivos.

### 1. Instale o Vite e o React

Primeiro, acesse o site [Vite Guide](https://vite.dev/guide/).

**OBS.:** Para o React funcionar, é necessário ter o Node.js instalado na sua máquina.

#### 1.1. Instalação do Vite

No terminal, execute o seguinte comando:

```sh
npm create vite@latest Nome-do-seu-projeto -- --template react
```

Esse processo pode demorar um pouco. Após a conclusão, digite no terminal:

```sh
code .
```

**OBS.:** Certifique-se de estar na mesma pasta do projeto.

### 2. Finalização da Instalação no VSCode

Como você já criou uma pasta e dentro dela está o seu projeto, abra o terminal no VSCode com `Ctrl + Shift + '` e execute os seguintes comandos:

```sh
cd 'nome_da_pasta_do_projeto'
npm install
npm run dev
```

### 2.1 Instalação do TailWind 4.0

Devido a ultima atualização do Tailwind a 4.o ter mudado tudo, aqui está uma guia rapido de instalação dessa nova versão. Abra o terminal no VSCode com `Ctrl + Shift + '` e execute os comandos:
```sh
npm install tailwindcss @tailwindcss/vite
```

Após dar esse comando na sua /src crie um `index.css` para que nele coloque o:
```css
@import "tailwindcss";
```

nessa nova versão o arquivo tailwind.conf.js desaparece e temos que fazer no index o que poderia ser feito lá, usando-se das propriedades `@base`, `@theme` e etc já do proprio tailwind.

OBS.: antes do passo acima modifique o aquivo raiz do vite incluindo o tailwind:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' <-
export default defineConfig({
  plugins: [
    tailwindcss(), <-
  ],
})
```

### 3. Comandos Úteis
Esse comando vai ver se todos os seus Package´s estão nas versões mais recentes:
```sh
npm outdated
```
Caso não estejam só rodar um:
```sh
npm update
```
Dessa forma, atualizando todos de uma vez.

### 4. Styled-Components

Estrutura do projeto:

```
Projeto
├── node_modules
├── public
└── src
    ├── assets
    ├── Index.css <- onde ficara o @tailwind import
    ├── App.jsx
    └── Main.jsx
```

Dentro da pasta `Index.css` haverá apenas um arquivo com os estilos "globais" da sua aplicação:

```ts
@import "tailwindcss";
@thame
@layer
```