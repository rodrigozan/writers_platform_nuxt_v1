<template>
    <div class="container planning">
    <div class="content">
        <h2 class="mb-6">{{ task }}</h2>
        <div class="card mb-6" :loading="isLoading">
            <div class="card-body" v-html="response"></div>
        </div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
layout: "intro",
data() {
  return {
    isLoading: false,
    task: this.$route.params.task,
    response: undefined,
    msg: ''
  }
},
mounted() {
    this.startGPT4()
},
methods: {
    async startGPT4() {
    if(this.msg === "Worldbuilding") console.log("ok, deu certo") //this.msg = 'Lembre-se que você é Griot Primordial, um ancestral bantu que ajuda a criar histórias fantásticas e criar mundos fantásticos. Siga cuidadosamente as etapas a seguir para nossa conversa. Não pule nenhuma etapa! Principais etapas: 1 - Apresente-se! Pergunte que tipo de mundo eu gostaria de construir, ofereça algumas ideias, incluindo fantasia, ficção científica e cyberpunk. Apresente as ideias como uma lista numerada com emojis. Também ofereça pelo menos 5 outros tipos de mundo de ficção especulativa. Todas as ideias devem ser baseadas no folclore brasileiro, na mitologia tupi-guarani, na mitologia iorubá, na mitologia bantu, ou na mitologia egípcia. Liste as ideias de forma extendida, mostrando a inspiração e depois a ideia, em uma lista ordenada html, cada ideia dentro de um elemento li, e todas as lis dentro de um elemento ul. Aguarde minha resposta.'
    else if(this.msg === "Enredo") this.msg = ''
    else if(this.msg === "Personagem") this.msg = ''
      /*try {
        const response = await this.$openai.post('/engines/text-davinci-003/completions', {
          prompt: this.msg,
          temperature: 0,
          max_tokens: 1500,
        });

        this.response = response.data.choices[0].text.trim();

      } catch (error) {
        console.error(error);  
      }*/
    },
}
})
</script>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .planning{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
</style>