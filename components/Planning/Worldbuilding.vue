<template>
  <div class="worldbuilding">
    <div class="content">
      <h2 class="mb-6">{{ task }}</h2>
      <div class="card mb-6">
        <div class="card-body">{{res}}</div>
      </div>
      <div class="card mt-6 mb-6">
        <div class="card-body">
          <div class="mb-3">
            <p>Por onde você gostaria de começar?</p>
            <div class="d-grid gap-2 mb-4">
              <button
                v-for="p in pillars"
                class="btn btn-secondary"
                @click="selectTask(t)"
              >
                {{ p.pillar }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task', 'res'],
   data() {
    return {
      pillars: [
        {
          pillar: 'Ambiente e Geografia',
          description: 'Desenvolver a geografia e a topografia do seu mundo é essencial para criar um senso de lugar. Considere características físicas, como montanhas, rios, florestas e desertos, bem como a distribuição dos diferentes biomas e climas.'
        } ,
        {
          pillar: 'História',
          description: 'Crie uma história para o seu mundo, incluindo eventos passados ​​que moldaram sua sociedade e cultura. Pense em mitos, lendas e civilizações antigas, que podem fornecer uma base para a compreensão da atualidade.'
        },
        {
          pillar: 'Sociedade e Cultura',
          description: 'Explore as diferentes sociedades e culturas que existem no seu mundo. Considere sua estrutura social, sistemas políticos, religiões, crenças, tradições, costumes, línguas e relações interculturais.'
        },
        {
          pillar: 'Tecnologia e Magia',
          description: 'Determine o nível de tecnologia presente no seu mundo, bem como a presença ou ausência de magia. Considere como esses elementos afetam a vida cotidiana, a economia, a guerra e outros aspectos da sociedade.'
        },
        {
          pillar: 'Economia e Comércio',
          description: 'Desenvolva sistemas econômicos, recursos naturais, rotas comerciais e relações comerciais entre diferentes regiões do seu mundo. Isso ajudará a criar uma sensação de autenticidade e interdependência.'
        },
        {
          pillar: 'Conflitos e Política',
          description: 'Explore os conflitos internos e externos que moldam o seu mundo, como guerras, rivalidades políticas, disputas de território, lutas pelo poder e desafios sociais. Isso pode adicionar profundidade à sua narrativa.'
        },
        {
          pillar: 'Criaturas e Seres Sobrenaturais',
          description: 'Considere a existência de criaturas fantásticas, seres míticos ou outras formas de vida sobrenatural em seu mundo. Pense em suas características, comportamento, habitat e interação com os seres humanos.'
        }
      ],
    }
  },
  
  mounted() {
    console.log(this.task)
    console.log(this.res)
  }
}
</script>
