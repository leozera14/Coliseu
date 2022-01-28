import React, { useState } from "react";

import {
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummaryProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ExpandMore } from "@mui/icons-material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  borderTop:
    theme.palette.mode === "dark"
      ? "1px solid rgba(255,255,255,.25)"
      : "1px solid rgba(0, 0, 0, .2)",
}));

export const AccordionComponent = () => {
  const [isExpanded, setIsExpanded] = useState<string | false>("panel1");

  var texts = [
    {
      id: 1,
      title: "O swing começa em casa, no dialogo aberto do casal.",
      text: "Sinceridade, base de qualquer relacionamento, deve estar acima de tudo dentro da convivência do casal que pretende partir para o swing ou troca de casais como é conhecido aqui no Brasil. Para aqueles que pretendem ingressar no mundo dessa maravilhosa experiência sexual aconselhamos uma lida a dois desse texto, (muita reflexão e dialogo na busca das realizações de suas fantasias).",
    },
    {
      id: 2,
      title: "Abra seu coração com seu parceiro.",
      text: "Seu parceiro só vai saber de seus desejos e fantasias se você abrir seu coração. Lembre-se que a decisão tem que ser de ambos, mas antes você tem que saber sobre sua vontade lembre-se que a decisão tem que ser muito bem pensado, decidido sobre seus próprios desejos chegou a hora de conversar abertamente com seu parceiro, imagine que a principio será um choque para ele, afinal vivemos num mundo regido pela monogamia, o primeiro pensamento que vem ao parceiro e que já não existe amor, que no fundo as intenções são outras e coisas desse tipo, de um modo verdadeiro e sincero fale sobre suas vontades e desejos, mostre afeto, carinho e que sem a companhia dele ou dela suas fantasias não existem, afinal o swing e para casais e se não houver o consentimento mútuo não há swing. Mostre de forma clara que a proposta feita e por amor e confiança no amor recíproco. Aproveite a oportunidade para contar todas suas fantasias e perguntar sobre as dele, afine os desejos dos dois e com certeza esse exercício de democracia sexual levará o casal a ótimas realizações.",
    },
    {
      id: 3,
      title: "Insistir, mas não pressionar.",
      text: "Tenha paciência, espere o parceiro se acostumar com a idéia. Um parceiro quer uma coisa, o outro não quer, o que fazer? Esperar, insistir, conversar, explicar os motivos reais dessa vontade, até mostrar ao que não quer que podem ao menos tentar para ver como funciona de fato. Tudo isso deve ser feito sem forçar a barra. Paciência, palavra mágica que separa o sucesso do fracasso em qualquer empreitada, será muito necessário nessa nova etapa da vida, afinal não será numa única conversa que vocês irão acertar todos os pontos, no começo pode esperar por coisas assim: 'Não sou o suficiente para você?' 'Na verdade você não me ama mais' ou ainda 'O que você quer é comer outras mulheres' Mostre com calma e sinceridade que o você quer e realizar fantasias, ser feliz e que essa felicidade só será completa com a cumplicidade e companhia da pessoa amada.",
    },
    {
      id: 4,
      title: "Vamos fazer Swing?",
      text: "Internet, revistas especializadas, jornais e clubes são os meios de encontrar seus futuros amigos. Decidido sobre a realização das fantasias começa a busca dos futuros parceiros de cama. O swing e praticado por pessoas comum, vão desde os mais simples até os juizes, médicos, advogados, políticose etc. Todos têm e terão sempre as mesmas preocupações que você, na grande maioria buscam e oferecem sigilo, discrição e cuidados higiênicos. Você poderá encontrá-los através de anúncios em jornais, revistas, Internet, e nos clubes swing que oferecem sigilo, segurança e a facilidade de estar entre muitos que pensam e querem a mesma coisa que você.Não se acanhe, tire uma noite para conhecer um clube e vá sem segundas intenções a não ser o de conhecer esse ambiente alegre e descontraído, conhecer novas pessoas e quem sabe iniciar uma nova e maravilhosa etapa em sua vida.",
    },
    {
      id: 5,
      title: "A primeira vez.",
      text: "Um simples olhar de desejo ou um abraço mais apertado ou até mesmo um simples aperto de mãos podem ser o inicio de muita coisa. Lembra da sua primeira vez? No swing não e muito diferente, o nervosismo pode chegar e até atrapalhar de alguma forma, a melhor coisa é não encucar e deixar rolar. Voltamos ao dialogo sincero, converse com seu parceiro e quem sabe em vez de um swing seja melhor começar com um ménage, sexo a três, com um outro homem ou mulher na cama, se a opção for mesmo o swing um clube será a melhor escolha pelas oportunidades de poder conversar com muitos casais e descobrir o que melhor se encaixa nas suas preferências. Comece conversando e conte-lhes sobre suas duvidas e receios, isso ira ajudar a acalmar tanto você como seu parceiro, no desenrolar da conversa tente um contato físico, nada agressivo, comece com um toque, um abraço, um convite para dançar e diga para seu par fazer o mesmo, o importante e deixar caminhar com naturalidade.",
    },
    {
      id: 6,
      title: "Ciúmes sem culpas.",
      text: "Não deixe os sentimentos convulsos atrapalhar sua experiência,afinal a decisão foi bem pensada por ambas as partes. Entre os desejos e as realizações, existem milênios de anos de um mundo machista, então e bem comum ter ciúmes ao ver pela primeira vez a pessoa amada transando com outra pessoa, nessa hora o melhor conselhoe lembra que aquilo só esta acontecendo por que houve a concordância e permissão dos dois. Os prazeres do sexo livre, da troca de casais, do swing só e possível se não houver nenhum sentimento de culpa ou ciúmes,voltamos a bater na tecla do prévio dialogo entre as partes, em tudo que foi dito, dos combinados na busca do prazer, provavelmente seu parceiro vai estar sentindo os mesmo conflitos de sentimentos e o melhor e se concentrar no que esta fazendo, acariciar e beijar seu par para sentir e mostrar que mesmo estando com outros,estão juntos na busca de novas emoções. Incerteza, preocupações, dúvida e indecisões são coisas que com o tempo serão suplantados por tesão, carinho e certeza da escolha feita.",
    },
    {
      id: 7,
      title: "Uma equipe de dois",
      text: "Vivendo o tesão da troca de casal não haverá tensão ou nervosismo que atrapalhe. Sempre que sentir dúvidas na hora do swing, olhe, toque, sinta seu parceiro, veja o que ele esta sentindo, Nãopermita que sentimento alheio ao sexo intervirá no seu prazer. Após cada nova experiência troquem opiniões, falem sobre as sensações de cada um, diga o que sentiu e o que viu, nunca se esqueça que vocês são uma equipe, um casal, e que juntos resolveram partir para um novo conceito de relação, que o swing e para aqueles casais que procuram os prazeres sexuais sem mentir, enganar ou iludir o parceiro. Saber que a pessoa amada e desejada por outras pessoas, além de incrementar ainda mais a vida sexual vai transformar o casal em confidentes, comparsas, amigos, cúmplices nessa nova relação que juntos escolheram",
    },
    {
      id: 8,
      title: "Como agir numa Festa Swing?",
      text: "Quando a vida não imita a arte. Lógico que a busca numa festa swing é realizar as fantasias do casal, mas isso não se compara ao mostrado nosvídeos eróticos onde todos transam ao mesmo tempo, gozam todos juntos e ninguém é de ninguém. Alguns transam, outros descansam, alguns dançam, normalmente existem espaço para cada coisa, mas se um casal quiser transar na pista de dança, ou mesmo numa das mesas do bar, ninguém vai implicar afinal, nada é proibido nem obrigatório.Nessas festas muito mais que sexo, os casais buscam se divertir dançando, conversando e conhecendo novas pessoas que pensam sobre sexo e swing igual a eles, A troca se faz de maneira natural e espontânea, sem obrigações de nenhuma parte. Nesses clubes as festas demoram horas e as oportunidades de participar de várias transas swing vão acontecendo durante a noite toda. Havendo interesse do casal em se aproximar e participar ou apenas observar não se acanhe, vá em frente, numa festa swing o ideal é você relaxar e curtir os acontecimentos e deixar rolar.",
    },
    {
      id: 9,
      title:
        "O respeito aos direitos de cada um é primordial e preservará o seu.",
      text: "Espere por um sinal de consentimento antes de ir avançando sobre um parceiro em potencial. Em um clube de swing sempre tem os mais variados tipos de freqüentadores, os mais experientes, os mais afobados, exibicionistas, voyeur e iniciantes. Para que todos se divirtam e fiquem satisfeitos deve-se obedecer as regras, não está escrito em lugar algum, mas servem para todos, a primeira e mais importante e que jamais avance sobre alguémsem ter tido algum tipo de sinal que deixe claro à aceitação do possível parceiro, se vocês querem ser respeitados, osoutros também o querem. Não quer dizer que precisa ser pomposo, tipo, 'ser-me-ia possível o intercurso sexual com vossa senhoria?', lembre-se dos jogos de paquera, sedução, os olhares e toques que todos nos conhecemos. Se houve uma negativa, não se acanhe e parta em busca de uma nova tentativa, uma melhor observação do ambiente vai mostrar que tem pessoas interessadas em você, divirta-se.",
    },
    {
      id: 10,
      title: "Finalmente a troca de casais.",
      text: "Baco abre os braços para sua primeira suruba, orgia, troca de casais ou como você quiser chamar essa maravilhosa experiência O SWING. Iniciar no swing, mesmo tendo passado por todas as etapas de diálogo, desconfiança dos propósitos, desentendimentos e outras situações normais aos iniciantes mas que leva ao amor e compreensão dos desejos e anseios do casal e algo pra ser lembrando. Deixe as preocupações e dúvidas de fora, se concentre no prazer e no sexo que o swing lhe proporcionará. Não tenha dúvidas que sentimentos confusos irão querer atrapalhar sua noite, mas não se deixe levar, sigaseus instintos e desejos, concentre-se em suas fantasias e deixe o prazer falar. Depois de tantas dúvidas e inseguranças você merece uma compensação. Uma boa transa. Então se divirta.",
    },
  ];

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, newExpand: boolean) => {
      setIsExpanded(newExpand ? panel : false);
    };

  return (
    <>
      {texts.map((info: any, i: number) => (
        <Accordion
          key={i}
          expanded={isExpanded === `panel${info.id}`}
          onChange={handleChangeAccordion(`panel${info.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            arial-controls={`panel${info.id}d-content`}
            id={`panel${info.id}d-header`}
          >
            <Typography>{info.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{info.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
