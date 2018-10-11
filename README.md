# gfn_frontend_challenge_ariel-oliveira

##Autor

Ariel G. M de Oliveira
arielgarabetti@gmail.com

##Instruções para rodar
1-Clonar o projeto.
2-Instalar o yarn/node na maquina caso não tenha.
3-Abrir o terminal do node, acessar o folder da pasta e rodar o comando "yarn install".
4-Caso você queira abrir o servidor de dev rodar o comando "yarn start" caso você queira buildar o bundle rodar o comando "yarn build".
5-Caso tenha usado yarn build o bundle e o html devem ter sido gerados na pasta dist do seu projeto.

##Considerações

-Fiz a aplicação em 3 dias, demorei 2 dias para fazer e 1 dia para configurar

-A parte de configuração demorou em torno de 5h o que é um tempo excessivo, porem me atrapalhei muito por não configurar webpack do zero com as ferramentas que sou acostumado a fazer a um tempo já.

-Perdi um pouco de tempo no desenvolvimento tambem com problemas de webpack que reparei que tinha só pra frente.

-A parte de desenvolvimento somando ambos os dias demorou em torno 8 a 10 horas.

-Fiquei na duvida se deveria implementar o leaflet padrão do js, ou se poderia usar uma lib de leaflet para react, e  se ainda sim estaria seguindo as recomendações, acabei usando a lib react-leaflet, por me parecer uma forma melhor de usar o leaflet no contexto.

-Acho que as const do leaflet poderiam ser colocadas em um arquivo de constantes se eu tivesse reuso em outros files ou se fosse algo de grande dificuldade para mudar mais para frente mas como não era o caso acabei deixando no component do map para não ter que particionar meu projeto em mais folders(como utils).

-Como coordenada inicial resolvi usar as coordenadas do primeiro item da lista.

-Sobre o mapa que escolhi usar, não tive muito criterio, acabei usando o que achei que ficou melhor visualmente e mais detalhado.

-Resolvi usar a biblioteca ant design, por 2 motivos principais, o primeiro é pra usar o sistema de grid deles,
o segundo é pois a biblioteca já tem dentro do seu componente de tabela algumas features pra implementar o sort facilmente e usar a tabela do jeito pedido.

-Caso você não queira que o devtool de redux funcione em prod, modificações no codigo seriam necessarias usando variaveis de ambiente.

-O loader de imagem pode receber modificações nas opções para camuflar endereços caso necessario.

-O uso de eslint foi algo opcional que gosto de usar, mas não inclui como necessario para compilar o webpack e nem usei algum webhook.

-Resolvi usar um recurso da lib antd no search onde o evento que manda o valor só é ativado no momento que você realiza a busca, achei que fica melhor nesse caso que o onChange.

-Fiz um sistema simples de busca com include, pois não considerei que era necessario algo mais flexivel e complexo já que não foi especificado no projeto.

-Pensei em fazer uma feature para quando clickar numa loja na tabela centralizar ela, mas como estava conflitando com minha implementação do mapa centralizar no primeiro item da lista, resolvi não mudar, porém com um pouco de reflexão seria possivel fazer de uma forma a abranger ambas features.

-Acho que se fosse uma aplicação real, uma extração de requisitos sobre como a posição do mapa funcionaria em diferentes casos seria algo legal.

-Tentei ir marcando as considerações conforme eu desenvolvia, mas sinto que talvez tenha perdido alguma consideração, mas qualquer duvida se me contatar não teria problema de responder a duvida.