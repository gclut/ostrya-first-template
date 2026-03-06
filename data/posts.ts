import postImage01 from "../public/posts/post-1.png";
import postImage02 from "../public/posts/post-2.jpg";
import postImage03 from "../public/posts/post-3.png";
import postImage04 from "../public/posts/post-4.png";
import postImage05 from "../public/posts/post-5.png";
import postImage06 from "../public/posts/post-6.png";
import postImage07 from "../public/posts/post-7.png";
import postImage08 from "../public/posts/post-8.png";
import postImage09 from "../public/posts/post-9.png";

type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

type ListBlock = {
  type: "list";
  items: string[];
};

type HeadingBlock = {
  type: "heading";
  text: string;
};

type ContentBlock = ParagraphBlock | ListBlock | HeadingBlock;

export interface Post {
  slug: string;
  author: string;
  date: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  content: ContentBlock[];
}

const posts: Post[] = [
  {
    slug: "1",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage01.src,
      alt: "",
    },
    title:
      "Investimentos no Rio Grande do Sul somam R$ 91,4 bilhões, queda de 12,7% na comparação anual.",
    content: [
      {
        type: "paragraph",
        text: "Anualmente o Jornal do Comércio divulga o Investômetro, que busca consolidar os principais investimentos anunciados ou realizados no Rio Grande do Sul ao longo do ano. Em 2025, o estudo mostra um total de R$ 91,4 bilhões em investimentos realizados no Estado, uma queda de 12,7% frente à 2024, mas é importante lembrar que se trata do segundo maior número desde 2018. ",
      },
      {
        type: "paragraph",
        text: "O investimento é fundamental para o crescimento de uma empresa e da economia. Contudo, cada decisão relevante de investimento deve ser bem avaliada, pois um erro pode colocar em jogo o futuro da empresa.",
      },
      {
        type: "paragraph",
        text: "Ao longo da minha trajetória, analisando crédito e restruturando empresas, percebi que grande parte das dificuldades enfrentadas pelos empresários vem de investimentos mal feitos. Falta de planejamento, ausência de análise de viabilidade, financiamento inadequado, problemas na execução e falha na gestão de riscos na hora de investir podem transformar um sonho de expansão em uma crise para a empresa. ",
      },
      {
        type: "paragraph",
        text: "Uma das frentes de atuação da Ostrya Capital é justamente ajudar os empresários a investirem melhor, a partir de análises de viabilidade de projetos de investimento, projetando fluxos de caixa, estimando custo de oportunidade do capital, analisando riscos e, de forma técnica, avaliando a viabilidade econômica dos projetos, através da utilização de técnicas como a Taxa Interna de Retorno (TIR), o Valor Presente Líquido (VPL) e o Payback.",
      },
    ],
  },
  {
    slug: "2",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage02.src,
      alt: "",
    },
    title:
      "A indústria gaúcha retraiu 1,3% em 2025 segundo levantamento da FIERGS. ",
    content: [
      {
        type: "paragraph",
        text: "O desempenho fraco foi puxado pela forte queda em setores como a produção de veículos automotores (-11,3%) e couros e calçados (-6,6%). Do lado positivo ficam os setores de máquinas e equipamentos (+10,1%), equipamentos de informática e eletrônicos (+2,5%), tabaco (+10,4%) e alimentos (+1,4%).",
      },
      {
        type: "paragraph",
        text: "O fraco desempenho da indústria fez com que a utilização da capacidade instalada tenha ficado 76,1%, menor patamar dos últimos anos e uma queda de 4,0p.p. em relação ao final de 2024. Outros indicadores como faturamento, horas trabalhadas, massa salarial, pessoal ocupado e compras da indústria, também apresentaram queda no ano.",
      },
      {
        type: "paragraph",
        text: "Assim, o índice de desempenho industrial da FIERGS apresentou o menor patamar desde as enchentes de maio de 2024. O ano de 2025 realmente é uma página a ser virada para a indústria gaúcha. ",
      },
      {
        type: "paragraph",
        text: "Maior concorrência de importados, no caso da indústria calçadista e uma taxa de juros elevada, principalmente no caso da indústria automobilística, são alguns dos fatores que contribuíram negativamente para o desempenho da indústria gaúcha.",
      },
      {
        type: "paragraph",
        text: "Gestão, controle de custos e despesas, avaliação criteriosa na realização de investimentos e na captação de recursos muitas vezes fazem a diferença entre as empresas que aproveitam os desafios para se consolidar no mercado e crescer e aquelas que ficam pelo caminho.",
      },
    ],
  },

  {
    slug: "3",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage03.src,
      alt: "",
    },
    title:
      "A safra 2025/26 deve ser de alívio (pelo menos parcial) para o produtor rural gaúcho. ",
    content: [
      {
        type: "paragraph",
        text: "A Companhia Nacional de Abastecimento (Conab) estima que o Rio Grande do Sul deverá produzir 38,9 milhões de toneladas de grãos na safra 2025/26, uma alta de 8,4% em relação à safra anterior. ",
      },
      {
        type: "paragraph",
        text: "O produtor rural gaúcho vem sofrendo a diversos anos com adversidades climáticas (sequência de estiagens e enchente), preços em baixa e restrição e elevado custo do crédito. Assim, esse ano promete ser de alívio parcial, pois o preço dos grãos ainda está abaixo da média dos anos anteriores e o crédito continua caro e escasso. ",
      },

      {
        type: "paragraph",
        text: "Estima-se que a cadeia do agronegócio (produção de grãos, indústria, comércio e serviços associado ao agro) represente cerca de 40,0% do PIB do Rio Grande do Sul. Portanto, pode-se esperar um ano mais favorável para a economia gaúcha. ",
      },

      {
        type: "paragraph",
        text: "Contudo, após tantos desafios, essa safra não irá recuperar as perdas dos produtores gaúchos nos últimos anos, nem resolver o elevado endividamento de muitos produtores e empresas do setor. Não há dúvidas que medidas de restruturação da dívida continuem sendo necessárias e fundamentais para a manutenção de muitos negócios no setor. ",
      },
      {
        type: "paragraph",
        text: "Ao longo dos últimos anos, a Ostrya Capital se orgulha de assessorar diversos produtores rurais e empresas do agronegócio gaúcho, reestruturando passivos, organizando o fluxo de caixa e contribuindo para a manutenção, recuperação e crescimento de muitos negócios.",
      },
    ],
  },
  {
    slug: "4",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage04.src,
      alt: "",
    },
    title:
      "Quando a venda de ativos se torna uma necessidade para uma empresa?",
    content: [
      {
        type: "paragraph",
        text: "A Companhia Siderúrgica Nacional (CSN) encerrou o terceiro trimestre de 2025 com uma dívida financeira líquida recorde de R$34,7 bilhões (resultado de uma dívida financeira bruta de R$ 52,1 bilhões e um caixa de R$ 17,4 bilhões). ",
      },
      {
        type: "paragraph",
        text: "O prejuízo acumulado nos doze meses anteriores à setembro de 2025 é de R$ 1,5 bilhão. O ano de 2025 deve ter encerrado como o terceiro exercício consecutivo com prejuízo líquido, devido às margens mais baixas desde o boom pós pandemia, à maior concorrência com importados, ao elevado custo da dívida e ao elevado endividamento. ",
      },

      {
        type: "paragraph",
        text: "É quase uma tempestade perfeita para um dos maiores grupos industriais do Brasil. ",
      },
      {
        type: "paragraph",
        text: "A dívida financeira bruta da companhia saltou de R$ 30,0 bilhões em 2021 para R$ 52,1 bilhões em setembro de 2025. Já a dívida financeira líquida saltou de R$ 10,0 bilhões para R$ 34,7 bilhões no mesmo período. ",
      },
      {
        type: "paragraph",
        text: "Assim, como resultado do aumento na dívida e da queda no resultado e geração de caixa, o endividamento da companhia disparou, resultando na necessidade de medidas de restruturação para evitar uma crise de liquidez. Estima-se que o endividamento, medido pela relação entre a dívida financeira líquida e o EBITDA da companhia possa chegar a 5,0 vezes em 2026, muito acima de patamares considerado razoáveis. ",
      },
      {
        type: "paragraph",
        text: "Uma das medidas que vem sendo anunciadas pela gestão da companhia para evitar uma crise ainda mais severa é a venda de ativos. A CSN tem muitos ativos operacionais com alto valor de mercado e mostra-se disposta a vendê-los, mesmo em um ciclo de baixa, para levantar capital e reduzir o endividamento. ",
      },
      {
        type: "paragraph",
        text: "Estima-se que a companhia esteja buscando captar entre R$ 15,0 e R$ 18,0 bilhões com a venda de ativos. Além do segmento siderúrgico, a companhia também atua em mineração, cimento e infraestrutura (ferrovias, terminais portuários, entre outros). ",
      },
      {
        type: "paragraph",
        text: "Em momentos desafiadores, quando o ciclo de negócios está em baixa e/ou o endividamento está elevado, a venda de ativos, mesmo que operacionais, pode ser uma medida necessária para que as empresas possam reduzir a alavancagem e ganhar fôlego para que se possa implementar outras medidas de restruturação e até que os negócios melhorem.",
      },
    ],
  },

  {
    slug: "5",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage05.src,
      alt: "",
    },
    title: "A importação de calçados sobe 31,2% em janeiro e bate recorde.",
    content: [
      {
        type: "paragraph",
        text: "O mês de janeiro registrou importações recordes de calçados, que somaram 4,5 milhões de pares e USD 62,9 milhões, alta de 34,3% em volume e 31,2% em valor, quando comparado com o mesmo mês de 2025. ",
      },
      {
        type: "paragraph",
        text: "A principal origem das importações é a Ásia, com destaque para o Vietnã, China e Indonésia. A valorização do Real frete ao Dólar vem tornando o produto importado mais competitivo no mercado brasileiro, acelerando as importações e aumentando a concorrência para o fabricante brasileiro. A moeda brasileira se valorizou 11,0% em 2025 e no acumulado de 2026 já se valoriza outros 4,6% em relação ao Dólar. ",
      },
      {
        type: "paragraph",
        text: "Não bastasse o impacto negativo das importações, a indústria vem sofrendo com queda nas exportações. O volume de calçados exportados em janeiro deste ano caiu 17,7% em relação ao mesmo mês de 2025. O principal destino do calçado brasileiro, os Estados Unidos, reduziu em 26,8% o volume e em 45,7% o valor das compras dos produtos brasileiros, na esteira do impacto do tarifaço. O segundo principal destino das exportações brasileiras, a Argentina, também reduziu suas compras, somando 286,9 mil pares (-54,9%) e USD 4,4 milhões (57,4%).",
      },
      {
        type: "paragraph",
        text: "A conjuntura de curto prazo para as empresas do setor ainda segue desafiadora, considerando a continuidade do tarifaço norte-americano para os calçados e a intensificação da concorrência dos importados.",
      },
    ],
  },
  {
    slug: "6",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage06.src,
      alt: "",
    },
    title:
      "Quando um número “bom” no varejo pode esconder um ano difícil para muitas empresas?",
    content: [
      {
        type: "paragraph",
        text: "O comércio gaúcho fechou 2025 com alta de 2,5% no volume de vendas, acima da taxa média do Brasil (1,6%), segundo a PMC/IBGE.",
      },
      {
        type: "paragraph",
        text: "À primeira vista, parece um ano positivo.",
      },
      {
        type: "paragraph",
        text: "Enquanto Farmácias (+7,1%), Equipamentos e materiais de escritório/informática (+10,1%), Supermercados (+2,6%) e Atacarejos (+3,3%) sustentaram o resultado…",
      },
      {
        type: "paragraph",
        text: "…setores mais dependentes de renda discricionária e/ou crédito sentiram mais: Materiais de construção (-14%), Veículos (-12,8%), Livros e papelaria (-6%), além de Vestuário (-2,1%), Postos de combustíveis (-2,5%) e Móveis e eletrodomésticos (-2,5%).",
      },
      {
        type: "paragraph",
        text: "Seja para os segmentos em alta ou em baixa, ganham as empresas que protegem as margens, fazem boa gestão de investimentos (capital fixo e giro) e focam no fluxo de caixa, enquanto perdem aquelas que ficam presas em volume sem rentabilidade.",
      },
    ],
  },
  {
    slug: "7",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage07.src,
      alt: "",
    },
    title:
      "Exportações gaúchas caem 12,0% em janeiro, comparado com o mesmo mês de 2025. As exportações para os Estados Unidos (-39,5%) puxam a queda.",
    content: [
      {
        type: "paragraph",
        text: "Embora tenham ocorrido flexibilizações em relação às tarifas ao longo do no passado, setores relevantes da economia gaúcha continuavam impactados, tais como: produtos de metal (incluindo armas e utensílios domésticos), tabaco, máquinas e equipamentos, madeira e coureiro calçadista. ",
      },
      {
        type: "paragraph",
        text: "A tentativa de abertura de novos mercados para escoar a produção antes destinada ao mercado norte-americano não vem surtindo os efeitos esperados. A abertura de novos mercados leva algum tempo até se consolidar e, muitas vezes, ocorre a preços mais baixos. ",
      },
      {
        type: "paragraph",
        text: "O resultado tem sido a retração na produção industrial. Como apresentei na última semana, a indústria gaúcha retraiu 1,3% em 2025. ",
      },
      {
        type: "paragraph",
        text: "Contudo, esse cenário pode estar mudando com a decisão da Suprema Corte norte-americana que considerou ilegais as tarifas. Como resultado, as tarifas até então vigentes foram, ao menos temporariamente, derrubadas, o que levou o governo dos Estados Unidos a impor uma tarifa de importação uniforme de 10,0% sobre todas as importações, em substituição às tarifas discricionárias. Em seguida, o Governo norte-americano anunciou que aumentaria essas tarifas para 15,0%.",
      },
      {
        type: "paragraph",
        text: "Esse novo tarifaço generalizado, que incide sobre todas as importações dos Estados Unidos, desloca o debate da competitividade, antes marcado por um desbalanceamento entre países exportadores, para uma comparação mais direta entre mercado interno e mercado externo.",
      },
      {
        type: "paragraph",
        text: "Esse novo cenário pode voltar a movimentar as peças no tabuleiro do comércio internacional. Vamos seguir acompanhando os impactos sobre as empresas gaúchas. ",
      },
    ],
  },
  {
    slug: "8",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage08.src,
      alt: "",
    },
    title:
      "Desafios enfrentados pelos arrozeiros leva à redução de 8,1% na área plantada. ",
    content: [
      {
        type: "paragraph",
        text: "O Rio Grande do Sul produz 68,0% do arroz brasileiro. São mais de 7,0 milhões de toneladas de arroz por ano. Mesmo com toda essa relevância à nível nacional os últimos anos vem sendo muito desafiadores para os produtores. ",
      },
      {
        type: "paragraph",
        text: "O preço da saca do arroz despencou 55,0% desde 2024, resultando em perdas para os produtores rurais e para a cadeia produtiva. Muitos produtores rurais terão prejuizo neste ano, mesmo que tenham boa produtividade, pois as estimativas do IRGA (Instituto Rio Grandense do Arroz) é de que o custo chegue a R$ 80,0/saca. Somado a isso, o capital financeiro está escasso e o custo do dinheiro está nos maiores níveis dos últimos 20 anos. ",
      },
      {
        type: "paragraph",
        text: "Um dos fatores que vem contribuindo para a queda nos preços é a expansão das importações, acelerada pela valorização do Real frente ao Dólar e pela expansão no cultivo de arroz no Paraguai. O país vizinho exporta para o Brasil cerca de 80,0% da sua produção, que na última safra chegou a 1,4 milhão de toneladas. ",
      },
      {
        type: "paragraph",
        text: "Nesta safra a área cultivada de arroz no Rio Grande do Sul deve ficar em 891,0 mil hectares, queda de 8,1% em relação a safra anterior. Segundo o IRGA, considerando a dinâmica atual de preços, a área cultivada deveria ser ainda menor, entre 800,0 e 850,0 mil hectares. Há 10 anos a área cultivada para a cultura no Estado era de cerca de 1,2 milhão de hectares. ",
      },
      {
        type: "paragraph",
        text: "Com uma conjuntura desafiadora como essa, fazer uma boa gestão da propriedade, buscar uma maior eficiência de custos e no uso dos insumos, bem como, fazer uma boa gestão dos passivos financeiros é fundamental para se manter no mercado e atravessar a turbulência.",
      },
    ],
  },
  {
    slug: "9",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
    image: {
      src: postImage09.src,
      alt: "",
    },
    title:
      "Tarifas antidumping favorecem a indústria siderúrgica nacional, mas vão encarecer o custo do aço para a indústria de transformação. ",
    content: [
      {
        type: "paragraph",
        text: "O governo brasileiro anunciou tarifas de importação em torno de 25% sobre determinados produtos de aço importado. A medida beneficia as siderúrgicas brasileiras ao reduzir a pressão competitiva do produto externo e, portanto, ampliar o espaço para recomposição de margens e preços no mercado doméstico. Como o setor siderúrgico tem alta concentração (poucos produtores relevantes), a dinâmica competitiva costuma permitir repasses mais rápidos quando há choque de oferta/concorrência, especialmente em linhas onde a substituição por importado era o principal “freio” de preço.",
      },
      {
        type: "paragraph",
        text: "Na prática, o efeito mais provável nos próximos meses é uma elevação do preço interno do aço, com intensidade variando por tipo de produto (planos, longos, revestidos etc.), pela dependência histórica de importações e pelo nível de estoques na cadeia. O aço é insumo central para diversas cadeias, tais como: automotiva, máquinas e equipamentos, linha branca, embalagens metálicas, construção civil, implementos, bens de capital, entre outras. Assim, o impacto tende a aparecer como aumento de custo industrial e, em parte, como repasse ao consumidor final, dependendo do poder de precificação de cada segmento e do nível de demanda.",
      },
      {
        type: "paragraph",
        text: "Se a sua empresa utiliza o aço como matéria prima, fique atento aos preços. Talvez faça sentido aumentar o estoque se conseguir fechar negócio com o preço vigente até a aplicação das tarifas, renegociar contratos de fornecimento e reavaliar preços de venda.",
      },
    ],
  },
];

export { posts };

/**
{
    slug: "0",
    date: "06/03/2026",
    author: "Jorge Ferreira, CFA",
     image: {
      src: postImage01.src,
      alt: "",
    },
    title: "",
    content: [
      {
        type: "paragraph",
        text: "",
      }
    ],
  },
 */
