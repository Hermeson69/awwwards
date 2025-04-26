# GUIA DE INSTALAÇÃO DO REACT COM O VITE

Este guia detalha como configurar um projeto React usando o Vite, com a integração do **Tailwind CSS v4** e do **GSAP** para animações. Siga os passos abaixo para configurar seu ambiente de desenvolvimento.

---

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:
- **Node.js** (versão 18 ou superior recomendada). Baixe em [nodejs.org](https://nodejs.org).
- **Visual Studio Code** (ou outro editor de código de sua preferência).
- Um terminal (como o integrado no VSCode ou o terminal do sistema operacional).

---

## 1. Crie o Projeto com Vite e React

Primeiro, crie uma pasta na sua área de trabalho para o projeto. Abra o terminal e navegue até a pasta criada usando o comando:

```sh
cd caminho/para/sua/pasta
```

**OBS.:** O caminho da pasta pode ser copiado do explorador de arquivos.

### 1.1. Instalação do Vite

No terminal, execute o seguinte comando para criar um projeto React com Vite:

```sh
npm create vite@latest nome-do-seu-projeto -- --template react
```

Substitua `nome-do-seu-projeto` pelo nome desejado para o projeto. Este processo pode demorar alguns segundos.

Após a criação, navegue até a pasta do projeto e abra o projeto no VSCode:

```sh
cd nome-do-seu-projeto
code .
```

**OBS.:** Certifique-se de que o VSCode está configurado para ser aberto com o comando `code`.

### 1.2. Finalização da Instalação

No VSCode, abra o terminal integrado (`Ctrl + Shift + \``) e execute os seguintes comandos para instalar as dependências e iniciar o servidor de desenvolvimento:

```sh
npm install
npm run dev
```

O comando `npm run dev` iniciará o servidor local, e você poderá acessar o projeto em `http://localhost:5173` (ou outra porta, se especificada).

---

## 2. Instalação e Configuração do Tailwind CSS v4

O **Tailwind CSS v4** introduziu mudanças significativas, como a remoção do arquivo `tailwind.config.js` e a integração nativa com Vite. Siga os passos abaixo para configurá-lo.

### 2.1. Instale o Tailwind CSS

No terminal do VSCode, execute:

```sh
npm install tailwindcss @tailwindcss/vite
```

### 2.2. Configure o Vite para usar Tailwind

Edite o arquivo `vite.config.js` na raiz do projeto para incluir o plugin do Tailwind CSS:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 2.3. Configure o arquivo CSS

Na pasta `src`, crie (se ainda não existir) o arquivo `index.css` e adicione o seguinte conteúdo:

```css
@import "tailwindcss";
```

Você pode adicionar configurações personalizadas usando diretivas como `@theme` ou `@layer`, se necessário. Exemplo:

```css
@import "tailwindcss";

@theme {
  --color-primary: #1e40af;
  --color-secondary: #9333ea;
}

@layer utilities {
  .custom-class {
    @apply bg-primary text-white;
  }
}
```

### 2.4. Integre o CSS no projeto

Certifique-se de que o arquivo `index.css` está importado no seu projeto. No arquivo `src/main.jsx`, verifique se há uma linha como:

```jsx
import './index.css'
```

Exemplo completo de `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 3. Instalação e Configuração do GSAP

O **GSAP** (GreenSock Animation Platform) é uma biblioteca poderosa para animações em JavaScript. Vamos integrá-lo ao projeto React.

### 3.1. Instale o GSAP

No terminal, execute:

```sh
npm install gsap
```

### 3.2. Uso do GSAP no React

Crie um componente React que utiliza o GSAP. Por exemplo, edite o arquivo `src/App.jsx` para incluir uma animação simples:

```jsx
import { useEffect } from 'react'
import { gsap } from 'gsap'
import './App.css'

function App() {
  useEffect(() => {
    gsap.to('.box', {
      x: 100,
      rotation: 360,
      duration: 1,
      ease: 'power2.out',
    })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="box w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  )
}

export default App
```

**Explicação:**
- O `useEffect` garante que a animação seja executada após o componente ser montado.
- A classe `box` é animada com GSAP, movendo-se 100 pixels para a direita e rotacionando 360 graus.
- As classes do Tailwind (`flex`, `items-center`, etc.) são usadas para estilizar o contêiner.

### 3.3. Dicas para GSAP
- Use o **GSAP Context** para gerenciar animações complexas e evitar vazamentos de memória em componentes React.
- Consulte a [documentação oficial do GSAP](https://gsap.com/docs/v3/) para recursos avançados, como timelines e scroll triggers.

---

## 4. Comandos Úteis

- **Verificar pacotes desatualizados:**
  ```sh
  npm outdated
  ```

- **Atualizar todos os pacotes:**
  ```sh
  npm update
  ```

- **Iniciar o servidor de desenvolvimento:**
  ```sh
  npm run dev
  ```

- **Compilar para produção:**
  ```sh
  npm run build
  ```

---

## 5. Estrutura do Projeto

Após seguir os passos acima, a estrutura do seu projeto será semelhante a:

```
nome-do-seu-projeto
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

- **`src/index.css`**: Contém a importação do Tailwind CSS e estilos globais.
- **`src/App.jsx`**: Componente principal onde você pode adicionar lógica e animações com GSAP.
- **`vite.config.js`**: Configurações do Vite, incluindo o plugin do Tailwind.

---

## 6. Testando o Projeto

1. Execute `npm run dev` e abra `http://localhost:5173` no navegador.
2. Verifique se:
   - O Tailwind CSS está funcionando (as classes como `bg-blue-500` devem aplicar estilos corretamente).
   - A animação do GSAP está ativa (a `div.box` deve se mover e rotacionar).
3. Faça alterações em `App.jsx` ou `index.css` para testar a reatividade do Vite.

---

## 7. Solução de Problemas

- **Erro ao instalar dependências**: Certifique-se de que o Node.js está atualizado e tente `npm install` novamente.
- **Tailwind não aplica estilos**: Verifique se `index.css` está importado em `main.jsx` e se o plugin do Tailwind está configurado em `vite.config.js`.
- **GSAP não anima**: Confirme que o GSAP está importado corretamente e que o seletor (ex.: `.box`) corresponde a um elemento no DOM.
- **Porta ocupada**: Se `npm run dev` falhar, tente `npm run dev -- --port 3000` para usar uma porta diferente.

---

## 8. Próximos Passos

- Explore a [documentação do Tailwind CSS v4](https://tailwindcss.com/docs) para personalizar temas e criar layouts avançados.
- Consulte a [documentação do GSAP](https://gsap.com/docs/v3/) para criar animações mais complexas.
- Adicione outros pacotes, como **React Router** para navegação ou **Styled-Components** para estilos adicionais, se necessário.

Se precisar de mais detalhes ou exemplos, consulte os arquivos em `docs/` ou peça ajuda!