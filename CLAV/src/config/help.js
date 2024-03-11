const help = {
  ListaConsolidada:
    '<p>A "Lista Consolidada para a classificação e avaliação da informação pública" é o referencial disponibilizado ' +
    "pela Direção-Geral do Livro, dos Arquivos e das Bibliotecas para servir de base à elaboração de instrumentos de gestão " +
    "da informação, nomeadamente planos de classificação e tabelas de seleção. " +
    "Este referencial apresenta uma estrutura hierárquica de classes que representam as funções e atividades executadas pela " +
    "Administração Pública. " +
    "Os processos de negócio são representados como classes de 3º nível, enquadrados em funções (classes de 1º nível) e  " +
    "subfunções (2º nível).  " +
    "As classes são constituídas por elementos informativos, agrupados por zonas, que as identificam e descrevem. Nas " +
    "classes de 3º e 4º nível (subdivisão do processo de negócio para efeitos de avaliação), estes elementos destinam-se " +
    "também a contextualizar e avaliar a informação.</p>" +
    "<p>Para aceder ao catálogo dos processos de negócio selecione a opção CONSULTAR.</p>" +
    "<p>Para propor uma nova classe para a Lista Consolidada selecione a opção <b>CRIAR CLASSE</b>. " +
    "Deve estar <b>registado na CLAV</b> para aceder a esta funcionalidade. Consulte as “Instruções para criação assistida de " +
    "classes na LC em <b>Formulários e instruções para a CLAV</b>.</p>" +
    "<p>Para <b>propor uma  alteração</b> a uma classe da Lista Consolidada selecione a opção <b>ALTERAR CLASSE</b>. " +
    "Deve estar <b>registado na CLAV</b> para aceder a esta funcionalidade.</p>",
  TabelasSelecao:
    "<p>Uma tabela de seleção é um instrumento utilizado pelas entidades para a gestão da informação. " +
    "Permite organizar e estruturar a informação desde o momento da sua produção, através da atribuição de um código de " +
    "classificação. A esse código de classificação estão associadas as decisões de avaliação, i.e., o período de tempo que " +
    "deve manter a informação (prazo de conservação administrativa), o destino a aplicar findo esse prazo (conservação " +
    "permanente ou eliminação) e a responsabilização pela guarda da informação de conservação permanente.</p>" +
    "<p>As tabelas de seleção podem ser organizacionais (de uma entidade ou de uma tipologia de entidades) ou " +
    "pluriorganizacionais (de um conjunto de entidades, por exemplo de âmbito ministerial). " +
    "Constituem as fontes de legitimação para a eliminação da informação pública.</p>" +
    "<p>Para aceder ao catálogo de tabelas de seleção aprovadas selecione a opção CONSULTAR. " +
    "As tabelas de seleção encontram-se organizadas por fonte de legitimação: TS publicadas em Portaria de Gestão de " +
    "Documentos (PGD)  ou proveniente de Relatório de Avaliação de Documentação Acumulada (RADA).</p>" +
    "<p>Para propor uma tabela de seleção derivada da Lista Consolidada selecione uma das opções: " +
    "<ul><li>CRIAR, para a criação assistida online;</li>" +
    "<li>IMPORTAR FICHEIRO, para submeter uma tabela criada offline, a partir de um ficheiro pre-preenchido " +
    "disponibilizado no separador Documentação técnica de apoio, em Formulários e instruções.</li></ul></p>" +
    "<p><b>Deve estar registado na CLAV para aceder a estas funcionalidades.</b></p>" +
    "<p><b>Consulte as instruções em Formulários e instruções</b></p>",
  RADA:
    "<h5>Relatórios de Avaliação de Documentação Acumulada</h5>" +
    "<p>Um Relatório de Avaliação de Documentação Acumulada (RADA) é um instrumento que caracteriza a documentação" +
    " acumulada, tendo em vista a sua avaliação através da determinação do seu prazo de conservação" +
    " administrativa (PCA) e do seu destino final (DF).</p>" +
    "<p>Destina-se à documentação que ainda não foi objeto de avaliação arquivística, i.e., não abrangida" +
    " por uma portaria de gestão de documentos.</p>" +
    "<p>Um RADA integra um relatório expositivo e uma tabela de seleção.</p>" +
    "<p>Um relatório expositivo do RADA consiste na descrição sumária do universo documental avaliado.</p>" +
    "<p>Uma tabela de seleção do RADA consiste numa estrutura hierárquica de classes que reflete a organização" +
    " da documentação. Integra áreas orgânico e/ou funcionais e series e subséries documentais, com as" +
    " respetivas descrições de contextualização para avaliação. O último nível, série ou subsérie," +
    " fixa as decisões de avaliação, i.e., o período de tempo que deve manter a informação (prazo de" +
    " conservação administrativa), o destino a aplicar findo esse prazo (conservação permanente ou eliminação).</p>" +
    "<p>Complementarmente, pode ainda integrar a identificação das unidades de instalação a que se aplica" +
    " a tabela de seleção.</p>" +
    "<p>Para aceder ao catálogo dos RADA e respetivas tabelas de seleção aprovados pela DGLAB e" +
    "disponibilizados na CLAV selecione a opção CONSULTAR.</p>" +
    "<p>Para propor um RADA selecione a opção CRIAR.</p>" +
    "<p>Deve estar registado na CLAV para aceder à funcionalidade CRIAR. Consulte as instruções em Formulários" +
    "e instruções.</p>" +
    "<h6>CONSULTAR</h6>" +
    "<p>As tabelas de seleção encontram-se organizadas em dois conjuntos:" +
    "<ol>" +
    "<li>RADA - Relatório de Avaliação de Documentação Acumulada produzidos e aprovados fora da plataforma" +
    "CLAV.</li>" +
    "<li>RADA/CLAV - Relatório de Avaliação de Documentação Acumulada produzidos e aprovados através da" +
    "plataforma CLAV.</li>" +
    "</ol></p>" +
    "<h6>CRIAR</h6>" +
    "<p>A criação de um RADA é efetuada em três etapas:" +
    "<ol>" +
    "<li>Informação Geral, em que se indica o Título do RADA e as entidades responsáveis pela" +
    "apresentação deste instrumento;</li>" +
    "<li>Relatório expositivo, efetuado através de preenchimento de formulário online, com criação assistida," +
    "ou através de submissão de ficheiro preenchido previamente offline, a partir de formulário disponibilizado.</li>" +
    "<li>Tabela de seleção, efetuada igualmente com possibilidade de preenchimento de formulário online" +
    "ou de submissão de:" +
    "<ul>" +
    "<li>ficheiro para as classes relativas às áreas orgânico-funcional e às séries/subséries e," +
    "quando aplicável,</li>" +
    "<li>ficheiro para as unidades de instalação.</li>" +
    "</ul></ol></p>",
  Entidades:
    "Entidades públicas que intervêm nos processos de negócio (classes de 3º nível) da " +
    "Lista Consolidada. Podem integrar uma ou mais tipologias de entidades.",
  TipologiasIntro:
    "Forma de agrupamento de entidades que intervêm nos processos de negócio " +
    "(classes de 3º nível) da Lista Consolidada. ",
  LegislacaoIntro:
    "Legislação que regula os processos de negócio e enquadra os respetivos prazos " +
    "de conservação administrativa (PCA) e destino final (DF).",
  TermosIndice:
    "Termos que detalham o âmbito de aplicação dos processos de negócio e apoiam a recuperação da informação." +
    " Aplica-se às classes de 3º e 4º nível.",
  API:
    "Acesso à página de documentação da API de dados onde poderá consultar toda a informação sobre a mesma " +
    "experimentar as várias operações (página gerada a partir da especificação em Swagger).",
  PermissoesAcesso:
    "Possui a informação das operações da interface e da API de dados que podem ser acedidas por determinado utilizador",
  VocabulariosControlados:
    "Gestão dos Vocabulários Controlados utilizados na aplicação.",
  AutosEliminacao:
    "Autos de eliminação produzidos ao abrigo de tabela de seleção inserida em Portaria de gestão" +
    " de documentos ou Relatório de avaliação de documentação acumulada e submetida à <strong>DGLAB</strong> para verificação de conformidade." +
    "<ul><li>Para a criação assistida de autos de eliminação, selecione a opção <strong>CRIAR</strong></li>" +
    "<li>Para submeter autos de eliminação deverá selecionar a opção <strong>IMPORTAR</strong>.</li></ul>",
  Invariantes:
    "Conjunto de invariantes que testam situações de erro e identificam os PNs onde estas ocorrem.",
  Classe: {
    BlocoDescritivo:
      "Conjunto de campos que descrevem a classe. Aplica-se às classes de 1º, 2º, 3º e 4º nível.",
    BlocoContexto:
      "Conjunto de campos com informação sobre os intervenientes, os PN relacionados e legislação" +
      " e que tem por objetivo enquadrar as decisões de avaliação. Aplica-se às classes de 3º nível.",
    BlocoDecisoes:
      "Conjunto de campos que contem as decisões de avaliação, isto é, o prazo de conservação " +
      "administrativo (PCA), a sua forma de contagem, o destino final (DF) e as respetivas " +
      "justificações. Aplica-se às classes de 3º e 4º nível. ",
    Campos: {
      Estado:
        "Indicação do estado de atividade da classe:  ativo ou inativo.  Aplica-se às classes de 1º, 2º, 3º e 4º nível.",
      Pai:
        "Classe que se encontra imediatamente acima,  com indicação do respetivo código e  título. Aplica-se às classes de 2º, 3º e 4º nível.",
      Descendencia:
        "Classe que se encontra imediatamente abaixo,  com indicação do respetivo código e título. Aplica-se às classes de 1º, 2º e 3º nível.",
      Codigo:
        "Sistema numérico que identifica univocamente a classe. Aplica-se às classes de 1º, 2º, 3º e 4º nível.",
      Titulo:
        "Designação da classe. Aplica-se às classes de 1º, 2º, 3º e 4º nível.",
      Descricao:
        "Informação descritiva do âmbito da classe. Aplica-se às classes de 1º, 2º, 3º e 4º nível.",
      NotasAp:
        "Informação que especifica o âmbito de aplicação da classe. Aplica-se às classes de 1º, 2º e 3º nível.",
      ExemplosNotasAp:
        "Informação que exemplifica o âmbito de aplicação da classe. Aplica-se às classes de 1º, 2º e 3º  nível.",
      NotasEx:
        "Informação remissiva para outras classes com conteúdos similares ou sequenciais, auxilia a delimitar a aplicação da classe. Aplica-se às classes de 1º, 2º e 3º nível.",
      TermosIndice:
        "Termos que detalham o âmbito de aplicação dos processos de negócio e apoiam a recuperação da informação. Aplica-se às classes de 3º ou 4º nível.",
      TipoProcesso:
        "Indicação do tipo de processo: processo comum  (ocorre em qualquer entidade pública) ou específico (só ocorre em algumas entidades). Aplica-se  às classes de 3º nível.",
      ProcessoTransversal:
        "Indicação da transversalidade, ou não, do processo, isto é, se resulta da intervenção de várias entidades" +
        " ou se decorre numa só entidade, Aplica-se às classes de 3º nível.",
      Donos:
        "Nome da(s) entidade(s) responsável(eis) pela condução  do processo de negócio, pelo respetivo produto final e pela guarda do produto final. Aplica-se às classes de 3º nível.",
      Participantes:
        "<p>Nome da(s) entidade(s) que participam e contribuem para o produto final, não sendo responsáveis " +
        "pela condução do processo de negócio. Aplica-se às classes de 3º nível.</p>\n<p>Os tipos de " +
        "participação num processo de negócio são os seguintes:<dl>\n<dt>Apreciar:</dt><dd> intervenção no âmbito " +
        "da emissão de opinião (parecer, proposta, entre outros). Pode revestir caráter vinculativo.<dd>" +
        "\n<dt>Assessorar:</dt><dd>  intervenção de apoio pontual ou global. Inclui as ações de assessoria, de " +
        "consultoria, entre outras.<dd> \n<dt>Comunicar:</dt><dd> intervenção para a comunicação, notificação da ação " +
        "ou produto.<dd> \n<dt>Decidir:</dt><dd> intervenção deliberativa, individual ou coletiva, imediata ou decorrente " +
        "de conjugação de intenções ou votação. Inclui ações de direção, coordenação, entre outras.<dd>" +
        "\n<dt>Executar:</dt><dd> intervenção para a realização da ação. Pode ser uma execução global ou parcial.<dd>" +
        "\n<dt>Iniciar:</dt><dd> intervenção que tem por objetivo desencadear a ação mas não implica a responsabilidade" +
        " pela sua execução.<dd></dl></p>",
      ProcessosRelacionados:
        "<p>Processos que se relacionam com o processo descrito, com indicação do código e respetivo " +
        "título e do tipo de relação. Aplica-se às classes de 3º nível.</p>" +
        "\n<p>Os tipos de relação entre processos de negócio são os seguintes:<dl>" +
        "\n<dt>Antecessor de:</dt><dd> quando o output de um PN é o input de outro PN. O PN descrito é,  por conseguinte, " +
        "o antecessor ou o output para o PN aqui selecionado.<dd>" +
        "\n<dt>Sucessor de:</dt><dd> quando o output de um PN é o input de outro PN. O PN descrito é,  por conseguinte, " +
        "o sucessor ou o intput para o PN aqui selecionado.<dd>" +
        "\n<dt>Complementar de:</dt><dd> quando dois PN decorrem de forma paralela, adicionando informação complementar " +
        "um ao outro, mas nunca se tocam.<dd>" +
        "\n<dt>Cruzado com:</dt><dd> quando existe interseção de dois PN em determinado momento, seguindo " +
        "percursos distintos.<dd>" +
        "\n<dt>Síntese de:</dt><dd> quando um PN (ou uma etapa de um PN) condensa a informação de outro (ou uma etapa de " +
        "outro PN). O PN descrito é, por conseguinte, uma síntese do PN aqui selecionado.<dd>" +
        "\n<dt>Sintetizado por:</dt><dd> quando um PN (ou uma etapa de um PN) condensa a informação de outro (ou uma etapa " +
        "de outro PN). O PN descrito é, por conseguinte, sintetizado pelo PN aqui selecionado.<dd>" +
        "\n<dt>Suplemento de:</dt><dd> quando um PN recolha e analisa informação contida noutros PN, cotejando-os entre si, " +
        "mas não lhes adicionando conteúdo informativo. O PN descrito é um suplemento do PN aqui selecionado, " +
        "isto é, o primeiro recolhe e analisa informação existente no segundo.<dd>" +
        "\n<dt>Suplemento para:</dt><dd> quando um PN recolha e analisa informação contida noutros PN, cotejando-os entre si, " +
        "mas não lhes adicionando conteúdo informativo. O PN descrito é um suplemento para o PN aqui selecionado, " +
        "isto é, contém informação que o segundo vai necessitar de recolher e analisar.<dd></dl></p>",
      Legislacao:
        "Legislação que regula os processos de negócio e enquadra os respetivos prazos de conservação administrativa " +
        "(PCA) e destino final (DF). Aplica-se às classes de 3º.",
      Prazo:
        "Prazo de conservação administrativa (PCA), período de tempo, registado em anos, durante o qual a informação " +
        "/ documentação tem de ser conservada. Aplica-se às classes de 3º ou 4º nível.",
      Notas:
        "Informação específica para PN cujo PCA reflete o do PN que o origina. Aplica-se às classes de 3º e 4º nível.",
      FormaContagem:
        "<p>Instrução relativa à ação / momento que origina a contagem do prazo. Aplica-se às classes de 3º " +
        "ou 4º nível.</p>" +
        "\n<p>As formas de contagem do prazo, antecedidas do respetivo código, são as seguintes:<dl>" +
        "\n<dt>F01 - Conforme disposição legal:</dt><dd>  o momento em que se inicia a contagem é " +
        "determinado por lei.</dd>" +
        "\n<dt>F02 - Data de início do procedimento:</dt><dd> o momento em que se inicia a contagem é " +
        "determinado pela " +
        "abertura da agregação ou de produção do primeiro ato do procedimento.</dd>" +
        "\n<dt>F03 – Data de emissão do título:</dt><dd> o momento em que se inicia a contagem é determinado pela " +
        "produção do documento de validação ou reconhecimento.</dd>" +
        "\n<dt>F04 – Data de conclusão do procedimento:</dt><dd> o momento em que se inicia a contagem é determinado " +
        "pelo encerramento da agregação ou de produção do documento / informação relativo à última ação " +
        "ou último ato do procedimento.</dd>" +
        "\n<dt>F05 – Data de cessação da vigência:</dt><dd> o momento em que se inicia a contagem é determinado pelo " +
        "término da produção de efeitos do procedimento. Este término pode ocorrer por caducidade, " +
        "revogação, cancelamento, extinção ou decisão contenciosa.</dd>" +
        "\n<dt>F06 – Data de extinção da entidade sobre que recai o procedimento:</dt><dd> o momento em que se inicia a " +
        "contagem é determinado pelo registo do fim da entidade. Aplica-se a pessoas (momento do óbito), " +
        "empresas, bens e atividades.</dd>" +
        "\n<dt>F07 – Data de extinção do direito sobre o bem:</dt><dd> o momento em que se inicia a contagem é determinado " +
        "pelo cessamento do direito sobre o bem, A extinção do direito sobre o bem pode acontecer por alienação " +
        "(transmissão ou transação), por abate ou desaparecimento do bem, pela venda de imóveis, pela cessação da " +
        "afetação, da reserva de uso, do direito de superfície, do arrendamento ou cedência.</dd>" +
        "</dl></p>",
      SubformaContagem:
        "Informação complementar da forma de contagem do prazo  <i>Conforme disposição legal (F01)</i> " +
        "referente às datas ou à ação que determina o momento a partir do qual é iniciada a contagem do " +
        "prazo de conservação administrativa fixado na tabela. Aplica-se às classes de 3º ou 4º nível.",
      JustificacaoPCA:
        "<p>Indicação dos critérios que fundamentam o prazo de conservação administrativa (PCA). " +
        "Aplica-se às classes de 3º ou 4º nível.</p>" +
        "\n<p>Os critérios podem ser:<dl>" +
        "\n<dt>Critério de utilidade administrativa:</dt><dd> critério que advém da relação suplementar entre PN " +
        "sendo necessário guardar o tempo necessário para dar sequência ao PN com o qual está relacionado.</dd>" +
        "\n<dt>Critério legal:</dt><dd> critério que advém da existência de diploma(s) legal(ais).</dd>" +
        "\n<dt>Critério gestionário:</dt><dd> critério que advém do prazo para imputação de responsabilidade pela " +
        "gestão estratégica, decorrente de escrutínio público (eleições) ou da não recondução no mandato.</dd></dl></p>",
      DF:
        "Indicação do destino final (DF) da informação / documentação, depois de cumprido o prazo de conservação " +
        "administrativo, podendo ser: Conservação (C), Conservação parcial (CP), Eliminação  (E) e Não especificado " +
        "(NE). Aplica-se às classes de 3º ou 4º nível.",
      NotasDF:
        "Informação específica para PN cujo DF reflete o do PN que o origina. Aplica-se às classes de 3º ou 4º nível.",
      JustificacaoDF:
        "<p>Indicação dos critérios que fundamentam o destino final (DF). Aplica-se às classes de 3º ou 4º " +
        "nível.</p>" +
        "\n<p>Os critérios podem ser:<dl>" +
        "\n<dt>Critério de densidade informacional:</dt><dd> critério que advém da relação de síntese entre PN, " +
        "conservando-se a síntese e eliminando-se a restante informação.</dd>" +
        "\n<dt>Critério da complementaridade informacional:</dt><dd> critério que advém da relação complementar entre " +
        "PN, valorizando-se a conservação da informação dos dois PN.</dd>" +
        "\n<dt>Critério legal:</dt><dd> critério que advém " +
        "da existência de diploma(s) legal(ais).</dd></dl></p>",
    },
  },
  TS: {
    Campos: {
      fonteLegitimacao:
        "Diploma ou ato administrativo que autoriza e legitima uma Tabela de Seleção",
    },
    Consulta: {
      TS_LC:
        "<p>São as TS inseridas na CLAV, derivadas da Lista Consolidada (LC), que são produzidas e aprovadas na CLAV, sem publicação em " +
        "Diário da República. </p>" +
        "<p>No contexto da CLAV são identificadas com seguinte abreviatura: <b>TS/LC</b>.</p>" +
        "<p>As Tabelas de Seleção (TS) são instrumentos de gestão da informação utilizados pelas entidades, que permitem organizar, estruturar e agregar a informação " +
        "desde o momento da sua produção/receção, e que constituem as fontes de legitimação para a avaliação, seleção e eliminação da informação pública.</p>",
      PGD_LC:
        "<p>São as TS inseridas em portaria de gestão de documentos, que derivam da LC e estão publicadas em Diário da República.</p>" +
        "<p>No contexto da CLAV são identificadas com seguinte abreviatura: <b>PGD/LC</b>.</p>" +
        "<p>As Tabelas de Seleção (TS) são instrumentos de gestão da informação utilizados pelas entidades, que permitem organizar, estruturar e agregar " +
        "a informação desde o momento da sua produção/receção, e que constituem as fontes de legitimação para a avaliação, seleção e eliminação da " +
        "informação pública.</p>",
      PGD:
        "<p>São as TS não derivadas da Lista Consolidada (LC) que estão inseridas em portarias de gestão de documentos, publicadas em Diário da República.</p>" +
        "<p>No contexto da CLAV são identificadas com seguinte abreviatura: <b>PGD</b>.</p>" +
        "<p>A plataforma CLAV inclui o serviço de submissão de autos de eliminação. Para que este serviço possa ser utilizado, beneficiando de mecanismos " +
        "de criação assistida, de pré-validação e de controlo e validação automática aquando do envio, foi necessário proceder a uma uniformização das " +
        "tabelas de seleção (TS) publicadas ao longo de 30 anos, nomeadamente:</p>" +
        "<ul><li>correção interpretativa de um Destino final (DF), quando formalmente figura um valor que não traduz a situação de aplicação " +
        "(por ex.: quando o DF é Conservação e a nota ao DF refere “Apenas devem ser conservadas as atas”). Neste caso, o DF original foi substituído pelo " +
        "valor real, i.e., a conservação parcial, dado que uma parte da documentação é conservada e outra é eliminada. Caso esta correção interpretativa " +
        "não tivesse sido efetuada, não poderiam ser submetidos autos de eliminação pela plataforma, dado que apenas se podem efetuar autos de eliminação " +
        "para a documentação que tem como DF a eliminação ou a conservação parcial;</li>" +
        "<li>concatenação num campo único do Prazo de Conservação Administrativa quando este se decompõe em dois campos (ativo e semi-ativo), " +
        "tendo-se procedido à soma dos valores constantes. Esta junção permite a conferência automática do cumprimento do PCA.</li>" +
        "<li>passagem de uma nota no campo Prazo de Conservação Administrativa (PCA) para o campo “Nota ao PCA”, de forma a que no campo PCA apenas " +
        "figurem valores numéricos. Por exemplo se no campo PCA estiver expresso “Enquanto útil”, esta informação passou para o campo “Nota ao PCA”. " +
        "Esta passagem permitiu a transformação do campo PCA num campo numérico, condição base para a validação dos dados ali introduzidos.</li></ul>" +
        "<p>O acesso às tabelas de seleção na sua forma original publicadas no Diário da República pode ser efetuado no ícone PDF.</p>" +
        "As TS são instrumentos de gestão da informação utilizados pelas entidades, que permitem organizar, estruturar e agregar a informação desde o " +
        "momento da sua produção/receção, e que constituem as fontes de legitimação para a avaliação, seleção e eliminação da informação pública.",
    },
  },
  Entidade: {
    Campos: {
      Nome:
        "Indicação do nome da entidade conforme consta no diploma criador/estatutos.",
      Sigla:
        "<p>Indicação da sigla/acrónimo da entidade conforme consta no diploma criador/estatutos, ou como é conhecida.</p>" +
        "<p>Dado que a aplicação não permite a inserção de siglas repetidas, se sigla ou acrónimo formal já existir, recomenda-se a inserção, " +
        "em minúscula, da primeira letra que se seguir à última da sigla ou acrónimo.</p>" +
        "<p>Para entidades com nome composto, deverá ser usado um hífen. Como por exemplo, " +
        "Cinemateca Portuguesa – Museu do Cinema, que fica com a sigla CP-MC. O uso de vírgula não é permitido.</p>",
      Estado:
        "Indicação do estado da entidade: em atividade (ativa) ou extinta (inativa).",
      SIOE:
        "<p>Indicação do código da entidade atribuído no Sistema de Informação de Organização do Estado (SIOE).</p>" +
        "<p>Procurar o respetivo código SIOE em <a href='https://www.sioe.dgaep.gov.pt/Default.aspx'>https://www.sioe.dgaep.gov.pt/Default.aspx</a></p>" +
        "<p>Se não existir código SIOE, deixar o campo em branco.</p>",
      Internacional:
        "<p>Seleção da origem geográfica da entidade.</p>" +
        "<p>Ao escolher “SIM” responde que a origem da entidade é internacional, ao escolher “NÃO” responde que a origem não é internacional.</p>",
      DataCriacao:
        "<p>Indicação da data de criação da entidade que consta no diploma criador/estatutos. </p>" +
        "<p>O formato da data é AAAA-MM-DD.</p>",
      DataExtincao:
        "<p>Indicação da data de extinção da entidade que consta no diploma de extinção.</p>" +
        "<p>O formato da data é AAAA-MM-DD.</p>",
      Tipologias:
        "<p>Seleção da(s) tipologia(s) de entidade(s) em que se enquadra a entidade que está a ser registada.</p>" +
        "<p>No contexto da CLAV, uma tipologia é um conceito representativo de um agrupamento de entidades do mesmo tipo, " +
        "ou seja, entidades que têm uma ou mais características comuns.</p>" +
        "<p>Por exemplo: a mesma missão, os tribunais; o mesmo âmbito de atuação, as entidades gestoras de apoios; " +
        "o mesmo tipo de entidade, as Comissões de Coordenação e Desenvolvimento Regional; " +
        "entre outros).</p>",
    },
    Intervencoes: {
      Dono: "Processos de negócio em que a entidade intervém como dono.",
      Participante:
        "<p>Processos de negócio em que a entidade intervém como participante e respetivo tipo de " +
        "participação.</p>" +
        "\n<p>O dono do processo de negócio é a entidade responsável pela sua condução, pelo respetivo " +
        "produto final e pela guarda do produto final.</p>" +
        "\n<p>O participante do processos de negócio é a entidade que participa e contribui para o produto final, não sendo " +
        "responsável pela sua condução.</p>" +
        "\n<p>Os tipos de participação num processo de negócio são os seguintes:\n" +
        "<dl><dt>Apreciar:</dt><dd> intervenção no âmbito da emissão de opinião (parecer, proposta, entre outros). " +
        "Pode revestir caráter vinculativo.<dd>\n" +
        "<dt>Assessorar:</dt><dd> intervenção de apoio pontual ou global. Inclui asa ações de assessoria, de consultoria, " +
        "entre outras.</dd>\n" +
        "<dt>Comunicar:</dt><dd> intervenção para a comunicação, notificação da ação ou produto.</dd>\n" +
        "<dt>Decidir:</dt><dd> intervenção deliberativa, individual ou coletiva, imediata ou decorrente " +
        "de conjugação de intenções ou votação. Inclui ações de direção, coordenação, entre outras.</dd>\n" +
        "<dt>Executar:</dt><dd> intervenção para a realização da ação. Pode ser uma execução global ou " +
        "parcial.</dd>\n" +
        "<dt>Iniciar:</dt><dd> intervenção que tem por objetivo desencadear a ação mas não implica a " +
        "responsabilidade pela sua execução." +
        "</dd></dl></p>",
    },
    Relacoes: {
      Antecessora: "Designação da entidade antecessora.",
      Sucessora: "Designação da entidade sucessora.",
      IntegraCompetenciasDe:
        "Designação da(s) entidade(s) antecessora(s) de que provêm as competências integradas.",
      CompetenciasIntegradasEm:
        "Designação da(s) entidade(s) sucessora(s) que integrou(ram) competências da entidade referida.",
    },
  },
  Tipologias: {
    Campos: {
      Sigla:
        "<p>Indicação de uma sigla para a tipologia de entidade. </p>" +
        "<p>A sigla pode ser composta por todas as iniciais das palavras que constam no Nome da tipologia.</p>" +
        "<p>Devem ser inscritas em maiúsculas.</p>",
      Nome:
        "<p>Indicação do nome da tipologia da entidade. </p>" +
        "<p>No contexto da CLAV, uma tipologia é um conceito representativo de um agrupamento de entidades do mesmo tipo, ou seja, " +
        "entidades que têm uma ou mais características comuns.</p>" +
        "<p>Por exemplo: a mesma missão, os tribunais; o mesmo âmbito de atuação, as entidades gestoras de apoios; " +
        "o mesmo tipo de entidade, as Comissões de Coordenação e Desenvolvimento Regional; entre outros).</p>",
      Entidades:
        "Seleção da(s) entidade(s) enquadradas na tipologia que está a ser registada.",
    },
    Intervencoes: {
      Dono:
        "Processos de negócio em que a tipologia de entidade intervém como dono.",
      Participante:
        "<p>Processos de negócio em que a tipologia de entidade intervém como participante e respetivo tipo " +
        "de participação.</p>\n" +
        "<p>Os tipos de participação num processo de negócio são os seguintes:<dl>\n" +
        "<dt>Apreciar:</dt><dd> intervenção no âmbito da emissão de opinião (parecer, proposta, entre " +
        "outros). Pode revestir caráter vinculativo.</dd>\n" +
        "<dt>Assessorar:</dt><dd>  intervenção de apoio pontual ou global. Inclui asa ações de assessoria, " +
        "de consultoria, entre outras.</dd>\n" +
        "<dt>Comunicar:</dt><dd> intervenção para a comunicação, notificação da ação ou produto.</dd>\n" +
        "<dt>Decidir:</dt><dd> intervenção deliberativa, individual ou coletiva, imediata ou decorrente " +
        "de conjugação de intenções ou votação. Inclui ações de direção, coordenação, entre outras.</dd>\n" +
        "<dt>Executar:</dt><dd> intervenção para a realização da ação. Pode ser uma execução global ou " +
        "parcial.</dd>\n" +
        "<dt>Iniciar:</dt><dd> intervenção que tem por objetivo desencadear a ação mas não implica a " +
        "responsabilidade pela sua execução.</dd>\n" +
        "</dl></p>",
    },
  },
  Legislacao: {
    Campos: {
      Numero: "Indicação do número do diploma conforme publicação legal.",
      Tipo: "Identificação do tipo de diploma.",
      Data:
        "<p>Indicação da data da publicação do diploma.</p>" +
        "<p>O formato da data é AAAA-MM-DD.</p>",
      Sumário: "Registo do sumário do diploma conforme publicação legal.",
      Link: "Indicação do link da publicação do diploma.",
      FonteLegitimacao:
        "<p>Entende-se por fonte de legitimação a portaria ou despacho (no caso dos Relatórios " +
        "de Avaliação de Documentação Acumulada), que estabelecem as decisões de avaliação que fundamentam a ação de eliminação.</p>" +
        "<ul>" +
        "<li>Se o diploma não é uma fonte de legitimação, selecione a opção NÃO ESPECIFICADA;</li>" +
        "<li>Se estiver a adicionar uma portaria de gestão de documentos derivada da Lista Consolidada, selecione PGD/LC.  " +
        "Abrange as tabelas de seleção, derivadas da Lista Consolidada, inseridas em portarias de gestão de documentos, " +
        "publicadas em Diário da República.</li>" +
        "<li>Se estiver a adicionar uma portaria de gestão de documentos não derivada da Lista Consolidada, selecione PGD.  " +
        "Abrange as tabelas de seleção, não derivadas da Lista Consolidada, inseridas em portarias de gestão de documentos, " +
        "publicadas em Diário da República.</li>" +
        "<li>Se estiver a adicionar um despacho que autoriza um Relatório de Avaliação de Documentação Acumulada, selecione RADA. " +
        "Abrange as tabelas de seleção, inseridas em Relatórios de Avaliação, que não foram submetidos na CLAV. </li>" +
        "</ul>",
      DataRevogacao:
        "<p>Indicação da data de revogação do diploma.</p>" +
        "<p>O formato da data é AAAA-MM-DD.</p>",
      Entidades:
        "Seleção da(s) entidade(s) responsável pela publicação do diploma. ",
      ProcessosRegulados:
        "Seleção do(s) processo(s) de negócio de 3º nível enquadrados pelo diploma. ",
    },
    Relacoes: {
      Altera: "Referência ao(s) diploma(s) que altera.",
      Revoga: "Referência ao(s) diploma(s) que revoga.",
      AlteradoPor:
        "Referência ao(s) diploma(s )que altera(m) o diploma referenciado.",
      RevogadoPor:
        "Referência ao(s) diploma(s) que altera(m) o diploma referenciado.",
    },
  },
  AutoEliminacao: {
    Erros: {
      FaltaCampos:
        "Verifique se os campos <strong>Código da Classe, Data de Início e/ou Data de Fim</strong> se encontram preenchidos.",
      CodigoClasse:
        "A <strong>Classe</strong> que selecionou já foi introduzida no Auto.",
      DatasExtremas:
        "Verifique se os campos <strong>Data de Início e Data de Fim</strong> se encontram devidamente preenchidos.",
      DataInicio:
        "O campo <strong>Data de Início</strong> tem de conter uma data anterior ou igual ao campo <strong>Data de Fim</strong>.",
      MedicaoPapel:
        "Verifique se o campo <strong> Medição de UI em Papel</strong> se encontra devidamente preenchido.",
      MedicaoDigital:
        "Verifique se o campo <strong> Medição de UI Digital</strong> se encontra devidamente preenchido.",
      MedicaoOutro:
        "Verifique se o campo <strong> Medição de UI noutro Suporte</strong> se encontra devidamente preenchido.",
      Medicoes:
        "Pelo menos um dos campos de <strong>Medições de UI</strong> deve estar preenchido.",
      FaltaCamposAg:
        "Verifique se os campos <strong>Código da Agregação, Título da Agregação e Data de Contagem do PCA</strong> se encontram devidamente preenchidos.",
      CodigoAg:
        "O <strong>Código da Agregação</strong> que introduziu já existe nesta Classe",
      DataContagem:
        "A Data de inicio da contagem deve ser igual ou inferior à subtração do Prazo de conservação administrativa ao ano corrente. Para garantia de cumprimento integral do PCA é aconselhável adicionar a este valor um ano.",
      DataContagemP:
        "Verifique se o campo <strong>Data de Contagem do PCA</strong> se encontra devidamente preenchido.",
      DataContagemInicio:
        "A Data de Inicio de contagem da Agregação <strong>não pode</strong> ser inferior à Data de Início da Classe.",
      DonoPN:
        "Quando o Destino final da classe é <strong>Conservação</strong>, é obrigatório o preenchimento do campo <strong>Dono do PN</strong>",
    },
    Campos: {
      FonteLegitimacao:
        "Diploma ou ato administrativo que autoriza e legitima uma Tabela de Seleção",
      TS_LC:
        "Abreviatura de Tabela de Seleção / Lista Consolidada. <br/> Abrange as tabelas de seleção produzidas a partir da Lista Consolidada.",
      PGD_LC:
        "Abreviatura de Portaria de Gestão de Documentos / Lista Consolidada. <br/> Abrange as tabelas de seleção, derivadas da Lista Consolidada, inseridas em portarias de gestão de documentos, publicadas em Diário da República.",
      PGD:
        "Abreviatura de Portaria de Gestão de Documentos. <br/> Abrange as tabelas de seleção, não derivadas da Lista Consolidada, inseridas em portarias de gestão de documentos, publicadas em Diário da República.",
      RADA:
        "Abreviatura de Relatório de Avaliação de Documentação Acumulada. <br/> Abrange as tabelas de seleção, inseridas em Relatórios de Avaliação de Documentação Acumulada, que não foram submetidos na Plataforma CLAV. Apesar de estes RADA não terem sido submetidos na CLAV, as suas tabelas de seleção foram importadas e estão disponíveis na plataforma.",
      RADA_CLAV:
        "Abreviatura de Relatório de Avaliação de Documentação Acumulada / Classificação e Avaliação da Informação Pública. <br/> Abrange as tabelas de seleção, inseridas em Relatórios de Avaliação de Documentação Acumulada submetidos na CLAV.",
    },
  },
  Ppd: {
    titulo: "Denominação do Plano de Preservação Digital",
    entidade: "Entidade responsável pela apresentação e aplicação do PPD",
    responsabilidade:
      "Indicação do(s) responsável(eis) pelo apresentação do PPD",
    novoSI:
      "Os elementos informativos relativos a cada SI encontram-se estruturados em quatro fases:" +
      "<ul><li>	Fase 1 - Identificação do sistemas de informação </li>" +
      "<li>Fase 2 - Avaliação e definição do criticidade do sistema de informação </li>" +
      "<li>Fase 3 - Caracterização tecnológica do sistema de informação </li>" +
      "<li>Fase 4 - Planeamento da estratégia de preservação do sistema de informação</li></ul>" +
      "Para os SI externos, i.e., os SI que apenas são utilizados pela entidade para introdução de dados, sem qualquer tipo de gestão dos mesmos, apenas preencha os elementos informativos da fase 1." +
      "\nApenas prosseguem para a fase 3 e fase 4, com preenchimento dos respetivos campos, os SI com prazo de conservação administrativa superior a 7anos ou com destino final de conservação, que não se encontrem em estado abatido.",
    numeroSI:
      "Referenciar cada sistema de informação (SI) por um identificador. Pode ser um nº sequencial, um URN, ou outro tipo de identificador.",
    nomeSI:
      "Registar, por extenso, a designação oficial do sistema ou, quando não exista, nome pelo qual é conhecido.",
    fonteLegitimacao:
      "Diploma ou ato administrativo que autoriza e legitima uma Tabela de Seleção",
    Identificacao: {
      geral:
        "Devem ser identificados todos os Sistemas de Informação existentes enquanto contentores de informação produzida pela entidade.",
      adminSis:
        "Designação do organismo que tem a administração operacional do sistema de informação (ex.: assegura o armazenamento dos dados, monitorização do sistema). ",
      adminDados:
        "Designação do organismo que tem a administração operacional dos dados (ex.: actualização dos dados).",
      proprietarioSIPublico:
        "Designação do organismo que tem a propriedade intelectual e/ou responsabilidades de gestão global do sistema de informação (decide sobre o desenvolvimento, distribuição, desactivação, etc.)." +
        "Caso a propriedade do Sistema seja privada (uso condicionado à aquisição de licenças), referir o organismo que decide sobre a renovação ou não das licenças de utilização.",
      proprietarioSIPrivado:
        "Designação da entidade privada que tem a propriedade do SI, aplica-se quando o uso condicionado à aquisição de licenças.",
      proprietarioDados:
        "Designação do organismo que tem a propriedade intelectual e/ou responsabilidades de gestão global dos dados.",
      localDadosPublico:
        "Indicar nome do(s) organismo(s) públicos onde os dados residem/estão armazenados.",
      localDadosPrivado:
        "Indicar nome das entidades privadas onde os dados residem/estão armazenados.",
      defFormalResp:
        'Por "responsabilidades individuais" entende-se todo o tipo de permissões necessárias à gestão do sistema (monitorização, registo/alteração de permissões...) e dos dados (criação de dados, consulta, edição, eliminação…). ' +
        "<p>Em caso afirmativo indicar qual a expressão dessa formalização (ex. despacho oficial, registo no próprio sistema de utilizadores e de permissões...)</p>",
      insourcing:
        'Considera-se "insourcing" quando o prestador de serviços é entidade do sector administrativo do Estado.' +
        "<p>Em caso afirmativo indicar a entidade prestadora dos serviços e a sua natureza (não considerar os contratos de manutenção, a menos que incluam o desenvolvimento do sistema).</p>",
      outsourcing:
        'Considera-se "outsourcing" quando o prestador de serviços é entidade do sector privado ou do sector público empresarial.' +
        "<p>Em caso afirmativo indicar a entidade prestadora dos serviços e a sua natureza  (não considerar os contratos de manutenção, a menos que incluam o desenvolvimento do sistema).</p>",
    },
    Avaliacao: {
      geral:
        "<p>Informação determinante para identificar os sistemas com informação a preservar e indiciar o tipo" +
        " de soluções de preservação.</p><p>A avaliação tem por base a fonte de legitimação em vigor na entidade, que contem" +
        " a tabela de seleção com os prazos e destinos a aplicar à informação dos SI.</p><p>Os SI com informação cujo prazo" +
        " de conservação administrativa seja superior a 7 anos ou com destino final de conservação devem ser objeto de" +
        " preservação digital.</p>O estado do sistema, o grau de utilização e a criticidade influenciam o tipo de solução de preservação a adotar para cada SI.",
      descricao: "Indicar o âmbito e conteúdo do sistema de informação.",
      decomposicao:
        "Nome dos subsistemas/aplicações que integram o sistema." +
        "Este campo só deve ser preenchido quando o sistema estiver estruturado em subsistemas e/ou módulos que correspondam a diferentes funções e/ou processos  de negócio.",
      codClassificacao:
        "Código da classe/série  que enquadra o SI, constante da tabela de seleção da fonte de legitimação." +
        "Existem tabelas de seleção em que o identificador da classe/série é o Código de classificação, outras tabelas em que o identificador é o N.º de referência e, ainda, tabelas que contém simultaneamente um Código e um  N.º de referência.",
      numeroClasse:
        "Número de referência da série que enquadra o SI, se aplicável" +
        "Existem tabelas de seleção em que o identificador da classe/série é o Código de classificação, outras tabelas em que o identificador é o N.º de referência e, ainda, tabelas que contém simultaneamente um Código e um  N.º de referência. ",
      tituloClasse:
        "Registar o título da classe/série correspondente ao código de classificação / Nº de referência, de acordo com a tabela de seleção",
      pcaClasse:
        "O prazo de conservação administrativo relativo à classe/série, tal como aparece na tabela de seleção.",
      contagemPrazos:
        "A forma de contagem do prazo de conservação administrativo relativo à classe/série, tal como aparece na tabela de seleção.",
      destinoClasse:
        "O Destino final relativo à classe/série, tal como aparecem na Tabela de seleção",
      pcaDoSI:
        "O PCA do SI é o PCA da classe/série em que o SI se enquadra. No caso da equivalência SI/classe não ser linear, i.e., quando o SI se enquadra em várias classes/série, deve prevalecer o PCA mais elevado.",
      destinoSI:
        "O DF do SI é o DF da classe/série em que o SI se enquadra. No caso da equivalência SI/classe não ser linear, i.e., quando o SI se enquadra em várias classes/série com DF distintos, deve prevalecer o DF conservação.",
      siRelacionado:
        "Indicar nº de referência do sistema relacionado e o tipo de relação",
      estadoSI:
        "Indicar se o sistema está:" +
        "<p>Ativo (em exploração: cumpre objectivo operacional primário)</p>" +
        "<p>Semi-Ativo (usado apenas para consulta esporádica: o SI foi substituído por outro mais actual; dados não foram migrados, ou foram migrados com erros)</p>" +
        "<p>Inativo (sem qualquer  utilização administrativa, nem para inserção de dados, nem para pesquisa)</p>" +
        "<p>Abatido (sistema descomissionado, cuja informação foi transferida para outro sistema)</p>",
      utilizacaoSI:
        "Indicar o tipo de frequência e intensidade de utilização, pode estar relacionado com a passagem do tempo, ou seja o PCA, e está definitivamente relacionado com o estado em que se encontra o sistema:" +
        "<ol><li>O sistema é utilizado regularmente (todos os dias)</li>" +
        "<li>O sistema é usado menos regularmente (todas as semanas)</li>" +
        "<li>O sistema é utilizado com pouca regularidade (mensalmente ou semestralmente)</li>" +
        "<li>O sistema é pouco utilizado (anualmente)</li>" +
        "<li>O sistema nunca é utilizado (desconhecido).</li></ol>",
      criticidadeSI:
        "Indicar a criticidade do SI, tomamdo em consideração o peso da informação para o cumprimento das atividades da organização:" +
        "<ol><li>Muito crítico. Sistema essencial para apoiar processos de negócio da instituição. Impacto extremo no caso de perda ou falha do sistema.</li>" +
        "<li>Crítico. Sistema importante para apoiar  os processos de negócio da instituição. Impacto elevado no caso de perda ou falha do sistema.</li>" +
        "<li>Pouco crítico. Sistema relevante para apoiar os processos de negócio. Impacto moderado no caso de perda ou falha do sistema.</li>" +
        "<li>Não crítico. Significativo para melhorar a eficiência, ou eficácia do negócio. Impacto leve no caso de perda ou falha do sistema.</li></ol>",
      siObjetoPreservacao:
        "Os SI com informação cujo prazo de conservação administrativa seja superior a 7 anos ou com destino final de conservação devem ser objeto de preservação digital. Não são objeto de preservação os SI abatidos, cuja informação passou para outro SI.",
    },
    Caracterizacao: {
      geral:
        "<p>Apenas devem ser caracterizados os sistemas que tenham transitado da fase 2, i.e., os SI com informação cujo prazo de conservação administrativa seja superior a 7 anos ou com destino final de conservação devem ser objeto de preservação digital. Não são objeto de preservação os SI abatidos, cuja informação passou para outro SI.</p>" +
        "A recolha destes elementos informativos destina-se a:" +
        "<ul><li>Avaliar algumas características e configurações da plataforma tecnológica de forma a identificar pontos fortes e fracos relativamente à adequação da mesma à preservação digital.</li>" +
        "<li>Identificar lacunas que seja necessário colmatar de forma a adaptar a plataforma à preservação digital.</li>" +
        "<li>Avaliar a dependência da informação relativamente a uma determinada tecnologia.</li>" +
        "<li>Avaliar a robustez da plataforma quanto à segurança da informação.</li></ul>" +
        "\n Esta fase encontra-se estruturada em seis blocos:" +
        "<ol><li>Dependência tecnológica</li> <li>Crescimento do sistema</li> <li>Segurança geral da plataforma tecnológica</li>" +
        "<li>Segurança específica dos sistemas</li> <li>Armazenamento</li> <li>Documentação</li></ol>",
      dependenciaTecnologica:
        "Pretende identificar o gau de dependÊncia de uma determinada tecnologia que pode indiciar dificuldades futuras para migrar para tecnologia alternativa. Avalia igualmente o grau de utilização de software opensource.",
      crescimentoSisma:
        "Recolhe informação destinada a calcular os recursos necessários para salvaguardar futuramente a informação, nomeadamente a capacidade de armazenamento.",
      segurancaGeral:
        "Avalia o estado de segurança da plataforma tecnológica enquanto parte indissociável da operação e preservação de informação contida nos sistemas identificados.",
      segurancaEspecifica:
        "Recolhe informação específica sobre segurança dos sistemas e do acesso à informação que eles contêm.",
      armazenamentoGeral:
        "O armazenamento é uma componente indispensável na salvaguarda da informação. Por esse motivo é necessário recolher dados sobre as suas características e opções tomadas pela organização.",
      documentacao:
        "A documentação da plataforma tecnológica, dos procedimentos rotineiros da sua gestão, bem como dos sistemas e dos dados que estes contêm é o objeto desta seção.",

      dependenciaSoft:
        "Informação pertinente para a determinação da dependência tecnológica do SI." +
        "\nIndicar nível de dependência com fornecedores privados:" +
        "<ol><li>Uso exclusivo de sw não proprietário.</li>" +
        "<li>Uso de sw proprietário, mas com adequadas facilidades de exportação de dados.</li>" +
        "<li>Uso de sw proprietário com especificações fechadas, e sem adequadas facilidades de exportação de dados.</li></ol>",
      categoriaDados:
        "Informação pertinente para a determinação da dependência tecnológica do SI." +
        "\nIndicar o tipo de categoria de dados:" +
        "<ol><li>Dados tabulares (Ex. Sql, Mysql, Oracle, MS Access, etc)</li>" +
        "<li>Texto estruturado (doc, odt, pdf, etc)</li>" +
        "<li>Folha de cálculo (xlsx, odf, etc)</li>" +
        "<li>Multimédia (som, imagem - bitmap e vetorial-, vídeo)</li>" +
        "<li>Misto (combinação de formatos, por ex. Sql + imagem + texto estruturado)</li></ol>",
      formatos:
        "Informação pertinente para a determinação da dependência tecnológica do SI." +
        "\nIndicar o formato utilizado.\nExemplos:" +
        "<ul><li>Sql, Mysql, Oracle, MS Access</li>" +
        "<li>Neo4J</li>" +
        "<li>doc, odt, pdf</li>" +
        "<li>xlsx, odf</li></ul>",
      modeloCres:
        "Descrever o modelo de adição de dados ao sistema:" +
        "<ol><li>Acumulação contínua - dados continuamente adicionados sem se proceder a expurgo.</li>" +
        "<li>Substituição de dado - os dados são escritos por cima de registos anteriores criando diferentes versões de um registo os quais podem ou não ser guardadas.</li>" +
        "<li>Expurgo de registos que perdem utilidade operacional - periodicamente o sistema é purgado de dados que perderam utilidade operacional.</li>" +
        "<li>Outra situação - indique qual.</li></ol>",
      dimensao: "Indique a dimensão em unidades binárias (Gb).",
      crescimento:
        "Indique a dimensão em unidades binárias (Gb). Pode ser um valor aproximado.",
      localSistema:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se os sistemas estão fisicamente localizados em servidores sediados num ponto central ou dispersos por vários pontos:" +
        "<ol><li>Centralizados</li>" +
        "<li>Descentralizados</li>" +
        "<li>Mista (alguns estão centralizados e outros descentralizados)</li></ol>",
      salaTec:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se a instituição tem uma sala especializada para alojar equipamentos informáticos de forma segura.",
      acessoSalaTec:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica.",
      energiaRed:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se os sistemas estão alojados em equipamentos suportados por fontes de energia redundantes que assegurem a continuidade do funcionamento dos sistemas em caso de rutura intempestiva.",
      energiaSoc:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se os equipamentos que alojam os sistemas estão ligados a UPS que assegurem a continuidade de funcionamento em caso de quebra súbita de energia.",
      alarme:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se há segurança relativamente a incêndios:" +
        "<ol><liSim há sistemas de alarme e de extinção.</li>" +
        "<li>Não há sistemas de alarme ou de extinção.</li>" +
        "<li>Há sistemas de alarme mas não de extinção.</li>" +
        "<li>Outros.</li></ol>",
      climatizacao:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se os equipamentos que alojam os sistemas estão num espaço com ar condicionado ou refrigeração adequada.",
      seguranca:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se existe algum tipo de proteção relativamente a ciberataques:" +
        "<ol><li>Sim.</li>" +
        "<li>Não.</li>" +
        "<li>Em estudo.</li></ol>",
      comunicacaoEx:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se há proteção do acesso externo a sistemas contendo informação.",
      planoContingencia:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se existe plano de contingência para repor os serviços da plataforma em caso de incidente ou acidente:" +
        "<ol><li>Sim.</li>" +
        "<li>Não.</li>" +
        "<li>Em desenvolvimento.</li></ol>",
      planoMudEvolucao:
        "Informação pertinente para a determinação da segurança geral da plataforma tecnológica." +
        "\nIndicar se existe um plano de gestão de mudança e evolução da plataforma:" +
        "<ol><li>Sim.</li>" +
        "<li>Não.</li>" +
        "<li>Em estudo.</li></ol>",
      privAcesso:
        "Informação pertinente para a determinação da segurança específica do SI.\nExistência de privilégios de acesso diferenciados.",
      catSegDados:
        "Informação pertinente para a determinação da segurança específica do SI." +
        "\nIndicar se a informação residente nos sistemas tem algum tipo de classificação de segurança (Por ex. de acordo com o SEGNAC):" +
        "<ol><li>Sim.</li>" +
        "<li>Para alguma informação do sistema.</li>" +
        "<li>Não.</li></ol>",
      rotinaAuditoria:
        "Informação pertinente para a determinação da segurança específica do SI.\nIndicar se é efetuado registo de ocorrências sobre o sistema.",
      logsRotinas:
        "Informação pertinente para a determinação da segurança específica do SI.",
      integridadeInfo:
        "Informação pertinente para a determinação da segurança específica do SI." +
        "\nIndicar se é verificada a integridade da informação:" +
        "<ol><li>Reativamente em resposta a incidentes</li>" +
        "<li>Proativamente de forma rotineira</li>" +
        "<li>Proativamente de forma aleatória</li>" +
        "<li>Não é verificada</li></ol>",
      armazenamento:
        "Informação pertinente sobre o armazenamento do SI." +
        "\nIndicar se a organização dispõe de armazenamento com maior ou menor grau de sofisticação,  especializado na conservação com segurança de dados:" +
        "<ol><li>Sim (NAS, CAS, SAN, outros).</li>" +
        "<li>Sim (arquivos óticos, e similares.</li>" +
        "<li>Não (informação reside em servidores, discos externos, etc).</li>" +
        "<li>Outros.</li></ol>",
      replicacaoDados:
        "Informação pertinente sobre o armazenamento do SI." +
        "\nIndicar se é feita exportação de dados para outros suportes residentes em sistemas de armazenamento paralelos (internos ou externos à organização).",
      backupsRegular:
        "Informação pertinente sobre o armazenamento do SI." +
        "<ol><li>Sim. De acordo com política formalizada.</li>" +
        "<li>Sim. Sem política formalizada.</li>" +
        "<li>Sim. Backups aleatórios ou ocasionais.</li>" +
        "<li>Não.</li></ol>",
      modeloBackup:
        "Informação pertinente sobre o armazenamento do SI." +
        "\nIndicar o modelo de backup:" +
        "<ol><li>Incremental.</li>" +
        "<li>Diferencial.</li>" +
        "<li>Misto.</li>" +
        "<li>Outro.</li></ol>",
      qualidadeBackup:
        "Informação pertinente sobre o armazenamento do SI." +
        "Indicar se são efetuados periodicamente testes à qualidade do backup. Normalmente recuperar dados aleatoriamente e verificar se estão íntegros e acessíveis:" +
        "<ol><li>Reativamente em resposta a incidentes.</li>" +
        "<li>Proativamente de forma rotineira.</li>" +
        "<li>Proativamente de forma aleatória.</li>" +
        "<li>Não é verificada.</li></ol>",
      inventarioSoft:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se existe um inventário de SW:" +
        "<ol><li>Sim.</li>" +
        "<li>Não.</li>" +
        "<li>Em construção.</li></ol>",
      inventarioHard:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se existe um inventário de HW:" +
        "<ol><li>Sim.</li>" +
        "<li>Não.</li>" +
        "<li>Em construção.</li></ol>",
      documentacaoSis:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se existe metainformação e documentação do sistema." +
        "<ol><li>Existe toda a documentação considerada necessária para a utilização, recuperação e salvaguarda do sistema.</li>" +
        "<li>Existe alguma documentação mas não a consideramos suficiente para a utilização, recuperação ou salvaguarda do sistema.</li>" +
        "<li>Existe apenas documentação comercial não personalizada para o sistema na organização.</li>" +
        "<li>Sistema não documentado.</li></ol>",
      documentacaoProc:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se os procedimentos técnicos informáticos de manutenção, gestão do sistema estão documentados, organizados e facilmente acessíveis pelo pessoal TIC:" +
        "<ol><li>Sim, todos</li>" +
        "<li>Alguns</li>" +
        "<li>Não</li></ol>",
      controlVersaoDProc:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se há controlo de versões da documentação de procedimentos de forma a saber sempre qual a versão atualizada.",
      contratoAtivos:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se existem contratos de manutenção ativos:" +
        "<ol><li>Sim</li>" +
        "<li>Não</li>" +
        "<li>N/A (Não aplicável. Manutenção assegurada internamente)</li></ol>",
      planoRecuperacao:
        "Informação pertinente para determinar o nível de documentação do SI.\nIndicar se existe um plano de contingência em caso de paragem programada ou intempestiva de sistema:" +
        "<ol><li>Sim</li>" +
        "<li>Não</li>" +
        "<li>Em planeamento</li></ol>",
    },
    Estrategia: {
      geral:
        "A escolha de soluções de preservação deve ser feita para cada um dos sistemas identificados e que passaram para a fase 3." +
        "Para este efeito é necessário utilizar os dados recolhidos nas fases anteriores, cruzados com os aspetos gestionários, nomeadamente: a política e gestão orçamental, o alinhamento da plataforma tecnológica com o negócio, recursos humanos e impacto de eventual mudança." +
        "O planeamento é feito sobre duas perspetivas, que se complementam no tempo: a utilização operacional e a utilização como memória.",
      utilOperacional:
        "Estratégia de preservação aplicável à informação durante o período vigente do PCA",
      metodoPreservacao:
        "<ol><li><b>Retrocompatibilidade.</b> Continuar a aquisição de novas versões do sistema em que a informação é produzida e guardada. É aconselhável quando é imprescindível manter a operacionalização e funcionalidades específicas do sistema.</li>" +
        "<li><b>Migração da informação.</b> Passar a informação contida num sistema num determinado formato para um formato alternativo mais adequado a ser preservado. Abandona-se o sistema original em que os dados residiam e decrementa-se os mesmos para uma estrutura mais simplificada ou, se existir, para um formato estável e não proprietário mais adequado à preservação.A migração de dados pode ser feita em diversas situações, designadamente: " +
        "<ul><li>Quando uma versão do sistema é substituída por outra mais recente.</li>" +
        "<li>Quando um sistema é substituído por outro completamente diferente.</li>" +
        "<li>Quando há informação dentro de um sistema que já expirou o seu PCA e se pretenda extraí-la para melhorar o desempenho do sistema.</li>" +
        "<li>Quando seja necessário desativar um sistema que contenha informação de conservação definitiva.</li></ul> </li>" +
        "<li><b>Outro.</b> Especificar qual.</li></ol>",
      fundMetodoPreservacao:
        "Explicitar os motivos que conduziram à seleção do método de preservação.Incluir a menção ao formato de preservação. O Regulamento de Interoperabilidade Digital preconiza um conjunto de formatos que devem ser utilizados. No entanto será necessário recorrer a outras fontes de autoridade sempre que seja identificado um formato que não conste deste regulamento.",
      lacunas:
        "Indicar lacunas nos SI ou na plataforma teconológica que seja necessário modificar ou reforçar de forma a melhor a adaptar para preservar com segurança a informação durante o tempo em que a entidade dela necessita.",
      utilMemoria:
        "Estratégia aplicável à informação de conservação definitiva que já tenha excedido o seu PCA.",
      metodoPreservacaoMemoria:
        "<ol><li><b>Migração da informação.</b> Passar a informação contida num sistema num determinado formato para um formato alternativo mais adequado a ser preservado. Abandona-se o sistema original em que os dados residiam e decrementa-se os mesmos para uma estrutura mais simplificada ou, se existir, para um formato estável e não proprietário mais adequado à preservação.A migração de dados para arquivo digital especializado em preservação é uma opção.</li>" +
        "<li><b>Encapsulamento.</b> Gestão de Informação de Representação, de forma a permitir documentar tecnicamente a informação de arquivo detida no repositório, permitindo aos utilizadores interpretar a mesma sem ter de recorrer a especialistas ou a fontes de informação externa ao repositório.</li>" +
        "<li><b>Emulação.</b> Preservar as versões originais das representações digitais no repositório secundário.</li>" +
        "<li><b>Outro.</b> Especificar qual.</li></ol>",
    },
  },
};

export default help
