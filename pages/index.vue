<template>
  <div class="container">
    <h1>Bem-vindo ao Griots</h1>
    <hr />
    <p>Guiaremos você com a sabedoria ancestral para a criação de um mundo fantástico.</p>
    <p>Aguarde enquanto escolhemos um Sabio para guiá-lo em sua jornada de worldbuilder</p>
    <div class="card" :loading="isLoading">
      <div class="card-body">
        Olá! Meu nome é Griot Primordial e sou um assistente de criação de mundos. Sou aqui para ajudar a criar um mundo
        único e interessante para você explorar. Estou aqui para guiá-lo através do processo de criação de mundo,
        fornecendo conselhos e sugestões para ajudá-lo a criar o mundo dos seus sonhos.
      </div>
    </div>
    <div class="my-3" v-if="isLoading == false">
      <label class="form-label">Vamos começar?</label>
      <div class="d-grid gap-2">
        <button @click="fetchResponse" class="btn btn-primary" type="button">
          Clique aqui para que eu te apresente o menu
        </button>
      </div>
    </div>
    <div class="card" :loading="isLoading">
      <div class="card-body" v-html="response"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Configuration, OpenAIApi } from 'openai'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      question: '',
      answer: undefined,
      response: undefined,
      index: 0,
      list: [],
      isLoading: false,
    }
  },
  mounted() {
    //this.initialQuestion()
  },
  methods: {
    async initialQuestion() {
      this.isLoading = true

      const configuration = new Configuration({
        apiKey: "",
      })

      const openai = new OpenAIApi(configuration)

      let options = {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["/"],
      };

      // Pergunte que tipo de mundo eu gostaria de construir, ofereça algumas ideias, incluindo fantasia, ficção científica e cyberpunk. Apresente as ideias como uma lista numerada com emojis. Também ofereça pelo menos 5 outros tipos de mundo de ficção especulativa. Todas as ideias devem ser baseadas no folclore brasileiro, na mitologia tupi-guarani, na mitologia iorubá, na mitologia bantu, ou na mitologia egípcia. Aguarde minha resposta.

      let completeOptions = {
        ...options,
        prompt: "Você é Griot Primordial, um assistente de criação de construção de mundo. Em primeiro lugar, apresente-se.",
      };

      const response = await openai.createCompletion(completeOptions)

      if (response) {
        if (response.data.choices) {
          this.answer = response.data.choices[0].text
        } else {
          this.answer = 'Não foi possível atender sua solicitação'
        }
      }
      this.isLoading = false
    },
    async fetchResponse() {
      try {
        const response = await this.$openai.post('/engines/text-davinci-003/completions', {
          prompt: 'Lembre-se que você é Griot Primordial, um ancestral bantu que ajuda a criar histórias fantásticas e criar mundos fantásticos. Pergunte que tipo de mundo eu gostaria de construir, ofereça algumas ideias, incluindo fantasia, ficção científica e cyberpunk. Apresente as ideias como uma lista numerada com emojis. Também ofereça pelo menos 5 outros tipos de mundo de ficção especulativa. Todas as ideias devem ser baseadas no folclore brasileiro, na mitologia tupi-guarani, na mitologia iorubá, na mitologia bantu, ou na mitologia egípcia. Liste as ideias de forma extendida, mostrando a inspiração e depois a ideia, em uma lista ordenada html, cada ideia dentro de um elemento li, e todas as lis dentro de um elemento ul. Em cada li, adicione @click="selectIdea(index)", e antes de cada resposta, adicione {{ index++ }} Aguarde minha resposta.',
          temperature: 0,
          max_tokens: 1000,
        });

        this.response = response.data.choices[0].text.trim();

      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {},
})
</script>
