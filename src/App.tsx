import Table from '@/components/Table'
import JSONResponse from '@/JSONResponse.json'
import { TableColumn } from 'react-data-table-component'

type OrderType = {
  OrderLineID: number
  OrderID: number
  StockItemID: number
  Description: string
  PackageTypeID: number
  Quantity: number
  UnitPrice: number
}
const columns: TableColumn<OrderType>[] = [
  {
    name: 'Order Line ID',
    selector: row => row.OrderLineID,
    sortable: true
  },
  {
    name: 'Order ID',
    selector: row => row.OrderID,
    sortable: true
  },
  {
    name: 'Stock Item ID',
    selector: row => row.StockItemID,
    sortable: true
  },
  {
    name: 'Description',
    selector: row => row.Description,
    // cell: row => ( <div className='w-72'>
    //     <div className='relative inline-block group'>
    //       <button className='py-2 px-4 rounded'>{row.Description}</button>
    //       <div className='opacity-0 invisible bg-black text-white text-xs rounded py-1 px-4 absolute z-10 bottom-full left-0 ml-2 group-hover:opacity-100 group-hover:visible transition-all duration-300 text-ellipsis overflow-hidden'>
    //         {row.Description}
    //         <svg
    //           className='absolute text-black h-2 left-0 top-full'
    //           x='0px'
    //           y='0px'
    //           viewBox='0 0 255 255'
    //         >
    //           <polygon
    //             className='fill-current'
    //             points='0,0 127.5,127.5 255,0'
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // ),
    sortable: true,
    width: '400px'
  },
  {
    name: 'Package Type ID',
    selector: row => row.PackageTypeID,
    sortable: true
  },
  {
    name: 'Quantity',
    selector: row => row.Quantity,
    sortable: true
  },
  {
    name: 'Unit Price',
    selector: row => row.UnitPrice,
    sortable: true
  }
]
function App() {
  return (
      <div className='h-screen bg-slate-700'>
        <h1 className='mb-24 text-white'>Table</h1>
        <Table data={JSONResponse} columns={columns} fixedHeader={true} fixedHeaderScrollHeight='600px' />
      </div>
  )
}

export default App
