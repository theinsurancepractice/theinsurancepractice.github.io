import { useRef } from 'react'
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'

const Select = () => {
  const isOutsideClick = useRef(false)
  
  return (
    <div className="contact-form-field">
      <label htmlFor="contact-form-preference">Preferred Mode of Contact</label>
      <Select.Root
        value={formData.Preference}
        onValueChange={value => handleChange({ target: { name: 'Preference', value: value } })}
      >
  
        {/* Trigger: The box you click */}
        <Select.Trigger className="contact-form-trigger">
          <Select.Value placeholder="Choose one" />
          <Select.Icon className="contact-form-icon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        {/* Content: The dropdown list */}
        <Select.Portal modal={false}>
          <Select.Content
            className="contact-form-content"
            position="popper"
            sideOffset={0}
            onPointerDownOutside={() => isOutsideClick.current = true}
            onCloseAutoFocus={e => {
              if (isOutsideClick.current) {
                e.preventDefault()
                isOutsideClick.current = false
              }
            }}
          >
            <Select.Viewport>

              <Select.Item value="No Preference" className="contact-form-item">
                <Select.ItemText>No Preference</Select.ItemText>
              </Select.Item>
              
              <Select.Item value="Phone" className="contact-form-item">
                <Select.ItemText>Phone</Select.ItemText>
              </Select.Item>
              
              <Select.Item value="Email" className="contact-form-item">
                <Select.ItemText>Email</Select.ItemText>
              </Select.Item>
              
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default Select