import EdiableSpan from "@components/molecules/EditableSpan";
import { TableType } from "@/types/global";

type TableProps = {
  tableData: TableType;
  editable?: boolean;
};

const Table = ({ tableData, editable }: TableProps) => {
  const { legend, records } = tableData;
  return (
    <table className="table-fixed">
      {legend?.length > 0 && (
        <thead className="text-sm font-semibold">
          <tr>
            {legend.map((item) => (
              <th key={`tableLegend-${item}`} className="w-1/5 py-2 text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="text-sm border-t">
        {records.map(({ fields }) => (
          <tr key={`record-${fields[0]}`}>
            {fields.map((field) => (
              <td key={`field-${field}`} className="py-1.5 max-w-1/2">
                <EdiableSpan
                  editable={editable}
                  className="font-light truncate"
                >
                  {field}
                </EdiableSpan>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
