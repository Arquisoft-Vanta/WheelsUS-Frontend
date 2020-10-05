import { mount } from '@vue/test-utils'
import Signup from '@/components/Signup.vue'

describe('Signup component test:', () => {

    test('Is a vue instance', () => {
        const wrapper = mount(Signup, {
            propsData: {
                Signup: { name: "Signup 1",
                    completed: false
                    }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
  });

});
