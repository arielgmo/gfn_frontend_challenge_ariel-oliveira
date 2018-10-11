# gfn_frontend_challenge_ariel-oliveira

##Considerações

-Fiquei na duvida se deveria implementar o leaflet padrão do js, ou se poderia usar uma lib de leaflet para react, ainda seguindo as recomendações, acabei usando uma lib de react leaflet, por conta de me parecer uma forma melhor de usar o leaflet no contexto.

-Acho que as const do leaflet poderiam ser colocadas em um arquivo de constantes se eu tivesse reuso em outros files ou se fosse algo de grande dificuldade para mudar mais para frente então acabei deixando no component do map para não ter que particionar meu projeto em mais folders(como utils).

-Como coordenada inicial resolvi usar as coordenadas do primeiro item da lista.

-Resolvi usar a biblioteca ant design, por 2 motivos principais, o primeiro é pra usar o sistema de grid deles,
o segundo é pois a biblioteca já tem dentro do seu componente de tabela algumas features pra implementar o sort facilmente e usar a tabela do jeito pedido.

-Caso você não queira que o devtool de redux funcione em prod, modificações no codigo seriam necessarias.

-O uso de eslint foi algo opcional que gosto de usar, mas não inclui como necessario para compilar o webpack e nem usei algum webhook.

-Resolvi usar um recurso da lib antd no search onde o evento que manda o valor só é ativado no momento que você realiza a busca, achei que fica melhor nesse caso que o onChange.

-Fiz um sistema simples de busca com include, pois não considerei que era necessario algo mais flexivel e complexo já que não foi especificado no projeto.