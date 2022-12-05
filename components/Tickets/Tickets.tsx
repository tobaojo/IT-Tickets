import 'react-data-grid/lib/styles.css';
import DataGrid, { SortColumn } from 'react-data-grid'
import { useCallback, useEffect, useMemo, useState } from 'react';

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

const priorities = ['Critical','Low','Medium', 'High']

const createColumns = () => [
    {key: 'Id', name: 'ID', sortable: true, resizeable: true},
    {key: 'Client', name: 'Client',  sortable: true, resizeable: true},
    {key: 'Title', name: 'Title',  sortable: true, resizeable: true},
    {key: 'Priority', name: 'Priority',  sortable: true, resizeable: true, 
    editor: (p: { row: { Priority: string | number | readonly string[] | undefined; }; onRowChange: (arg0: any, arg1: boolean) => void; }) => (<select
        autoFocus
        value={p.row.Priority}
        onChange={(e) => {p.onRowChange({...p.row, Priority: e.target.value }, true)}}
        >
        {priorities.map((priority)=>{
            return <option key={priority}>{priority}</option>
        })}
    </select>),
    editorOptions: {
        editOnClick: true
    }
},
    {key: 'Agent', name: 'Agent',  sortable: true, resizeable: true}
]


const Tickets = () => {
    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState(createColumns)
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([])


    const rowKeyGetter = (row: Row) => {
        return row.Id
    }
    type Comparator = (a: Row, b: Row) => number;
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

    const getData = () => {
        fetch('data.json',{
            headers: {
                'Content-Type': 'aplication/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            return res.json()
        }).then((myJson) => {
            setRows(myJson.data)
        })
    }

    useEffect(() => {
      getData()
    }, [])


    return (
        <>
        <div><h3>Unresolved Tickets</h3></div>
        <DataGrid columns={columns} rows={sortedRows} sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns} rowKeyGetter={rowKeyGetter} />
        </>
          
       
    )
}

export default Tickets
