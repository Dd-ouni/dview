import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import button from '../button.vue'

describe('test button', () => {
    it('should render slot', () => {

        const wrapper = mount(button, {
            slots: {
                default: 'dview'
            }
        })

        expect(wrapper.text()).toContain('dview')
    })
})