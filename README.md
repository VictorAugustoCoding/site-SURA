# Central de Conhecimento Sura

Este projeto é uma aplicação web interna para centralizar informações e processos das diferentes áreas da Sura. Foi desenvolvido para facilitar o onboarding de novos colaboradores e servir como referência rápida para processos internos.

## Como executar

O projeto foi desenvolvido em HTML, CSS e JavaScript puro para simplicidade. Não requer instalação de dependências ou build process.

### Opção 1: Live Server (VS Code)

1. Instale a extensão "Live Server" no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com botão direito no arquivo `index.html`
4. Selecione "Open with Live Server"

### Opção 2: Servidor local simples

Se você tem Python instalado:

```bash
python -m http.server 8000
```

Ou com Node.js:

```bash
npx serve .
```

## Estrutura do projeto

```
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── script.js           # Lógica e interatividade
└── README.md           # Este arquivo
```

## Funcionalidades

A aplicação organiza informações de 12 áreas da empresa:

- Operações, Sinistros, Emissões, Negócios
- Transporte, Automóvel, Residencial
- Financeiro, Tesouraria, Tecnologia
- Talento Humano, SOX

Para cada área, há quatro seções:

- **Onboarding**: Guia para novos colaboradores
- **Informações**: Processos e responsabilidades detalhadas
- **Glossário**: Termos técnicos específicos da área
- **Quem Procurar**: Contatos organizados por especialidade

## Personalização

### Alterar conteúdo

O conteúdo está centralizado no objeto `knowledgeAreas` no arquivo `script.js`. Para adicionar uma nova área ou modificar informações existentes, edite este objeto.

### Modificar visual

As cores e estilos estão no arquivo `styles.css`. As cores principais da Sura estão definidas no início do arquivo.

### Adicionar nova área

1. Adicione um botão na sidebar no `index.html`
2. Inclua os dados da área no objeto `knowledgeAreas` em `script.js`
3. Siga a estrutura existente para manter consistência

## Tecnologias utilizadas

- HTML5 para estrutura
- CSS3 para estilos e responsividade
- JavaScript ES6 para interatividade
- Font Awesome (via CDN) para ícones

## Compatibilidade

Testado nos principais navegadores modernos (Chrome, Firefox, Safari, Edge). A aplicação é responsiva e funciona em dispositivos móveis.

## Observações

Este é um projeto interno focado em simplicidade e facilidade de manutenção. O código foi mantido direto e sem frameworks complexos para facilitar a apresentação, mas também foi feito uma versão em React + Tailwind CSS.

