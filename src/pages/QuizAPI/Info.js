export const resultQuiz = [
    {
        id: "conservative",
        name: "Perfil Conservador",
        label: "Você prefere segurança e estabilidade ao invés de grandes lucros. " +
        "O investidor conservador prioriza proteger seu dinheiro e evita correr riscos " +
        "desnecessários e costuma manter a maior parte do seu dinheiro em investimentos seguros, " +
        "como Tesouro Direto, CDB ou LCI/LCA."
    },
    {
        id: "moderate",
        name: "Perfil Moderado",
        label: "Você é um investidor que busca um equilíbrio entre " +
        "segurança e rendimento. Para isso, diversifica seus investimentos " + 
        "entre opções mais seguras, e opções mais arriscadas, aproveitando as " +
        "oportunidades sem extrapolar nos riscos, é comum que invista em ativos como " +
        "Tesouro Direto, Ações de empresas consolidadas ou Fundos Imobiliários. "
    },
    {
        id: "audacious",
        name: "Perfil Arrojado",
        label: "Você é um investidor de perfil arrojado,  marcado por  " +
        "ter uma maior tolerância ao risco e uma boa compreensão do mercado, " +
        "você se sente confortável em investir em ativos com grandes variações de preço " +
        "para alcançar uma rentabilidade expressiva a longo prazo, dessa forma, costuma " +
        "investir em Ações de empresas de crescimento, Fundos de investimento em ações ou Mercado de câmbio."
    }
]

export const questions = [
    {
        id: 1,
        question: "Qual é o seu nível de experiência com investimentos?",
        alternatives: [
            {
                label: "Nenhuma",
                value: 0
            },
            {
                label: "Baixa",
                value: 1
            },
            {
                label: "Mediana",
                value: 2
            },
            {
                label: "Alta",
                value: 3
            }
        ],
    },
    {
        id: 2,
        question: "Por quanto tempo você está disposto a manter seu dinheiro investido?",
        alternatives: [
            {
                label: "Menos de 6 meses",
                value: 0
            },
            {
                label: "Entre 6 meses e 1 ano ",
                value: 1
            },
            {
                label: "Entre 1 ano e 3 anos ",
                value: 2
            },
            {
                label: "Acima de 3 anos",
                value: 3
            }
        ],
    },
    {
        id: 3,
        question: "Qual o objetivo deste investimento?",
        alternatives: [
            {
                label: "Proteger o valor do dinheiro ao longo do tempo, assumindo poucos riscos.",
                value: 0
            },
            {
                label: "Aumentar o dinheiro aos poucos ao longo do tempo, assumindo alguns riscos.",
                value: 2
            },
            {
                label: "Aumentar o dinheiro mais rápido que a média do mercado, mesmo que isso signifique correr muitos riscos.",
                value: 4
            },
            {
                label: "Ganhar muito dinheiro no curto prazo, aceitando riscos muito altos.",
                value: 5
            }
        ],
    },
    {
        id: 4,
        question: "Quais foram suas aplicações financeiras nos últimos 24 meses?",
        alternatives: [
            {
                label: "Não fiz nenhuma aplicação financeira ou investi apenas em produtos e/ou fundos de renda fixa.",
                value: 0
            },
            {
                label: "Investi em produtos ou fundos de renda fixa, renda variável e/ou derivativos com o objetivo de proteção.",
                value: 2
            },
            {
                label: "Investi em produtos ou fundos de renda fixa, renda variável e/ou derivativos com o objetivo de obter lucros rápidos ou/e potencial rentabilidade.",
                value: 4
            }
        ],
    },
    {
        id: 5,
        question: "Qual das alternativas melhor classifica sua experiência com o mercado financeiro?",
        alternatives: [
            {
                label: "Não possuo conhecimento do mercado financeiro",
                value: 0
            },
            {
                label: "Possuo pouca experiência com o mercado financeiro",
                value: 1
            },
            {
                label: "Possuo conhecimento razoável do mercado financeiro",
                value: 2
            },
            {
                label: "Possuo pleno conhecimento do mercado financeiro",
                value: 4
            }
        ],
    },
    {
        id: 6,
        question: "Considerando sua renda habitual, qual parte dela você planeja investir?",
        alternatives: [
            {
                label: "No máximo 25%",
                value: 0
            },
            {
                label: "Entre 25,01 e 50%",
                value: 2
            },
            {
                label: "Acima de 50%",
                value: 4
            }
        ],
    },
    {
        id: 7,
        question: "Se suas aplicações sofressem uma queda maior que 30%, qual seria sua reação?",
        alternatives: [
            {
                label: "Retiraria todo o dinheiro e colocaria na poupança.",
                value: 0
            },
            {
                label: "Manteria o investimento e esperaria o mercado melhorar.",
                value: 2
            },
            {
                label: "Aumentaria o investimento para aproveitar as oportunidades do mercado.",
                value: 4
            }
        ],
    },
    {
        id: 8,
        question: "Como está distribuído o seu dinheiro?",
        alternatives: [
            {
                label: "Não tenho investimentos ou todo o meu dinheiro está em opções seguras, como poupança ou imóveis.",
                value: 0
            },
            {
                label: "Menos de um quarto do meu dinheiro está em investimentos mais arriscados, como ações, enquanto o restante está em opções seguras.",
                value: 2
            },
            {
                label: "Entre um quarto e metade do meu dinheiro está em investimentos mais arriscados, como ações, com o restante em opções seguras.",
                value: 3
            },
            {
                label: "Mais da metade do meu dinheiro está em investimentos mais arriscados, como ações.",
                value: 4
            }
        ],
    },
    {
        id: 9,
        question: "Em relação ao dinheiro que você investiu e aos lucros que ele gera, " +
        "em qual dessas situações você se encaixa?",
        alternatives: [
            {
                label: "Eu dependo do dinheiro que ganho com meus investimentos para complementar minha renda mensal.",
                value: 0
            },
            {
                label: "Às vezes, posso precisar pegar um pouco do dinheiro investido para cobrir meus gastos. Mas não estou pensando em fazer isso em breve e planejo continuar investindo regularmente",
                value: 2
            },
            {
                label: "Não pretendo retirar meu dinheiro investido em breve e planejo continuar investindo regularmente.",
                value: 3
            },
            {
                label: "Não pretendo retirar meu dinheiro investido em breve, mas também não tenho planos de investir mais.",
                value: 4
            }
        ],
    },
    {
        id: 10,
        question: "Qual sua faixa de renda mensal média?",
        alternatives: [
            {
                label: "Até R$ 1.000",
                value: 0
            },
            {
                label: "De R$ 1.001 até R$ 5.000",
                value: 1
            },
            {
                label: "De R$ 5.001 até R$ 10.000",
                value: 2
            },
            {
                label: "Acima de R$ 10.000",
                value: 3
            }
        ],
    },
    {
        id: 11,
        question: "Indique em quais tipos de aplicações você já investiu nos últimos dois anos " +
        "e com que frequência.",
        label: "a) Caderneta de poupança",
        reference: 3,
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Investi de 1 a 2 vezes",
                value: 1
            },
            {
                label: "Investi 3 ou mais vezes",
                value: 1
            }
        ],
    },
    {
        id: 12,
        question: "Indique em quais tipos de aplicações você já investiu nos últimos dois anos " +
        "e com que frequência.",
        label: "b) CDB, LCI, LCA, Tesouro Direto",
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Investi de 1 a 2 vezes",
                value: 2
            },
            {
                label: "Investi 3 ou mais vezes",
                value: 3
            }
        ],
    },
    {
        id: 13,
        question: "Indique em quais tipos de aplicações você já investiu nos últimos dois anos " +
        "e com que frequência.",
        label: "c) Fundos de Investimento, Ações",
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Investi de 1 a 2 vezes",
                value: 5
            },
            {
                label: "Investi 3 ou mais vezes",
                value: 6
            }
        ],
    },
    {
        id: 14,
        question: "Com base nas suas respostas anteriores, por favor, indique o volume " +
        "aproximado que foi destinado para o tipo de aplicação que você já utilizou nos " +
        "últimos dois anos.",
        label: "a) Caderneta de poupança",
        reference: 3,
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Até cinco mil reais",
                value: 1
            },
            {
                label: "Mais de cinco mil reais",
                value: 1
            }
        ],
    },
    {
        id: 15,
        question: "Com base nas suas respostas anteriores, por favor, indique o volume " +
        "aproximado que foi destinado para o tipo de aplicação que você já utilizou nos " +
        "últimos dois anos.",
        label: "b) CDB, LCI, LCA, Tesouro Direto",
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Até cinco mil reais",
                value: 2
            },
            {
                label: "Mais de cinco mil reais",
                value: 3
            }
        ],
    },
    {
        id: 16,
        question: "Com base nas suas respostas anteriores, por favor, indique o volume " +
        "aproximado que foi destinado para o tipo de aplicação que você já utilizou nos " +
        "últimos dois anos.",
        label: "c) Fundos de Investimento, Ações",
        alternatives: [
            {
                label: "Nunca investi",
                value: 0
            },
            {
                label: "Até cinco mil reais",
                value: 5
            },
            {
                label: "Mais de cinco mil reais",
                value: 6
            }
        ],
    }
]