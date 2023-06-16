<template>
  <div class="container-fluid guide my-4">
    <h2 class="mb-6">Base Mitológica</h2>
    <p>Pretende utilizar alguma mitologia como base para usa história?</p>
    <div class="row">
      <button
        v-for="mitologia in mitologias"
        :key="mitologia.mitologia"
        class="btn-light col-4"
        @click="selecionarMitologia(mitologia)"
      >
        {{ mitologia.mitologia }}
      </button>
    </div>
    <div class="mt-6 pb-4">{{ result }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mitologias: [],
      result: '',
    }
  },
  mounted() {
    this.mitologias = [
      { mitologia: 'grega', guia: 'Atena (deusa da sabedoria)' },
      { mitologia: 'romana', guia: 'Minerva (deusa da sabedoria)' },
      { mitologia: 'egípcia', guia: 'Thoth (deus do conhecimento)' },
      { mitologia: 'japonesa', guia: 'Amaterasu (deusa da criação)' },
      { mitologia: 'nórdica', guia: 'Odin (deus da sabedoria)' },
      { mitologia: 'celta', guia: 'Brigid (deusa do conhecimento)' },
      { mitologia: 'asteca', guia: 'Quetzalcóatl (deus da sabedoria)' },
      { mitologia: 'chinesa', guia: 'Pangu (deus da criação)' },
      { mitologia: 'bantu', guia: 'Mbombo (deus da criação)' },
      { mitologia: 'iorubá', guia: 'Orunmila (deus do conhecimento)' },
      { mitologia: 'tupi-guarani', guia: 'Nhanderu (deus da criação)' },
      { mitologia: 'nativo americana', guia: 'Coatlicue (deusa da sabedoria)' },
    ]
  },
  methods: {
    selecionarMitologia(mitologia) {
      const mitologiasAtualizadas = this.mitologias.map((m) => {
        if (m.mitologia === mitologia.mitologia) {
          return { ...m, selecionada: true }
        } else {
          return { ...m, selecionada: false }
        }
      })

      this.mitologias = mitologiasAtualizadas
      this.result = `Você selecionou a mitologia ${mitologia.mitologia} com o guia ${mitologia.guia}.`

      const mitologiaEscolhida = {
        mitologia: mitologia.mitologia,
        guia: mitologia.guia,
      }

      localStorage.setItem('mitologias', JSON.stringify(mitologiaEscolhida))

      console.log(
        `Você selecionou a mitologia ${mitologia.mitologia} com o guia ${mitologia.guia}.`
      )
      // Outras ações a serem executadas após a seleção da mitologia
    },
  },
}
</script>

<style scoped lang="scss">
.guide {
}
</style>
