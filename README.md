# Awwwards Zentry

Bem-vindo ao **Awwwards Zentry**, uma plataforma web onde criativos podem compartilhar seus projetos, receber avaliações e se inspirar em outros trabalhos. Nosso objetivo é criar uma comunidade vibrante de designers, desenvolvedores e artistas, promovendo feedback construtivo e celebrando a excelência criativa.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Como Configurar](#como-configurar)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

O **Awwwards Zentry** é uma aplicação web desenvolvida com **React**, **Vite**, **Tailwind CSS v4** e **GSAP** para animações fluidas e interativas. Inspirada em plataformas como o Awwwards, a aplicação oferece um espaço para criativos exibirem seus projetos e receberem avaliações, com foco em usabilidade, design moderno e acessibilidade.

## Funcionalidades

- **Upload de Projetos**: Interface simples para compartilhar projetos com suporte a imagens, vídeos e links.
- **Sistema de Avaliação**: Usuários podem avaliar projetos com notas (1 a 5) e comentários detalhados.
- **Animações Interativas**: Efeitos visuais suaves criados com GSAP para uma experiência envolvente.
- **Design Responsivo**: Estilização moderna e adaptável com Tailwind CSS v4.
- **Pesquisa e Filtros**: Busca por projetos com filtros por categoria, popularidade ou data de publicação.

## Como Configurar

Para saber como configurar o projeto localmente, consulte o guia detalhado em [Instalação](docs/install.md).

Exemplo de um componente com Tailwind CSS e GSAP:

```jsx
import { useEffect } from 'react'
import { gsap } from 'gsap'

function ProjectCard() {
  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className="project-card p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800">Meu Projeto</h2>
      <p className="text-gray-600">Descrição do projeto criativo.</p>
    </div>
  )
}

export default ProjectCard
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).