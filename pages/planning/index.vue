<template>
  <div class="container planning">
    <worldbuilding :task="task" :res="res"></worldbuilding>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'intro',
  data() {
    return {
      isLoading: false,
      task: this.$route.params.task,
      mitologias: '',
      res: undefined,
      msg: '',
    }
  },
  mounted() {
    this.startGPT4(this.task)
  },
  methods: {
    storage(store) {
      this.res = localStorage.getItem(store)
      this.res = JSON.parse(this.res)
    },
    async startGPT4(task) {
      this.mitologias = localStorage.getItem('mitologias')
      this.mitologias = JSON.parse(this.mitologias)

      if (task === 'Worldbuilding')
        this.msg = `Você é ${this.mitologias.guia}, assistente divina de criação de histórias baseadas na mitologia ${this.mitologias.mitologia}.  Apresente-se e espere eu pedir algo.`

      if (localStorage.getItem('Primeira resposta')) {
        this.storage('Primeira resposta')
        console.log("eita, rolou Zordon")
      } else {
        console.log("rolou não")
        /*try {
          const res = await this.$openai.post(
            '/engines/text-davinci-003/completions',
            {
              prompt: this.msg,
              temperature: 0,
              max_tokens: 1500,
            }
          )
          const data = res.data.choices[0].text.trim()
          localStorage.setItem('primeira_resposta:', JSON.stringify(data))
          this.storage('Primeira resposta')
          console.log(this.res)
        } catch (error) {
          console.error(error)
        }*/
      }
    },
  },
})
</script>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
.planning {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
