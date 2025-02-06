# ConvertFlow.js

**ConvertFlow.js** é um script JavaScript leve e fácil de integrar para realizar testes A/B em botões e CTAs. Com ele, você pode modificar dinamicamente o texto e a cor dos botões com base em variações pré-definidas, ajudando a melhorar conversões de forma simples e eficaz.

## 🎯 Funcionalidades

- ✅ Testes A/B simples e sem configuração complexa.
- ✅ Definição de experimentos via parâmetros na URL.
- ✅ Alteração automática de cor e texto dos botões.
- ✅ Registro de cliques para análise de conversão.
- ✅ Código otimizado e assíncrono para não impactar o carregamento da página.

## 🛠 Como Usar

1. **Inclua o script no HTML:**

   Adicione o script em seu arquivo HTML, com os parâmetros `experimentId` e `elementId` configurados na URL:
```html
   <script src="https://seu-repositorio.github.io/experiment-sdk/convertflow.js?experimentId=exp-123&elementId=cta-button"></script>
```
2. **Adicione um botão com o ID correspondente:**

   Adicione o botão no HTML com o ID que você usou na URL do script (por exemplo, `cta-button`):
```html
   <button id="cta-button">Clique Aqui</button>
```
3. **O script ajustará automaticamente o botão** com base no experimento ativo. Você pode testar o funcionamento visitando a página e observando a alteração no botão.

## 📌 Changelog

- Implementação da lógica de variações dinâmicas.
- Definição de experimentos via query params.
- Simulação de API para obtenção de variações.
- Aplicação automática das variações no botão alvo.

🔹 **ConvertFlow.js v1.0.0 já está pronto para uso!** 🚀

## 🔧 Contribuindo

Se você quiser contribuir com o projeto, fique à vontade para abrir **issues** ou enviar **pull requests**. Caso tenha sugestões ou melhorias, não hesite em compartilhar!

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e envie (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra uma pull request.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
