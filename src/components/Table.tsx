import DataTable, { TableProps, createTheme } from 'react-data-table-component'
import { NpProfileTableBox } from './styled'

createTheme(
  'tailwind',
  {
    text: {
      primary: '#fff',
      secondary: '#2aa198'
    },
    background: {
      default: '#334155'
    },
    context: {
      background: '##34155',
      text: '#FFFFFF'
    },
    divider: {
      default: '#073642'
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)'
    }
  },
  'dark'
)

function Table<T extends object>({ ...rest }: TableProps<T>) {
  return (
    <NpProfileTableBox>
      <div className='rounded-md p-14p md:p-24p border border-solid border-colorLightGrey shadow-grey bg-colorWhite mt-1'>
        <DataTable
          dense
          pagination
          theme='tailwind'
          className='border mt-[-30px]'
          {...rest}
        />
      </div>
    </NpProfileTableBox>
  )
}

export default Table
