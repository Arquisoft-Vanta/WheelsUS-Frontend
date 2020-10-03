import Vue from 'vue'
import MyComponent from '@/components/Banner.vue'

// Aquí hay algunas pruebas de Jasmine 2.0, aunque puede
// usar cualquier librería que prefiera
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('MyComponent', () => {
  it('renderiza correctamente con diferentes props', () => {
    expect(getRenderedText(MyComponent, {
      nombre: 'Hola'
    })).toBe('Hola')

    expect(getRenderedText(MyComponent, {
      nombre: 'Chau'
    })).toBe('Chau')
  })
})