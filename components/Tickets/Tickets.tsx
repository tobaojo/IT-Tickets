import 'react-data-grid/lib/styles.css';
import DataGrid, { Column, SortColumn } from 'react-data-grid'
import { useEffect, useMemo, useState } from 'react';
type Row = {
    Id: string
    name: string
    Client: string
    Title: string
    Priority: string
    Agent: string
}

type Columns = {
    key: string
    name: string
    sortable: boolean
    resizable: boolean
}

type Comparator = (a: Row, b: Row) => number;

const Tickets = () => {
    const [rows, setRows] = useState<Row[]>([])
    const [selectedOption, setSelectedOption]  = useState('')
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([])

    const priorities = ['Critical','Low','Medium', 'High']

    const columns: readonly Column<Row, unknown>[] = [
        {key: 'Id', name: 'ID', sortable: true, resizable: true},
        {key: 'Client', name: 'Client',  sortable: true, resizable: true},
        {key: 'Title', name: 'Title',  sortable: true, resizable: true},
        {key: 'Priority', name: 'Priority',  sortable: true, resizable: true, 
        editor: (p) => (
        <select
           onChange={(e)=> p.onRowChange({...p.row, Priority: e.target.value}, true)}
           value={p.row.Priority}
            >
            {priorities.map((priority)=>{
                return <option key={priority}>{priority}</option>
            })}
        </select>),
        editorOptions: {
            editOnClick: true
        }
    },
        {key: 'Agent', name: 'Agent',  sortable: true, resizable: true}
    ]

    const rowKeyGetter = (row: Row) => {
        return row.Id
    }
    
    function getComparator(sortColumn: string): Comparator {
        switch(sortColumn){
            case 'Id':
            case 'Client':
            case 'Title':
            case 'Priority':
            case 'Agent':
                return (a, b) => {
                    return a[sortColumn].localeCompare(b[sortColumn])
                }
                default:
            throw new Error('unsupported')
        }
    }

    const getData = async() => {
        const response = await fetch('data.json')
        const ticketData = await response.json()
        setRows(ticketData.data)
    }

    useEffect(() => {getData()}, [])

    const sortedRows = useMemo((): readonly Row[] => {
        if (sortColumns.length === 0) return rows;
        return [...rows].sort((a, b) => {
          for (const sort of sortColumns) {
            const comparator = getComparator(sort.columnKey);
            const compResult = comparator(a, b);
            if (compResult !== 0) {
              return sort.direction === 'ASC' ? compResult : -compResult;
            }
          }
          return 0;
        });
      }, [rows, sortColumns]);

    return (
        <>
        <div><h3>Unresolved Tickets</h3></div>
        <DataGrid columns={columns}
         rows={sortedRows} 
         sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns} 
        rowKeyGetter={rowKeyGetter} 
        onRowsChange={(rows, data)=>{
            console.log(rows, data)
            setRows(rows)

        }}
        onSelectedRowsChange={(selectedRows)=>{
            console.log(selectedRows)
        }
        }
      />
        </>
       
    )
}

export default Tickets
