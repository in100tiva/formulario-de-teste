
# Formulário de Contato

Este é um formulário de contato moderno desenvolvido em HTML, CSS e JavaScript. O formulário coleta informações como nome, número de telefone e e-mail do usuário, com validações de campo para garantir a integridade dos dados. Após o envio bem-sucedido, os dados podem ser tratados conforme necessário, como envio para um servidor ou armazenamento em um banco de dados.

## Recursos

- **Formulário estruturado em HTML** com campos para Nome, Número de Telefone e E-mail.
- **Estilo moderno aplicado com CSS**, incluindo layout claro e intuitivo.
- **Validações em JavaScript** para garantir que:
  - O campo de Nome não esteja vazio.
  - O campo de Número de Telefone contenha apenas números.
  - O campo de E-mail esteja no formato correto de e-mail.
- **Mensagens de erro** exibidas em cada campo caso a validação falhe.
- **Botão de envio** que verifica as validações e exibe uma mensagem de sucesso se todas estiverem corretas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Normalize.css (biblioteca de reset de estilos)

## Estrutura de Diretórios

```plaintext
project/
├── index.html
├── js/
│   └── script.js
├── css/
│   ├── main.css
│   ├── base/
│   │   ├── _reset.css
│   │   └── _typography.css
│   ├── components/
│   │   ├── _form.css
│   │   ├── _buttons.css
│   │   └── _messages.css
│   ├── utilities/
│   │   ├── _variables.css
│   │   └── _animations.css
│   └── vendor/
│       └── _normalize.css
└── README.md
```

## Instalação

1. Clone este repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador da web.

## Uso

1. Preencha os campos do formulário com seu nome, número de telefone e e-mail.
2. Certifique-se de que os dados inseridos estejam corretos de acordo com as validações aplicadas.
3. Clique no botão "Enviar" para enviar o formulário.
4. Se todas as validações forem atendidas, uma mensagem de sucesso será exibida.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma nova issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
